import { motion } from "framer-motion";

function SectionHeading({ number, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className="mb-14"
    >
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-white/30">
        {number} — {title}
      </p>

      <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 max-w-2xl text-base leading-7 text-white/40 md:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}

export default SectionHeading;