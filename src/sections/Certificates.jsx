
import { motion } from "framer-motion";
import { Award, ExternalLink, Moon, Sparkles } from "lucide-react";
import { certificates } from "../data/portfolioData";

function Certificates() {
  return (
    <section id="certificates" className="relative px-5 py-24 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="mb-5 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-teal-300">
            <Sparkles size={17} />
            Credentials & Achievements
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Proof of{" "}
            <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-teal-300 bg-clip-text text-transparent">
              progress.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/60 md:text-lg">
            Certifications, course completions, awards, and other professional milestones.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate, index) => (
            <motion.article
              key={`${certificate.title}-${index}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -5 }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] transition-colors hover:border-teal-300/40"
            >
              {certificate.image ? (
                <a
                  href={certificate.image}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${certificate.title} certificate`}
                  className="block overflow-hidden border-b border-white/10 bg-black/20"
                >
                  <img
                    src={certificate.image}
                    alt={`${certificate.title} certificate`}
                    loading="lazy"
                    className="h-52 w-full object-contain p-3 transition-transform duration-500 group-hover:scale-[1.03]"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />
                </a>
              ) : (
                <div className="m-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-teal-300/20 bg-teal-300/10 text-teal-300">
                  <Award size={30} />
                </div>
              )}

              <div className="p-6">
                <div className="mb-5 flex items-center justify-between gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-teal-300/20 bg-teal-300/10 text-teal-300">
                    <Award size={27} />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-white/40">
                    Certificate
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {certificate.title}
                </h3>

                <p className="mt-3 text-sm font-medium text-teal-300">
                  {[certificate.organization, certificate.year]
                    .filter(Boolean)
                    .join(" · ")}
                </p>

                {certificate.description && (
                  <p className="mt-4 text-sm leading-6 text-white/60">
                    {certificate.description}
                  </p>
                )}

                {certificate.image && (
                  <a
                    href={certificate.image}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-teal-300"
                  >
                    View certificate <ExternalLink size={15} />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-7 flex items-start gap-3 rounded-2xl border border-white/10 px-5 py-4 text-sm leading-6 text-white/50">
          <Moon size={18} className="mt-1 shrink-0 text-violet-400" />
          <p>
            Only verified certificates and achievements should be displayed.
            Keep private documents off the public website.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Certificates;
