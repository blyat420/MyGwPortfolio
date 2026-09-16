import { useState, useRef } from 'react';
import { RefreshCw, ExternalLink, ShieldCheck, Eye, Maximize2, Minimize2, Laptop } from 'lucide-react';
import { ProjectItem } from '../../types';

interface LiveWebsiteEmbedProps {
  project: ProjectItem;
  onCloseDemo: () => void;
}

export function LiveWebsiteEmbed({ project, onCloseDemo }: LiveWebsiteEmbedProps) {
  const embedUrl = project.demoUrl || project.liveUrl || '';
  const [isLoading, setIsLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [key, setKey] = useState(0); // For reload
  const containerRef = useRef<HTMLDivElement>(null);

  const handleRefresh = () => {
    setIsLoading(true);
    setKey((prev) => prev + 1);
  };

  const handleToggleFullscreen = () => {
    if (!containerRef.current) return;

    if (!isFullscreen) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen().catch(() => {});
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
      setIsFullscreen(false);
    }
  };

  // Extract clean domain & path for URL bar
  let displayUrl = embedUrl;
  try {
    const parsed = new URL(embedUrl);
    displayUrl = `${parsed.hostname}${parsed.pathname === '/' ? '' : parsed.pathname}`;
  } catch {
    displayUrl = embedUrl;
  }

  return (
    <div
      ref={containerRef}
      id="live-website-embed-container"
      className={`w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 bg-[#0A0D18] shadow-2xl transition-all duration-300 ${
        isFullscreen ? 'fixed inset-0 z-50 rounded-none h-screen' : 'relative'
      }`}
    >
      {/* Browser Chrome Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 bg-[#101424] border-b border-white/10 font-sans">
        {/* Left: Window Controls & Title */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <button
              onClick={onCloseDemo}
              className="w-3 h-3 rounded-full bg-[#FF5F56] hover:opacity-80 transition cursor-pointer"
              title="Close Live Demo & Return to Slides"
            />
            <button
              onClick={handleRefresh}
              className="w-3 h-3 rounded-full bg-[#FFBD2E] hover:opacity-80 transition cursor-pointer"
              title="Reload Page"
            />
            <button
              onClick={handleToggleFullscreen}
              className="w-3 h-3 rounded-full bg-[#27C93F] hover:opacity-80 transition cursor-pointer"
              title="Toggle Fullscreen"
            />
          </div>

          <div className="hidden sm:flex items-center gap-1.5 text-xs text-neutral-400 pl-2 border-l border-white/10">
            <Laptop className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-semibold text-neutral-200">{project.title}</span>
            <span className="text-neutral-500 font-mono text-[11px]">(Live Website)</span>
          </div>
        </div>

        {/* Center: Fake Address Bar */}
        <div className="flex-1 max-w-md mx-auto min-w-[200px]">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/40 border border-white/10 text-xs text-neutral-300 font-mono">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span className="truncate text-neutral-200">{displayUrl}</span>
            <span className="ml-auto text-[10px] text-emerald-400 uppercase tracking-wider font-semibold shrink-0">
              LIVE
            </span>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={handleRefresh}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition border border-white/10 cursor-pointer"
            title="Reload Demo"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin text-cyan-400' : ''}`} />
          </button>

          <button
            onClick={handleToggleFullscreen}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition border border-white/10 cursor-pointer"
            title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
          >
            {isFullscreen ? (
              <Minimize2 className="w-3.5 h-3.5 text-cyan-400" />
            ) : (
              <Maximize2 className="w-3.5 h-3.5 text-cyan-400" />
            )}
          </button>

          <a
            href={embedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition border border-white/10 text-xs flex items-center gap-1.5 cursor-pointer"
            title="Open in new window"
          >
            <span className="hidden md:inline">Open in New Tab</span>
            <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
          </a>

          <button
            onClick={onCloseDemo}
            className="px-3 py-1.5 rounded-lg bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/30 text-cyan-300 transition text-xs flex items-center gap-1.5 cursor-pointer font-medium"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Show Slides</span>
          </button>
        </div>
      </div>

      {/* Embedded Iframe Container */}
      <div
        className={`relative w-full bg-[#0E121E] overflow-hidden ${
          isFullscreen ? 'h-[calc(100vh-50px)]' : 'h-[620px] sm:h-[700px]'
        }`}
      >
        {isLoading && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#090C16] text-neutral-300 gap-3">
            <div className="relative w-12 h-12">
              <div className="w-12 h-12 rounded-full border-2 border-cyan-500/20 border-t-cyan-400 animate-spin" />
            </div>
            <p className="text-xs font-mono text-cyan-300">
              Connecting to {displayUrl}...
            </p>
            <p className="text-[11px] text-neutral-500 font-sans max-w-xs text-center">
              Loading the actual live deployed website for {project.title}
            </p>
          </div>
        )}

        <iframe
          key={key}
          src={embedUrl}
          title={`${project.title} Live Website Demo`}
          onLoad={() => setIsLoading(false)}
          className="w-full h-full border-0 bg-white"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-modals"
        />
      </div>

      {/* Bottom Status Footer */}
      <div className="px-4 py-2 bg-[#090C16] border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs font-sans text-neutral-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-neutral-300">
            Live interactive environment of <strong className="text-white">{project.title}</strong>
          </span>
        </div>

        <div className="flex items-center gap-3 text-[11px]">
          <span className="text-neutral-500">Hosted on Vercel</span>
          <a
            href={embedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 hover:underline flex items-center gap-1"
          >
            Direct URL <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
