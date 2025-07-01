import { useRef, useEffect } from 'react';

const ShootingStars = () => {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);
  const MAX_STARS = 20;    
  const TAIL_LENGTH = 35;   

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { alpha: true });

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;     
    };
    resize();
    window.addEventListener('resize', resize);

    const hsla = (h, s, l, a = 1) => `hsla(${h}, ${s}%, ${l}%, ${a})`;

    const createShootingStar = () => {
      const speed = Math.random() * 2 + 3;    
      const angle = Math.PI / 4;               
      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed;
      const hue = Math.floor(Math.random() * 360);  

      return {
        x: Math.random() * window.innerWidth,
        y: -20,                               
        vx,
        vy,
        hue,
        trail: [],
        life: 0,
        maxLife: Math.floor(Math.random() * 50 + 60), 
      };
    };

    const drawStar = (star) => {
      const alpha = 1 - star.life / star.maxLife;    
      ctx.beginPath();
      ctx.moveTo(star.x, star.y);
      ctx.lineTo(star.x - star.vx * 6, star.y - star.vy * 6);
      ctx.strokeStyle = hsla(star.hue, 100, 70, alpha);
      ctx.lineWidth   = 1.5;
      ctx.shadowBlur  = 8;
      ctx.shadowColor = hsla(star.hue, 100, 70, alpha);
      ctx.stroke();
    };

    const drawTrail = (trail, progress, hue) => {
      for (let i = 0; i < trail.length - 1; i++) {
        const p1 = trail[i];
        const p2 = trail[i + 1];
        const segmentAlpha = ((i + 1) / trail.length) * (1 - progress);
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = hsla(hue, 100, 70, segmentAlpha);
        ctx.lineWidth   = 1;
        ctx.stroke();
      }
    };

    let frameId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (starsRef.current.length < MAX_STARS && Math.random() < 0.3) {
        starsRef.current.push(createShootingStar());
      }


      for (let i = starsRef.current.length - 1; i >= 0; i--) {
        const star = starsRef.current[i];


        star.trail.push({ x: star.x, y: star.y });
        if (star.trail.length > TAIL_LENGTH) star.trail.shift();

        const progress = star.life / star.maxLife;
        drawTrail(star.trail, progress, star.hue);
        drawStar(star);


        star.x += star.vx;
        star.y += star.vy;
        star.life++;
        if (
          star.life > star.maxLife ||
          star.x > canvas.width ||
          star.y > canvas.height
        ) {
          starsRef.current.splice(i, 1);
        }
      }

      frameId = requestAnimationFrame(animate);
    };

    animate();


    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        background: 'transparent',
        contain: 'strict',
      }}
    />
  );
};

export default ShootingStars;
