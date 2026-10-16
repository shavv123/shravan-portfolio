import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center px-6 pt-24"
    >
      <div className="mx-auto w-full max-w-7xl">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/50">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

              Available for opportunities
            </div>

            {/* Small heading */}
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-white/30">
              BCA Graduate • Data & Technology
            </p>

            {/* Main heading */}
            <h1 className="text-6xl font-bold leading-[0.9] tracking-tight sm:text-7xl md:text-8xl">
              Hi, I'm
              <br />

              <span className="bg-gradient-to-r from-white via-white to-white/30 bg-clip-text text-transparent">
                Shravan.
              </span>
            </h1>

            {/* Role */}
            <h2 className="mt-8 text-xl text-white/60 md:text-2xl">
              Data Analyst
              <span className="mx-3 text-white/20">•</span>
              Web Developer
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/40 md:text-lg">
              I transform raw data into meaningful insights and build
              modern digital experiences using technology, analytics
              and creative problem solving.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap gap-4">

              <a
                href="#projects"
                className="group flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-medium text-black transition duration-300 hover:scale-105"
              >
                Explore My Work

                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/15 px-7 py-3.5 font-medium text-white transition hover:bg-white/[0.05]"
              >
                Contact Me
              </a>

            </div>

            {/* Social */}
            <div className="mt-9 flex gap-3">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 p-3 text-white/40 transition hover:border-white/30 hover:text-white"
              >
                <Github size={19} />
              </a>

              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 p-3 text-white/40 transition hover:border-white/30 hover:text-white"
              >
                <Linkedin size={19} />
              </a>

              <a
                href="mailto:your-email@gmail.com"
                className="rounded-full border border-white/10 p-3 text-white/40 transition hover:border-white/30 hover:text-white"
              >
                <Mail size={19} />
              </a>

            </div>

          </motion.div>


          {/* RIGHT PROFILE CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden justify-center lg:flex"
          >

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >

              {/* Glow */}
              <div className="absolute inset-0 rounded-[40px] bg-white/[0.05] blur-3xl" />

              {/* Card */}
              <div className="relative h-[460px] w-[360px] rounded-[40px] border border-white/10 bg-white/[0.03] p-3 backdrop-blur-xl">

                <div className="flex h-full flex-col items-center justify-center rounded-[32px] border border-white/5 bg-black/50">

                  {/* Profile Placeholder */}
                  <div className="flex h-32 w-32 items-center justify-center rounded-full border border-white/10 bg-white/[0.05]">

                    <span className="text-5xl font-bold text-white/80">
                      Sk
                    </span>

                  </div>

                  <h3 className="mt-7 text-2xl font-semibold">
                    Shravan 
                  </h3>

                  <p className="mt-2 text-sm text-white/30">
                    Data Analyst
                  </p>

                  {/* Stats */}
                  <div className="mt-8 grid grid-cols-2 gap-3">

                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-7 py-4 text-center">
                      <p className="text-2xl font-bold">
                        12+
                      </p>

                      <p className="mt-1 text-xs text-white/30">
                        Skills
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-7 py-4 text-center">
                      <p className="text-2xl font-bold">
                        4+
                      </p>

                      <p className="mt-1 text-xs text-white/30">
                        Projects
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default Hero;