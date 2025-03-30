import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { IconButton, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ChatBubbleOutline from '@mui/icons-material/ChatBubbleOutline';

const FloatingIcon = () => {
  const [isVisible, setIsVisible] = useState(true);
  const iconRef = useRef<HTMLDivElement>(null);

  // Animation: Move icon from logo to bottom-right
  useEffect(() => {
    if (!isVisible) return;

    const logo = document.getElementById('header-logo');
    if (logo && iconRef.current) {
      const logoRect = logo.getBoundingClientRect();
      const iconRect = iconRef.current.getBoundingClientRect();

      // Set initial position (logo position relative to viewport)
      console.log(logoRect)
      gsap.set(iconRef.current, {
        x: 0   ,
        y: -80,
        visibility: 'hidden',
      });

      // Calculate final position (bottom-right corner with margin)
      const endX = window.innerWidth - iconRect.width - 200; // 20px margin
      const endY = window.innerHeight - iconRect.height - 200; // 20px margin

      // Animate to bottom-right
      gsap.to(iconRef.current, {
        x: endX,
        y: endY,
        visibility: 'visible',
        duration: 2,
        ease: 'power2.inOut',
      });
    }
  }, [isVisible]);

  // Animation: Move icon back to logo and hide
  const handleClose = () => {
    const logo = document.getElementById('header-logo');
    if (logo && iconRef.current) {
      const logoRect = logo.getBoundingClientRect();

      // Animate back to logo
      gsap.to(iconRef.current, {
        x: logoRect.left,
        y: logoRect.top,
        duration: 1,
        ease: 'power2.inOut',
        onComplete: () => setIsVisible(false), // Hide after animation
      });
    }
  };

  if (!isVisible) return null;

  return (
    <Box
      ref={iconRef}
      sx={{
        position: 'fixed',
        zIndex: 9999, // Ensure it's above other elements
        cursor: 'pointer',
        '&:hover': { transform: 'scale(1.05)' },
      }}
    >
      <IconButton
        color="primary"
        sx={{
          bgcolor: 'primary.main',
          '&:hover': { bgcolor: 'primary.dark' },
        }}
      >
        <ChatBubbleOutline sx={{ color: 'white' }} /> {/* Floating icon */}
      </IconButton>
      <IconButton
        onClick={handleClose}
        sx={{
        //   position: 'fixed',
        //   top: -8,
        //   right: -8,
        //   p: 0.5,
          bgcolor: 'error.main',
          '&:hover': { bgcolor: 'error.dark' },
        }}
      >
        <CloseIcon sx={{ fontSize: 16, color: 'white' }} /> {/* Close icon */}
      </IconButton>
    </Box>
  );
};

export default FloatingIcon;