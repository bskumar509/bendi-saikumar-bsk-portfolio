import { motion } from "framer-motion";

interface AnimatedBackgroundProps {
  variant?: "particles" | "gradient" | "geometric";
  className?: string;
}

export const AnimatedBackground = ({ variant = "gradient", className = "" }: AnimatedBackgroundProps) => {
  if (variant === "particles") {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              y: [null, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    );
  }

  if (variant === "geometric") {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 border border-accent/20 rounded-lg"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-24 h-24 border border-primary/20 rounded-full"
          animate={{
            rotate: -360,
            x: [0, 20, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-16 h-16 bg-accent/10 rounded-lg"
          animate={{
            rotate: [0, 45, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    );
  }

  // Default gradient variant
  return (
    <div className={`absolute inset-0 ${className}`}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/30"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </div>
  );
};