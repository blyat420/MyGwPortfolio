import { useState } from 'react';
import { ArrowLeft, ArrowRight, ExternalLink, Play, Eye } from 'lucide-react';
import { ProjectItem, ProjectMedia } from '../../types';
import { LiveWebsiteEmbed } from './LiveWebsiteEmbed';
import { ProjectImageSlides } from './ProjectImageSlides';

interface ProjectDetailViewProps {
  project: ProjectItem;
  allProjects: ProjectItem[];
  onBack: () => void;
  onSelectProject: (id: string) => void;
  onOpenLightbox: (mediaList: ProjectMedia[], initialIndex: number) => void;
}

export function ProjectDetailView({
  project,
  allProjects,
  onBack,
  onSelectProject,
  onOpenLightbox,
}: ProjectDetailViewProps) {
  const [showInteractiveDemo, setShowInteractiveDemo] = useState(false);

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject =
    currentIndex > 0 ? allProjects[currentIndex - 1] : allProjects[allProjects.length - 1];
  const nextProject =
    currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : allProjects[0];

  return (
    <div className="min-h-screen py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Figma Breadcrumb & Quick Switcher */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10 text-xs sm:text-sm font-sans">
          <div className="flex items-center gap-2.5">
            <button
              id="back-to-projects-btn"
              onClick={onBack}
              className="group px-3 py-1.5 rounded-lg bg-white/5 hover:bg-cyan-500/15 border border-white/10 hover:border-cyan-500/30 text-neutral-300 hover:text-cyan-300 transition-all duration-200 cursor-pointer flex items-center gap-2 shadow-sm"
              title="Return directly to Projects section"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-cyan-400 group-hover:-translate-x-1 transition-transform duration-200" />
              <span className="font-sans font-semibold tracking-wider text-xs uppercase text-neutral-300 group-hover:text-cyan-300 transition-colors">
                PROJECTS
              </span>
            </button>
            <span className="text-neutral-600 font-sans">&gt;&gt;</span>
            <span className="font-sans text-white font-bold tracking-wider uppercase">
              {project.title}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {project.hasInteractiveDemo && (
              <button
                onClick={() => setShowInteractiveDemo(!showInteractiveDemo)}
                className="px-3.5 py-1.5 rounded-lg bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/25 transition text-xs font-mono flex items-center gap-1.5 cursor-pointer"
              >
                {showInteractiveDemo ? (
                  <>
                    <Eye className="w-3.5 h-3.5" />
                    <span>Show Image Slides</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Launch Live Interactive Demo</span>
                  </>
                )}
              </button>
            )}

            <div className="flex items-center gap-1.5 border-l border-white/10 pl-3">
              <button
                onClick={() => {
                  setShowInteractiveDemo(false);
                  onSelectProject(prevProject.id);
                }}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition cursor-pointer"
                title={`Previous: ${prevProject.title}`}
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-sans text-neutral-500 px-1">
                {currentIndex + 1} / {allProjects.length}
              </span>
              <button
                onClick={() => {
                  setShowInteractiveDemo(false);
                  onSelectProject(nextProject.id);
                }}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition cursor-pointer"
                title={`Next: ${nextProject.title}`}
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Project Visual Showcase Section (Image Slides or Live Website Demo) */}
        <div className="rounded-3xl border border-white/10 bg-[#090C15]/70 p-4 sm:p-6 backdrop-blur-md shadow-2xl">
          {showInteractiveDemo ? (
            <LiveWebsiteEmbed
              project={project}
              onCloseDemo={() => setShowInteractiveDemo(false)}
            />
          ) : (
            <ProjectImageSlides
              project={project}
              onOpenLightbox={onOpenLightbox}
              showInteractiveDemo={showInteractiveDemo}
              onToggleDemo={() => setShowInteractiveDemo(!showInteractiveDemo)}
            />
          )}
        </div>

        {/* Project Title and Indonesian Narrative Description matching Figma */}
        <div className="space-y-6 text-left max-w-4xl">
          {/* Title in Akira Expanded */}
          <h1 className="font-akira text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-wider uppercase">
            {project.title}
          </h1>

          {/* Subtitle / Role Tag */}
          <p className="text-sm font-sans text-cyan-400 font-medium">
            {project.subtitle}
          </p>

          {/* Description Paragraphs from user's Figma designs */}
          <div className="space-y-4 text-sm sm:text-base text-neutral-300 leading-relaxed font-sans font-normal">
            <p>{project.overview}</p>
            <p>{project.challenge}</p>
            {project.solution && <p>{project.solution}</p>}
          </div>

          {/* Highlights & Features */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="pt-4 border-t border-white/10 space-y-3">
              <h4 className="text-xs font-sans uppercase tracking-widest text-neutral-400 font-semibold">
                Fitur &amp; Sorotan Proyek
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-neutral-300 font-sans">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="text-cyan-400 font-bold">&bull;</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Visit The Site link in Italic matching Figma */}
          <div className="pt-6">
            <a
              href={project.liveUrl || project.figmaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 italic font-bold text-base sm:text-lg text-white hover:text-cyan-300 transition group"
            >
              <span className="underline decoration-cyan-400/50 underline-offset-4 group-hover:decoration-cyan-400">
                Visit The Site
              </span>
              <ExternalLink className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Bottom Switcher Navigation */}
        <div className="pt-10 border-t border-white/10 flex items-center justify-between">
          <button
            onClick={() => {
              setShowInteractiveDemo(false);
              onSelectProject(prevProject.id);
            }}
            className="flex items-center gap-2 text-xs sm:text-sm text-neutral-400 hover:text-white transition cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous: {prevProject.title}</span>
          </button>

          <button
            id="bottom-back-to-projects-btn"
            onClick={onBack}
            className="text-xs sm:text-sm text-cyan-400 hover:text-cyan-300 transition cursor-pointer font-sans hover:underline decoration-cyan-400/50 underline-offset-4"
          >
            &uarr; Back to Projects
          </button>

          <button
            onClick={() => {
              setShowInteractiveDemo(false);
              onSelectProject(nextProject.id);
            }}
            className="flex items-center gap-2 text-xs sm:text-sm text-neutral-400 hover:text-white transition cursor-pointer"
          >
            <span>Next: {nextProject.title}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
