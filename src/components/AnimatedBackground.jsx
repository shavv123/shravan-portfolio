import { motion } from "framer-motion";

function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

      {/* Main Glow */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -80, 60, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[20%] top-[10%] h-[350px] w-[350px] rounded-full bg-white/[0.04] blur-[120px]"
      />

      {/* Second Glow */}
      <motion.div
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 80, -50, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[10%] top-[40%] h-[400px] w-[400px] rounded-full bg-white/[0.03] blur-[130px]"
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

    </div>
  );
}

export default AnimatedBackground;