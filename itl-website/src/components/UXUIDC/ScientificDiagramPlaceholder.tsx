'use client';

import Image from 'next/image';
import { IconImage } from './Icons';
import { useState } from 'react';

export interface DiagramPlaceholderProps {
  /** Unique figure ID for tracking (e.g., "fig-cre-lox-001") */
  figureId: string;
  /** Aspect ratio: "4:3" for landscape, "1:1" for square */
  aspectRatio?: '4:3' | '1:1' | '3:4';
  /** Short title shown in placeholder */
  title: string;
  /** Figure caption displayed below (e.g., "Fig. 1: Shows the Cre-lox recombination mechanism") */
  caption: string;
  /** Visual style variant */
  variant?: 'hero' | 'section' | 'inline';
  /** Alt text for accessibility (also used for AI generation prompt context) */
  altText?: string;
}

/**
 * ScientificDiagramPlaceholder Component
 * 
 * Displays scientific diagrams from /images/diagrams/ directory.
 * Each diagram is tracked in SCIENTIFIC-DIAGRAMS-TRACKER.md.
 * 
 * SEO Benefits:
 * - Semantic figure/figcaption HTML for better indexing
 * - Descriptive alt text for accessibility and image search
 * - Structured content improves page quality signals
 * - Optimized Next.js Image component for performance
 */
export function ScientificDiagramPlaceholder({
  figureId,
  aspectRatio = '4:3',
  title,
  caption,
  variant = 'section',
  altText,
}: DiagramPlaceholderProps) {
  const [imageError, setImageError] = useState(false);
  
  const aspectRatioValue = {
    '4:3': '4/3',
    '1:1': '1/1',
    '3:4': '3/4',
  }[aspectRatio];

  const imagePath = `/images/diagrams/${figureId}.png`;
  
  const variantStyles = {
    hero: {
      border: '2px dashed rgba(255,255,255,0.4)',
      backgroundColor: 'rgba(255,255,255,0.05)',
      iconColor: 'rgba(255,255,255,0.4)',
      textColor: 'rgba(255,255,255,0.5)',
      captionColor: 'rgba(255,255,255,0.7)',
    },
    section: {
      border: '2px dashed #ccc',
      backgroundColor: '#fafafa',
      iconColor: '#ccc',
      textColor: '#999',
      captionColor: '#666',
    },
    inline: {
      border: '2px dashed #e0e0e0',
      backgroundColor: 'white',
      iconColor: '#d0d0d0',
      textColor: '#aaa',
      captionColor: '#666',
    },
  }[variant];

  // Fallback placeholder if image fails to load
  const PlaceholderContent = () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      <IconImage size={variant === 'hero' ? 60 : 50} color={variantStyles.iconColor} />
      <span
        style={{
          color: variantStyles.textColor,
          fontSize: '.8rem',
          marginTop: '10px',
          textAlign: 'center',
          padding: '0 15px',
        }}
      >
        {title}
      </span>
    </div>
  );

  return (
    <figure
      data-figure-id={figureId}
      style={{ margin: 0 }}
      aria-label={altText || title}
    >
      <div
        style={{
          border: variantStyles.border,
          borderRadius: '8px',
          aspectRatio: aspectRatioValue,
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: variantStyles.backgroundColor,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {!imageError ? (
          <Image
            src={imagePath}
            alt={altText || title}
            fill
            style={{
              objectFit: 'contain',
              padding: variant === 'hero' ? '10px' : '8px',
            }}
            sizes={variant === 'hero' ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 100vw, 33vw'}
            onError={() => setImageError(true)}
            priority={variant === 'hero'}
          />
        ) : (
          <PlaceholderContent />
        )}
      </div>
      <figcaption
        style={{
          color: variantStyles.captionColor,
          fontSize: '.8rem',
          fontStyle: 'italic',
          marginTop: '8px',
          textAlign: 'center',
          lineHeight: '1.4',
        }}
      >
        {caption}
      </figcaption>
    </figure>
  );
}

export default ScientificDiagramPlaceholder;
