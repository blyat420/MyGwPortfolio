import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ProjectItem, ProjectMedia } from '../../types';
import { TiltCard } from '../ui/TiltCard';

type ProjectTab = 'systems' | 'designs' | 'videos';

const projectTabs: { id: ProjectTab; label: string }[] = [
  { id: 'systems', label: "System's" },
  { id: 'designs', label: "Design's" },
  { id: 'videos', label: "Video's" },
];

const projectsByTab: Record<ProjectTab, string[]> = {
  systems: ['p1', 'p2', 'p4', 'p5', 'p7', 'p8'],
  designs: ['p3', 'p6'],
  videos: [],
};

interface ProjectShowcaseProps {
  projects: ProjectItem[];
  onSelectProject: (id: string) => void;
  onOpenLightbox: (mediaList: ProjectMedia[], initialIndex: number) => void;
}

export function ProjectShowcase({
  projects,
  onSelectProject,
}: ProjectShowcaseProps) {
  const [activeTab, setActiveTab] = useState<ProjectTab>('systems');
  const activeTabIndex = projectTabs.findIndex((tab) => tab.id === activeTab);
  const visibleProjects = projects.filter((project) =>
    projectsByTab[activeTab].includes(project.id),
  );

  return (
    <section id="projects-section" className="py-20 sm:py-28 relative bg-[#090909]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading matching Figma */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="font-akira text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-wider uppercase">
            WHAT I'VE BUILT.
          </h2>
        </motion.div>

        <div className="relative mx-auto mb-12 w-full max-w-3xl pb-8">
          <div className="flex w-full rounded-full bg-white/20 p-1.5 backdrop-blur-md">
            {projectTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className="relative flex-1 rounded-full px-3 py-3 text-sm font-medium text-neutral-300 transition-colors duration-300 sm:px-6 sm:text-base"
                aria-pressed={activeTab === tab.id}
              >
                {activeTab === tab.id && (
                  <motion.span
                    layoutId="active-project-tab"
                    className="absolute inset-0 rounded-full bg-white shadow-lg"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className={`relative z-10 ${activeTab === tab.id ? 'text-black' : ''}`}>
                  {tab.label}
                </span>
              </button>
            ))}
          </div>

          <motion.span
            aria-hidden="true"
            className="absolute bottom-0 h-2 w-2 -translate-x-1/2 rounded-full bg-white shadow-lg"
            animate={{ left: `${((activeTabIndex + 0.5) / projectTabs.length) * 100}%` }}
            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
          />
        </div>

        <AnimatePresence mode="wait">
          {visibleProjects.length > 0 ? (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {visibleProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="h-full"
                >
              <TiltCard
                maxTilt={10}
                perspective={1000}
                scale={1.02}
                glowColor={project.glowColor || 'rgba(56, 189, 248, 0.25)'}
                className="h-full"
              >
                <div
                  onClick={() => onSelectProject(project.id)}
                  className="group relative h-full rounded-2xl bg-[#0D111A] border border-white/10 hover:border-white/25 overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-xl cursor-pointer"
                >
                  <div>
                    {/* Media Preview Image */}
                    <div className="relative aspect-[16/10] min-h-[210px] sm:min-h-[230px] overflow-hidden bg-[#07090E]">
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0D111A] via-transparent to-black/20" />
                    </div>

                    {/* Card Content from Figma */}
                    <div className="p-6 space-y-3 text-left">
                      <h3 className="font-akira font-bold text-xl sm:text-2xl text-white tracking-wide group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-neutral-400 font-normal leading-relaxed">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Right "Detail" link in Italic matching Figma */}
                  <div className="px-6 pb-6 pt-2 flex items-center justify-end">
                    <span className="italic text-sm sm:text-base font-medium text-neutral-300 group-hover:text-cyan-300 transition-colors flex items-center gap-1">
                      Detail &rarr;
                    </span>
                  </div>
                </div>
              </TiltCard>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="videos-empty"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="flex min-h-52 items-center justify-center rounded-2xl border border-white/10 bg-[#0D111A]/80 px-6 text-center text-neutral-400"
            >
              Video projects are coming soon.
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
