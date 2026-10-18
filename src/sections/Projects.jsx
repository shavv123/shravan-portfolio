import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  FileSpreadsheet,
  ExternalLink,
  Sparkles,
} from "lucide-react";

import SectionHeading from "../components/SectionHeading";
import { projects } from "../data/portfolioData";

function Projects() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="projects"
      className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-28 lg:px-10"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-40 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-500/[0.07] blur-[110px]"
      />

      <div className="mx-auto max-w-7xl">
        <SectionHeading
          number="03"
          title="Featured Projects"
          description="A selection of practical projects showcasing my work across data analytics, business intelligence, and software development."
        />

        {/* Project count */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-white/45">
            Selected work <span className="text-violet-300">/</span>{" "}
            {String(projects.length).padStart(2, "0")} projects
          </p>

          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-white/60">
            <Sparkles size={14} className="text-violet-300" />
            Built with curiosity
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, y: 24 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                duration: 0.5,
                delay: shouldReduceMotion ? 0 : (index % 3) * 0.08,
              }}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#101019]/80 shadow-lg shadow-black/10 transition-colors duration-300 hover:border-violet-300/30 hover:bg-[#141420]"
            >
              {/* Project preview */}
              <div className="relative h-52 overflow-hidden border-b border-white/10 bg-gradient-to-br from-violet-500/[0.12] via-[#11111b] to-cyan-400/[0.08] sm:h-56">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                      event.currentTarget.nextElementSibling?.classList.remove(
                        "hidden"
                      );
                    }}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                ) : null}

                <div
                  className={`flex h-full w-full flex-col items-center justify-center gap-3 ${
                    project.image ? "hidden" : ""
                  }`}
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-300/20 bg-violet-400/10">
                    <FileSpreadsheet
                      size={30}
                      strokeWidth={1.5}
                      className="text-violet-200"
                    />
                  </div>
                  <span className="text-xs font-medium tracking-wide text-white/45">
                    Project Preview
                  </span>
                </div>

                {/* Image overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#101019]/80 via-transparent to-black/10 opacity-80" />

                <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/60 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-white/80 backdrop-blur-md">
                  Project {String(index + 1).padStart(2, "0")}
                </span>

                <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white/80 backdrop-blur-md transition duration-300 group-hover:border-violet-300/40 group-hover:bg-violet-500/20 group-hover:text-violet-100">
                  <ArrowUpRight size={19} />
                </div>
              </div>

              {/* Project details */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="text-xl font-semibold tracking-tight text-white transition-colors group-hover:text-violet-100">
                  {project.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-white/55">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies?.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-white/[0.09] bg-white/[0.035] px-2.5 py-1.5 text-[11px] font-medium text-white/65 transition-colors group-hover:border-violet-300/15"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-6 flex flex-wrap gap-3 border-t border-white/[0.08] pt-5">
                  {project.github && project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source code on GitHub`}
                      className="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl border border-white/15 px-3.5 py-2.5 text-xs font-semibold text-white/80 transition hover:border-violet-300/40 hover:bg-violet-400/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-300"
                    >
                      <Code2 size={15} />
                      Source Code
                      <ArrowUpRight size={13} />
                    </a>
                  )}

                  {project.live &&
                    project.live !== "#" &&
                    project.live !== project.github && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${project.title} live demo`}
                        className="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 px-3.5 py-2.5 text-xs font-semibold text-white shadow-md shadow-violet-500/10 transition hover:-translate-y-0.5 hover:shadow-violet-500/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300"
                      >
                        Live Demo
                        <ExternalLink size={14} />
                      </a>
                    )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;