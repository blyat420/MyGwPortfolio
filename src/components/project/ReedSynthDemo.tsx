import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Activity, Radio, Play, Pause } from 'lucide-react';

const SCALE_NOTES = [
  { note: 'C4', freq: 261.63 },
  { note: 'D4', freq: 293.66 },
  { note: 'E4', freq: 329.63 },
  { note: 'F4', freq: 349.23 },
  { note: 'G4', freq: 392.0 },
  { note: 'A4', freq: 440.0 },
  { note: 'B4', freq: 493.88 },
  { note: 'C5', freq: 523.25 },
];

export function ReedSynthDemo() {
  const [waveform, setWaveform] = useState<OscillatorType>('sawtooth');
  const [cutoffFreq, setCutoffFreq] = useState<number>(1800);
  const [resonance, setResonance] = useState<number>(6);
  const [isPlayingSeq, setIsPlayingSeq] = useState<boolean>(false);
  const [activeNote, setActiveNote] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const seqTimerRef = useRef<number | null>(null);

  const getAudioContext = () => {
    if (!audioCtxRef.current) {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioCtxClass();
    }
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  };

  const playTone = (frequency: number, duration = 0.35, noteLabel?: string) => {
    if (isMuted) return;
    try {
      const ctx = getAudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc.type = waveform;
      osc.frequency.setValueAtTime(frequency, ctx.currentTime);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(cutoffFreq, ctx.currentTime);
      filter.Q.setValueAtTime(resonance, ctx.currentTime);

      gain.gain.setValueAtTime(0.25, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);

      if (noteLabel) {
        setActiveNote(noteLabel);
        setTimeout(() => setActiveNote(null), duration * 1000);
      }
    } catch {
      // Graceful fallback for audio-restricted environments
    }
  };

  // Toggle Arpeggiator sequence
  const toggleSequencer = () => {
    if (isPlayingSeq) {
      if (seqTimerRef.current) clearInterval(seqTimerRef.current);
      setIsPlayingSeq(false);
      setActiveNote(null);
    } else {
      setIsPlayingSeq(true);
      let step = 0;
      const arpeggio = [0, 2, 4, 7, 5, 4, 2, 0];
      seqTimerRef.current = window.setInterval(() => {
        const noteIndex = arpeggio[step % arpeggio.length];
        const noteObj = SCALE_NOTES[noteIndex];
        playTone(noteObj.freq, 0.22, noteObj.note);
        step++;
      }, 240);
    }
  };

  useEffect(() => {
    return () => {
      if (seqTimerRef.current) clearInterval(seqTimerRef.current);
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  // Oscilloscope Canvas Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let frameId: number;
    let phase = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = '#A855F7';
      ctx.lineWidth = 2;
      ctx.beginPath();

      const width = canvas.width;
      const height = canvas.height;
      const midY = height / 2;

      for (let x = 0; x < width; x++) {
        const factor = isPlayingSeq || activeNote ? 1.2 : 0.25;
        const y =
          midY +
          Math.sin(x * 0.04 + phase) * 22 * factor +
          Math.cos(x * 0.02 - phase * 0.5) * 12 * factor;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Second harmonic trail
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.4)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let x = 0; x < width; x++) {
        const factor = isPlayingSeq || activeNote ? 1.0 : 0.15;
        const y = midY + Math.sin(x * 0.08 - phase * 1.5) * 16 * factor;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      phase += isPlayingSeq || activeNote ? 0.12 : 0.03;
      frameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(frameId);
  }, [isPlayingSeq, activeNote]);

  return (
    <div
      id="reed-interactive-synth"
      className="rounded-2xl border border-purple-500/30 bg-[#0C0A14] p-4 sm:p-6 shadow-2xl overflow-hidden text-neutral-200"
    >
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-purple-500/20 pb-4 mb-5">
        <div>
          <div className="flex items-center gap-2">
            <Radio className="w-4 h-4 text-purple-400 animate-pulse" />
            <h4 className="font-semibold text-lg text-white">REED &bull; Modular Synth & Osc Visualizer</h4>
          </div>
          <p className="text-xs text-neutral-400 mt-0.5">
            Interactive Web Audio DSP pipeline with real-time waveform modulation
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 transition"
            title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-purple-300" />}
          </button>
          <button
            onClick={toggleSequencer}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
              isPlayingSeq
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/40'
                : 'bg-purple-500/20 border border-purple-500/40 text-purple-300 hover:bg-purple-500/30'
            }`}
          >
            {isPlayingSeq ? (
              <>
                <Pause className="w-3.5 h-3.5" /> Stop Arp
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5" /> Play Arpeggiator
              </>
            )}
          </button>
        </div>
      </div>

      {/* Waveform Oscilloscope Screen */}
      <div className="relative rounded-xl border border-purple-500/20 bg-black/60 p-3 mb-6 overflow-hidden">
        <div className="absolute top-3 left-3 flex items-center gap-2 text-[11px] font-mono text-purple-400/80">
          <Activity className="w-3.5 h-3.5" />
          <span>SCOPE 1 &bull; 48kHz / 24-bit</span>
        </div>
        <canvas ref={canvasRef} width={800} height={110} className="w-full h-28 block" />
      </div>

      {/* Controls: Knobs & Waveforms */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
        <div>
          <label className="text-xs uppercase font-mono tracking-wider text-purple-300/80 mb-2 block">
            Oscillator Shape
          </label>
          <div className="grid grid-cols-2 gap-1.5">
            {(['sawtooth', 'square', 'sine', 'triangle'] as OscillatorType[]).map((type) => (
              <button
                key={type}
                onClick={() => setWaveform(type)}
                className={`py-1.5 px-2 rounded text-xs font-mono capitalize transition ${
                  waveform === type
                    ? 'bg-purple-500 text-black font-semibold shadow-md shadow-purple-500/20'
                    : 'bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-neutral-200'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="flex justify-between text-xs font-mono text-purple-300/80 mb-2">
            <span>Cutoff Filter</span>
            <span className="text-purple-400">{cutoffFreq} Hz</span>
          </div>
          <input
            type="range"
            min={200}
            max={6000}
            step={50}
            value={cutoffFreq}
            onChange={(e) => setCutoffFreq(Number(e.target.value))}
            className="w-full accent-purple-500 bg-neutral-800 rounded-lg cursor-pointer h-1.5"
          />
        </div>

        <div>
          <div className="flex justify-between text-xs font-mono text-purple-300/80 mb-2">
            <span>Resonance (Q)</span>
            <span className="text-purple-400">{resonance}</span>
          </div>
          <input
            type="range"
            min={1}
            max={18}
            step={1}
            value={resonance}
            onChange={(e) => setResonance(Number(e.target.value))}
            className="w-full accent-purple-500 bg-neutral-800 rounded-lg cursor-pointer h-1.5"
          />
        </div>
      </div>

      {/* Musical Piano / Trigger Keys */}
      <div>
        <span className="text-xs uppercase font-mono tracking-wider text-purple-300/80 mb-2 block">
          Chromatic Note Triggers
        </span>
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
          {SCALE_NOTES.map((n) => (
            <button
              key={n.note}
              onClick={() => playTone(n.freq, 0.45, n.note)}
              className={`py-3 rounded-lg border font-mono text-xs font-bold transition active:scale-95 flex flex-col items-center justify-center gap-1 ${
                activeNote === n.note
                  ? 'bg-purple-500 border-purple-300 text-black shadow-lg shadow-purple-500/50 scale-[0.98]'
                  : 'bg-white/[0.04] border-white/10 text-neutral-300 hover:border-purple-400/50 hover:bg-white/[0.08]'
              }`}
            >
              <span>{n.note}</span>
              <span className="text-[10px] opacity-60 font-normal">{Math.round(n.freq)}Hz</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
