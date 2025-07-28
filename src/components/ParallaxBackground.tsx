import React, { useEffect, useState } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';

interface ParallaxBackgroundProps {
  children: React.ReactNode;
  className?: string;
  backgroundImage?: string;
  speed?: number;
}

const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({
  children,
  className = '',
  backgroundImage,
  speed = 0.5
}) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 1000 * speed]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {backgroundImage && (
        <motion.div
          style={{ y }}
          className="absolute inset-0 will-change-transform"
        >
          <div
            className="absolute inset-0 w-full h-[120%] bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              transform: 'translate3d(0, 0, 0)'
            }}
          />
        </motion.div>
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ParallaxBackground;