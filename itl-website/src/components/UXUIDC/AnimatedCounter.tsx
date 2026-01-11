'use client';

/**
 * |UXUIDC| Animated Counter Component
 * Counts up to the target number when scrolled into view
 * Used for stats like "2,500+ Projects", "800+ Publications"
 */

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Stat {
  number: string; // e.g., "2,500+", "800+", "25+"
  label: string;
}

interface AnimatedCounterProps {
  stats: Stat[];
  className?: string;
}

export default function UXUIDCAnimatedCounter({ stats, className = '' }: AnimatedCounterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [displayValues, setDisplayValues] = useState<string[]>(stats.map(() => '0'));

  useEffect(() => {
    if (!containerRef.current || hasAnimated) return;

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top 80%',
      onEnter: () => {
        if (hasAnimated) return;
        setHasAnimated(true);

        stats.forEach((stat, index) => {
          // Parse the number from string like "2,500+" or "100%"
          const numStr = stat.number.replace(/[^0-9.]/g, '');
          const targetNum = parseFloat(numStr);
          const hasPlus = stat.number.includes('+');
          const hasPercent = stat.number.includes('%');
          const hasComma = stat.number.includes(',');

          // Calculate animation parameters
          // Start from a reasonable lower bound (about 70-80% of target)
          const startNum = Math.floor(targetNum * 0.7);
          
          const counter = { value: startNum };

          gsap.to(counter, {
            value: targetNum,
            duration: 3.5,
            ease: 'power1.out',
            onUpdate: () => {
              let displayVal = Math.floor(counter.value).toString();
              
              // Add comma formatting for thousands
              if (hasComma || counter.value >= 1000) {
                displayVal = Math.floor(counter.value).toLocaleString();
              }
              
              // Add suffix
              if (hasPlus) displayVal += '+';
              if (hasPercent) displayVal += '%';

              setDisplayValues(prev => {
                const newValues = [...prev];
                newValues[index] = displayVal;
                return newValues;
              });
            },
          });
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [stats, hasAnimated]);

  return (
    <div 
      ref={containerRef}
      className={`grid grid-cols-2 md:grid-cols-4 gap-6 ${className}`}
    >
      {stats.map((stat, i) => (
        <div key={i} className="stat-item text-center">
          <div
            style={{
              color: '#008080',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '2.5rem',
              fontWeight: 700,
              lineHeight: 1,
            }}
          >
            {displayValues[i]}
          </div>
          <div
            style={{
              color: '#666',
              fontFamily: 'var(--system-ui)',
              fontSize: '.85rem',
              fontWeight: 400,
              marginTop: '5px',
            }}
          >
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
