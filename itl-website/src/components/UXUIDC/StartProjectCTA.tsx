'use client';

/**
 * |UXUIDC| Start Project CTA Section with DNA Animation
 * Reusable teal CTA section with animated DNA helix background
 * Used across all pages for consistent design
 */

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface CTAButton {
  label: string;
  href: string;
}

interface StartProjectCTAProps {
  title: string;
  content: string;
  buttons: CTAButton[];
}

// Particle class for random floating particles
class Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;

  constructor(canvasWidth: number, canvasHeight: number) {
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    this.vx = (Math.random() - 0.5) * 0.2;
    this.vy = (Math.random() - 0.5) * 0.2;
    this.radius = Math.random() * 1.2 + 0.3;
    this.opacity = Math.random() * 0.15 + 0.05;
  }

  update(canvasWidth: number, canvasHeight: number) {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > canvasWidth) this.vx *= -1;
    if (this.y < 0 || this.y > canvasHeight) this.vy *= -1;
  }

  draw(ctx: CanvasRenderingContext2D) {
    const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius * 2);
    gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`);
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius * 2, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();
  }
}

export default function UXUIDCStartProjectCTA({ title, content, buttons }: StartProjectCTAProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (contentRef.current) {
        const elements = contentRef.current.querySelectorAll('.animate-cta');
        gsap.fromTo(
          elements,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    // Canvas Animation
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const resizeCanvas = () => {
      if (sectionRef.current && canvas) {
        canvas.width = sectionRef.current.offsetWidth;
        canvas.height = sectionRef.current.offsetHeight;
      }
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create floating particles
    const particles: Particle[] = [];
    for (let i = 0; i < 150; i++) {
      particles.push(new Particle(canvas.width, canvas.height));
    }

    // DNA parameters
    let time = 0;
    const speed = 0.002;
    const amplitude = 30;
    const frequency = 0.02;
    const dotRadius = 4;
    const dotsPerStrand = 35;
    const angle = 12 * (Math.PI / 180);

    const animate = () => {
      if (!context || !canvas) return;
      
      context.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw floating particles
      for (const particle of particles) {
        particle.update(canvas.width, canvas.height);
        particle.draw(context);
      }
      
      // Two DNA strands
      const strands = [
        { yOffset: canvas.height * 0.25, direction: 1 },
        { yOffset: canvas.height * 0.75, direction: -1 },
      ];
      
      for (const strand of strands) {
        const { yOffset, direction } = strand;
        
        const dots1: { x: number; y: number; z: number }[] = [];
        const dots2: { x: number; y: number; z: number }[] = [];
        
        for (let i = 0; i < dotsPerStrand; i++) {
          const x = (canvas.width / dotsPerStrand) * i + 20;
          const phase = (x * frequency) + (time * direction);
          
          const y1 = yOffset + Math.sin(phase) * amplitude;
          const z1 = Math.cos(phase);
          
          const y2 = yOffset + Math.sin(phase + Math.PI) * amplitude;
          const z2 = Math.cos(phase + Math.PI);
          
          const angleOffset = (x - canvas.width / 2) * Math.tan(angle);
          
          dots1.push({ x, y: y1 + angleOffset, z: z1 });
          dots2.push({ x, y: y2 + angleOffset, z: z2 });
        }
        
        // Draw connecting rungs
        for (let i = 0; i < dotsPerStrand; i += 2) {
          const d1 = dots1[i];
          const d2 = dots2[i];
          const avgDepth = (d1.z + d2.z) / 2;
          const rungOpacity = 0.03 + (avgDepth + 1) * 0.03;
          
          context.beginPath();
          context.moveTo(d1.x, d1.y);
          context.lineTo(d2.x, d2.y);
          context.strokeStyle = `rgba(255, 255, 255, ${rungOpacity})`;
          context.lineWidth = 0.5;
          context.stroke();
        }
        
        // Draw strand backbones
        context.beginPath();
        for (let i = 0; i < dots1.length; i++) {
          if (i === 0) context.moveTo(dots1[i].x, dots1[i].y);
          else context.lineTo(dots1[i].x, dots1[i].y);
        }
        context.strokeStyle = 'rgba(255, 255, 255, 0.06)';
        context.lineWidth = 0.5;
        context.stroke();
        
        context.beginPath();
        for (let i = 0; i < dots2.length; i++) {
          if (i === 0) context.moveTo(dots2[i].x, dots2[i].y);
          else context.lineTo(dots2[i].x, dots2[i].y);
        }
        context.strokeStyle = 'rgba(255, 255, 255, 0.06)';
        context.lineWidth = 0.5;
        context.stroke();
        
        // Draw dots with depth effect
        const drawDot = (dot: { x: number; y: number; z: number }) => {
          const depthFactor = (dot.z + 1) / 2;
          const radius = dotRadius * (0.4 + depthFactor * 0.6);
          const opacity = 0.08 + depthFactor * 0.15;
          
          const blurSize = radius * 2;
          const gradient = context.createRadialGradient(
            dot.x, dot.y, 0,
            dot.x, dot.y, blurSize
          );
          gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity})`);
          gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
          
          context.beginPath();
          context.arc(dot.x, dot.y, blurSize, 0, Math.PI * 2);
          context.fillStyle = gradient;
          context.fill();
        };
        
        const allDots = [...dots1, ...dots2].sort((a, b) => a.z - b.z);
        for (const dot of allDots) {
          drawDot(dot);
        }
      }
      
      time += speed;
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);

    return () => {
      ctx.revert();
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col justify-center items-center overflow-hidden"
      style={{ backgroundColor: '#008080', padding: '70px 20px', minHeight: '350px' }}
    >
      {/* DNA Animation Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 0 }}
      />

      {/* Content */}
      <div ref={contentRef} className="relative text-center" style={{ maxWidth: '600px', zIndex: 1 }}>
        <h2
          className="animate-cta"
          style={{
            opacity: 0,
            color: 'white',
            letterSpacing: '-.5px',
            fontFamily: 'Poppins, sans-serif',
            fontSize: '2rem',
            fontWeight: 700,
            lineHeight: 1,
            marginBottom: '15px',
          }}
        >
          {title}
        </h2>

        <p
          className="animate-cta"
          style={{
            opacity: 0,
            color: 'white',
            fontFamily: 'var(--system-ui)',
            fontSize: '.9rem',
            fontWeight: 300,
            lineHeight: '1.5rem',
            marginBottom: '25px',
          }}
        >
          {content}
        </p>

        <div className="animate-cta flex flex-wrap gap-4 justify-center" style={{ opacity: 0 }}>
          {buttons.map((btn, i) => (
            <Link
              key={i}
              href={btn.href}
              className="group inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-teal-700"
              style={{
                backgroundColor: 'transparent',
                color: 'white',
                padding: '10px 20px',
                border: '2px solid white',
                fontFamily: 'var(--system-ui)',
                fontSize: '.9rem',
                fontWeight: 500,
              }}
            >
              <span>{btn.label}</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
