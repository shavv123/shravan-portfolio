
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  FileSpreadsheet,
  ExternalLink,
} from "lucide-react";

import SectionHeading from "../components/SectionHeading";
import { projects } from "../data/portfolioData";

function Projects() {
  return (
    <section
      id="projects"
      className="px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          number="03"
          title="Featured Projects"
          description="Explore my practical projects in data analytics, business intelligence, and software development."
        />

        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.5,
                delay: (index % 3) * 0.08,
              }}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-white/25"
            >
              {/* Project preview */}
              <div className="relative flex h-52 items-center justify-center overflow-hidden border-b border-white/10 bg-white/[0.03]">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} dashboard preview`}
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                      event.currentTarget.nextElementSibling?.classList.remove(
                        "hidden"
                      );
                    }}
                    className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                  />
                ) : null}

                <div
                  className={`flex h-full w-full flex-col items-center justify-center gap-3 ${
                    project.image ? "hidden" : ""
                  }`}
                >
                  <FileSpreadsheet
                    size={38}
                    className="text-white/50"
                  />
                  <span className="text-sm text-white/40">
                    Project Preview
                  </span>
                </div>

                <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/70 px-3 py-1 text-[10px] uppercase tracking-widest text-white/70">
                  Project {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Project information */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold leading-snug sm:text-2xl">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/60">
                  {project.description}
                </p>

                {/* Technology tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies?.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/70"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Project links */}
                <div className="mt-auto flex flex-wrap gap-3 pt-7">
                  {project.github &&
                    project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm transition hover:bg-white/10"
                      >
                        <Code2 size={16} />
                        View on GitHub
                        <ArrowUpRight size={15} />
                      </a>
                    )}

                  {project.live &&
                    project.live !== "#" &&
                    project.live !== project.github && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm text-black transition hover:bg-white/80"
                      >
                        Live Demo
                        <ExternalLink size={15} />
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
