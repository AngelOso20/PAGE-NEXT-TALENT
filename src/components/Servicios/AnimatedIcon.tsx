'use client';

import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';

interface AnimatedIconProps {
  iconPath: string;
  animationPath: string;
  alt: string;
  className?: string;
}

const AnimatedIcon: React.FC<AnimatedIconProps> = ({ 
  iconPath, 
  animationPath, 
  alt, 
  className 
}) => {
  const [animationData, setAnimationData] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Cargar la animación JSON
    fetch(animationPath)
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => {
        console.warn(`No se pudo cargar la animación: ${animationPath}`, error);
      });
  }, [animationPath]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div 
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {animationData && isHovered ? (
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          style={{ width: '100%', height: '100%' }}
        />
      ) : (
        <img
          src={iconPath}
          alt={alt}
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      )}
    </div>
  );
};

export default AnimatedIcon;
