import React, { useEffect, useRef } from 'react';

/**
 * StarfieldBackground — Clean Starfield Background
 * Features:
 * - Transparent canvas with dynamic cyan, blue, violet & white stars
 * - Four-point tapered cross sparkles & shooting stars
 * - Zero full-screen background image overlays
 * - Fixed z-index: 0 placement behind all page content
 */
export const StarfieldBackground = ({ mode = 'default', selectedProject = null }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId = null;
    let width = window.innerWidth;
    let height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Canvas setup
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // Star count: ~100 on desktop, ~55 on mobile
    const getStarCount = (w) => (w < 768 ? 55 : 100);
    let starCount = getStarCount(width);

    // Dev Infinity Palette: Cyan, Light Cyan, Blue, Soft Violet, Crisp White
    const starColors = [
      { r: 34,  g: 211, b: 238 }, // Vibrant Cyan (#22d3ee)
      { r: 103, g: 232, b: 249 }, // Light Cyan (#67e8f9)
      { r: 59,  g: 130, b: 246 }, // Dev Infinity Blue (#3b82f6)
      { r: 167, g: 139, b: 250 }, // Soft Violet (#a78bfa)
      { r: 240, g: 248, b: 255 }, // Ice White (#f0f8ff)
      { r: 255, g: 255, b: 255 }, // Crisp White Core
    ];

    // Star class
    class Star {
      constructor(tier = 'normal') {
        this.reset(tier);
      }

      reset(tier = 'normal') {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.tier = tier;

        const isMobile = width < 768;
        const mobileScale = isMobile ? 0.9 : 1.0;

        if (this.tier === 'highlighted') {
          this.depth = 0.85 + Math.random() * 0.15;
          this.radius = (2.5 + Math.random() * 1.2) * mobileScale;
          this.baseAlpha = 0.90 + Math.random() * 0.10;
          this.color = Math.random() < 0.7
            ? { r: 34, g: 211, b: 238 }  // Vibrant Cyan (#22d3ee)
            : { r: 255, g: 255, b: 255 }; // Crisp White
          this.rayLength = (9.0 + Math.random() * 7.0) * mobileScale;
        } else if (this.tier === 'normal') {
          this.depth = 0.5 + Math.random() * 0.35;
          this.radius = (1.4 + Math.random() * 0.8) * mobileScale;
          this.baseAlpha = 0.65 + Math.random() * 0.30;
          this.color = starColors[Math.floor(Math.random() * starColors.length)];
        } else {
          this.depth = 0.2 + Math.random() * 0.3;
          this.radius = (0.8 + Math.random() * 0.6) * mobileScale;
          this.baseAlpha = 0.40 + Math.random() * 0.30;
          this.color = starColors[Math.floor(Math.random() * starColors.length)];
        }

        const speed = 0.05 + this.depth * 0.07;
        this.vx = (Math.random() - 0.5) * speed;
        this.vy = (Math.random() - 0.5) * speed;

        this.twinklePhase = Math.random() * Math.PI * 2;
        this.twinkleSpeed = 0.02 + Math.random() * 0.035;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        const pad = 20;
        if (this.x < -pad) this.x = width + pad;
        if (this.x > width + pad) this.x = -pad;
        if (this.y < -pad) this.y = height + pad;
        if (this.y > height + pad) this.y = -pad;

        this.twinklePhase += this.twinkleSpeed;
      }

      draw(context) {
        const posX = this.x;
        const posY = this.y;

        const twinkleFactor = 0.55 + Math.sin(this.twinklePhase) * 0.45;
        const alpha = this.baseAlpha * twinkleFactor;
        const { r, g, b } = this.color;
        const finalAlpha = Math.max(0.15, alpha);

        // Halo
        const haloRadius = this.radius * (3.2 + Math.sin(this.twinklePhase) * 0.8);
        const glowGrad = context.createRadialGradient(posX, posY, 0, posX, posY, haloRadius);
        glowGrad.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${finalAlpha * 0.75})`);
        glowGrad.addColorStop(0.4, `rgba(${r}, ${g}, ${b}, ${finalAlpha * 0.35})`);
        glowGrad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

        context.beginPath();
        context.arc(posX, posY, haloRadius, 0, Math.PI * 2);
        context.fillStyle = glowGrad;
        context.fill();

        if (this.tier === 'highlighted') {
          // Sparkle Cross
          const rayLen = this.rayLength * (0.85 + Math.sin(this.twinklePhase * 1.5) * 0.25);
          context.save();
          context.beginPath();
          context.moveTo(posX - rayLen, posY);
          context.lineTo(posX + rayLen, posY);
          context.moveTo(posX, posY - rayLen);
          context.lineTo(posX, posY + rayLen);

          context.strokeStyle = `rgba(${r}, ${g}, ${b}, ${finalAlpha * 0.95})`;
          context.lineWidth = 1.5;
          context.stroke();
          context.restore();

          // Core
          context.beginPath();
          context.arc(posX, posY, Math.max(1.2, this.radius * 0.65), 0, Math.PI * 2);
          context.fillStyle = `rgba(255, 255, 255, ${Math.min(1.0, finalAlpha * 1.3)})`;
          context.fill();
        } else {
          context.beginPath();
          context.arc(posX, posY, this.radius, 0, Math.PI * 2);
          context.fillStyle = `rgba(${r}, ${g}, ${b}, ${finalAlpha})`;
          context.fill();
        }
      }
    }

    // Shooting Star
    class ShootingStar {
      constructor() {
        this.active = false;
        this.x = 0;
        this.y = 0;
        this.length = 0;
        this.speed = 0;
        this.angle = 0;
        this.opacity = 0;
        this.life = 0;
        this.maxLife = 0;
      }

      spawn() {
        this.x = Math.random() * (width * 0.85);
        this.y = Math.random() * (height * 0.45);
        this.length = 60 + Math.random() * 50;
        this.speed = 7.0 + Math.random() * 4.0;
        this.angle = (32 + Math.random() * 18) * (Math.PI / 180);
        this.maxLife = 40 + Math.random() * 25;
        this.life = 0;
        this.active = true;
      }

      update() {
        if (!this.active) return;
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        this.life++;

        const progress = this.life / this.maxLife;
        if (progress < 0.2) {
          this.opacity = (progress / 0.2) * 0.85;
        } else if (progress < 0.7) {
          this.opacity = 0.85;
        } else {
          this.opacity = ((1 - progress) / 0.3) * 0.85;
        }

        if (this.life >= this.maxLife) {
          this.active = false;
        }
      }

      draw(context) {
        if (!this.active || this.opacity <= 0) return;

        const tailX = this.x - Math.cos(this.angle) * this.length;
        const tailY = this.y - Math.sin(this.angle) * this.length;

        const grad = context.createLinearGradient(tailX, tailY, this.x, this.y);
        grad.addColorStop(0, 'rgba(34, 211, 238, 0)');
        grad.addColorStop(0.7, `rgba(34, 211, 238, ${this.opacity * 0.6})`);
        grad.addColorStop(1, `rgba(255, 255, 255, ${this.opacity})`);

        context.beginPath();
        context.moveTo(tailX, tailY);
        context.lineTo(this.x, this.y);
        context.strokeStyle = grad;
        context.lineWidth = 1.6;
        context.lineCap = 'round';
        context.stroke();

        context.beginPath();
        context.arc(this.x, this.y, 2.0, 0, Math.PI * 2);
        context.fillStyle = `rgba(255, 255, 255, ${this.opacity * 0.98})`;
        context.shadowColor = '#22d3ee';
        context.shadowBlur = 10;
        context.fill();
        context.shadowBlur = 0;
      }
    }

    // Initialize stars
    let stars = [];
    const initStars = () => {
      stars = [];
      const isMobile = width < 768;
      const highlightCount = isMobile ? 10 : 18;
      const remaining = starCount - highlightCount;
      const normalCount = Math.floor(remaining * 0.55);
      const tinyCount = remaining - normalCount;

      for (let i = 0; i < highlightCount; i++) {
        stars.push(new Star('highlighted'));
      }
      for (let i = 0; i < normalCount; i++) {
        stars.push(new Star('normal'));
      }
      for (let i = 0; i < tinyCount; i++) {
        stars.push(new Star('tiny'));
      }
    };
    initStars();

    const shootingStar = new ShootingStar();
    let nextShootingStarTime = Date.now() + 3000 + Math.random() * 3000;

    let lastW = window.innerWidth;
    let lastH = window.innerHeight;

    const handleResize = () => {
      const newW = window.innerWidth;
      const newH = window.innerHeight;

      if (Math.abs(newW - lastW) < 10 && Math.abs(newH - lastH) < 60) {
        return;
      }

      lastW = newW;
      lastH = newH;
      width = newW;
      height = newH;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      const newCount = getStarCount(width);
      if (newCount !== starCount) {
        starCount = newCount;
        initStars();
      }
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Update and draw stars
      stars.forEach((star) => {
        star.update();
        star.draw(ctx);
      });

      // Handle shooting star
      const now = Date.now();
      if (!shootingStar.active && now > nextShootingStarTime) {
        shootingStar.spawn();
        nextShootingStarTime = now + 4000 + Math.random() * 3000;
      }

      if (shootingStar.active) {
        shootingStar.update();
        shootingStar.draw(ctx);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [mode, selectedProject]);

  return (
    <canvas
      ref={canvasRef}
      className="starfield-background"
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        display: 'block',
      }}
    />
  );
};
