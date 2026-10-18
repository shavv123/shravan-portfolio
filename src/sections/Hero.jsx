import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Code2,
  Database,
  BarChart3,
  Sparkles,
} from "lucide-react";

const technologies = [
  { label: "React", icon: Code2, className: "tech-react" },
  { label: "Analytics", icon: BarChart3, className: "tech-analytics" },
  { label: "Database", icon: Database, className: "tech-database" },
];

function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const floatAnimation = (distance = 12, duration = 4) =>
    shouldReduceMotion
      ? {}
      : {
          y: [0, -distance, 0],
          transition: {
            duration,
            repeat: Infinity,
            ease: "easeInOut",
          },
        };

  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-28 text-white sm:px-8 lg:px-10 lg:pt-24"
    >
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-[5%] top-[15%] h-64 w-64 rounded-full bg-violet-600/10 blur-[100px]" />
        <div className="absolute bottom-[10%] right-[5%] h-72 w-72 rounded-full bg-cyan-500/10 blur-[110px]" />

        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(167,139,250,.7) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
            maskImage:
              "linear-gradient(to bottom, black, transparent 85%)",
          }}
        />
      </div>

      <div className="mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-8">
          {/* LEFT CONTENT */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10"
          >
            {/* Availability badge */}
            <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-4 py-2 text-xs font-medium tracking-wide text-white/70 sm:text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Open to opportunities
            </div>

            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300 sm:text-sm sm:tracking-[0.35em]">
              BCA Graduate · Data & Technology
            </p>

            <h1 className="max-w-3xl text-5xl font-bold leading-[1.04] tracking-[-0.055em] sm:text-6xl md:text-7xl xl:text-8xl">
              Hi, I&apos;m
              <br />
              <span className="bg-gradient-to-r from-white via-violet-200 to-cyan-300 bg-clip-text text-transparent">
                Shravan.
              </span>
            </h1>

            <h2 className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 text-lg font-medium text-white/70 sm:text-xl md:text-2xl">
              <span>Data Analyst</span>
              <span className="text-violet-400">/</span>
              <span>Web Developer</span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/50 sm:text-base sm:leading-8 md:text-lg">
              I turn raw data into meaningful insights and build modern
              digital experiences through analytics, creative problem-solving,
              and technology.
            </p>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap">
              <a
                href="#projects"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-violet-500/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-300 sm:px-7"
              >
                Explore My Work
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white/85 transition hover:border-white/30 hover:bg-white/[0.07] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-300 sm:px-7"
              >
                <Mail size={17} />
                Contact Me
              </a>
            </div>

            {/* Social links */}
            <div className="mt-8 flex items-center gap-3">
              <span className="mr-1 text-xs text-white/35">Find me on</span>

              <a
                href="https://github.com/shavv123"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/60 transition hover:-translate-y-0.5 hover:border-violet-400/50 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-300"
              >
                <Github size={18} />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile — replace with your profile URL"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/60 transition hover:-translate-y-0.5 hover:border-violet-400/50 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-300"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="mailto:your-email@gmail.com"
                aria-label="Send me an email"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/60 transition hover:-translate-y-0.5 hover:border-cyan-400/50 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300"
              >
                <Mail size={18} />
              </a>
            </div>
          </motion.div>

          {/* RIGHT ANIMATED VISUAL */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative mx-auto flex w-full max-w-[480px] items-center justify-center py-8 sm:py-10 lg:py-12"
          >
            <div className="hero-visual relative flex aspect-square w-full items-center justify-center">
              {/* Ambient glow */}
              <div
                aria-hidden="true"
                className="absolute h-[65%] w-[65%] rounded-full bg-violet-500/15 blur-[70px]"
              />

              {/* Orbit rings */}
              <motion.div
                aria-hidden="true"
                animate={
                  shouldReduceMotion ? {} : { rotate: 360 }
                }
                transition={{
                  duration: 32,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute h-[84%] w-[84%] rounded-full border border-violet-300/20"
              >
                <span className="absolute left-[15%] top-[13%] h-3 w-3 rounded-full bg-violet-300 shadow-[0_0_20px_#a78bfa]" />
                <span className="absolute bottom-[12%] right-[14%] h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_18px_#67e8f9]" />
              </motion.div>

              <motion.div
                aria-hidden="true"
                animate={
                  shouldReduceMotion ? {} : { rotate: -360 }
                }
                transition={{
                  duration: 42,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute h-[66%] w-[66%] rounded-full border border-dashed border-cyan-300/20"
              >
                <span className="absolute right-[10%] top-[18%] h-2 w-2 rounded-full bg-pink-300 shadow-[0_0_16px_#f9a8d4]" />
              </motion.div>

              {/* Central profile card */}
              <motion.div
                animate={floatAnimation(10, 5)}
                className="relative z-10 w-[74%] max-w-[310px] rounded-[28px] border border-white/15 bg-[#11111b]/90 p-3 shadow-2xl shadow-violet-950/40 backdrop-blur-xl sm:rounded-[34px] sm:p-4"
              >
                <div className="relative overflow-hidden rounded-[22px] border border-white/10 bg-gradient-to-br from-violet-500/10 via-[#11111b] to-cyan-400/[0.08] p-5 sm:rounded-[26px] sm:p-7">
                  {/* Decorative corner accents */}
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full border border-violet-300/20" />
                  <div className="absolute -right-5 -top-5 h-20 w-20 rounded-full border border-cyan-300/20" />

                  <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-violet-300/40 bg-gradient-to-br from-violet-500/20 to-cyan-400/10 shadow-lg shadow-violet-500/10 sm:h-28 sm:w-28">
                    <div className="absolute inset-1 rounded-full border border-white/10" />
                    <Code2
                      size={43}
                      strokeWidth={1.4}
                      className="text-violet-200 sm:h-12 sm:w-12"
                    />
                    <span className="absolute bottom-0 right-0 h-4 w-4 rounded-full border-[3px] border-[#151521] bg-emerald-400" />
                  </div>

                  <div className="relative mt-5 text-center">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-cyan-300">
                      Developer Portfolio
                    </p>

                    <h3 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                      Shravan<span className="text-violet-300">.</span>
                    </h3>

                    <p className="mt-2 text-xs text-white/50 sm:text-sm">
                      Data · Code · Creative Thinking
                    </p>
                  </div>

                  {/* Tech pills */}
                  <div className="relative mt-5 flex flex-wrap justify-center gap-2">
                    {technologies.map(({ label, icon: Icon }) => (
                      <span
                        key={label}
                        className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-[10px] text-white/70 sm:text-xs"
                      >
                        <Icon size={12} className="text-violet-300" />
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Floating mini cards */}
              <motion.div
                animate={floatAnimation(9, 4.2)}
                className="absolute left-0 top-[17%] z-20 rounded-2xl border border-white/10 bg-[#151521]/95 p-3 shadow-xl shadow-black/20 backdrop-blur-lg sm:-left-1 sm:p-3.5"
              >
                <div className="flex items-center gap-2.5">
                  <div className="rounded-lg bg-violet-400/15 p-2 text-violet-200">
                    <BarChart3 size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">Analytics</p>
                    <p className="mt-0.5 text-[10px] text-white/40">Insights from data</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={floatAnimation(11, 4.8)}
                className="absolute bottom-[15%] right-0 z-20 rounded-2xl border border-white/10 bg-[#151521]/95 p-3 shadow-xl shadow-black/20 backdrop-blur-lg sm:-right-1 sm:p-3.5"
              >
                <div className="flex items-center gap-2.5">
                  <div className="rounded-lg bg-cyan-400/15 p-2 text-cyan-200">
                    <Database size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">Data & Web</p>
                    <p className="mt-0.5 text-[10px] text-white/40">Building solutions</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating sparkles */}
              <motion.div
                animate={
                  shouldReduceMotion
                    ? {}
                    : { y: [0, -7, 0], opacity: [0.5, 1, 0.5] }
                }
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                aria-hidden="true"
                className="absolute right-[17%] top-[8%] text-violet-200"
              >
                <Sparkles size={22} />
              </motion.div>

              <motion.div
                aria-hidden="true"
                animate={
                  shouldReduceMotion
                    ? {}
                    : { y: [0, 7, 0], opacity: [0.4, 0.9, 0.4] }
                }
                transition={{
                  duration: 3.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-[9%] left-[18%] text-cyan-200"
              >
                <Sparkles size={17} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;