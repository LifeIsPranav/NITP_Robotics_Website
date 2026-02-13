import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export function CursorFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('cursor-pointer');
      
      setIsHovering(isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: isHovering ? 1.5 : 1,
          }}
          transition={{ duration: 0.2 }}
        >
          <div className="w-2 h-2 bg-white rounded-full" />
        </motion.div>
      </motion.div>

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: isHovering ? 1.8 : 1,
            opacity: isHovering ? 0.6 : 0.3,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-10 h-10 border-2 border-primary rounded-full" />
        </motion.div>
      </motion.div>

      {/* Glowing trail effect */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9997]"
        style={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 100 }}
      >
        <div className="relative -translate-x-1/2 -translate-y-1/2">
          <motion.div
            className="w-20 h-20 bg-primary/20 rounded-full blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>

      {/* Particles effect */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed top-0 left-0 pointer-events-none z-[9996]"
          style={{
            x: cursorX,
            y: cursorY,
          }}
          transition={{ 
            type: "spring", 
            damping: 20 + i * 5, 
            stiffness: 80 - i * 10,
            mass: 0.8 + i * 0.2
          }}
        >
          <motion.div
            className="relative -translate-x-1/2 -translate-y-1/2"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.6, 0, 0.6],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.3,
            }}
          >
            <div 
              className="w-1 h-1 bg-gradient-to-r from-primary to-purple-500 rounded-full"
              style={{
                transform: `translate(${Math.cos(i * 2) * 20}px, ${Math.sin(i * 2) * 20}px)`,
              }}
            />
          </motion.div>
        </motion.div>
      ))}
    </>
  );
}
