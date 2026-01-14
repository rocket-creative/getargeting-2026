'use client';

/**
 * Video Section - Homepage
 * Displays featured video from Mediazilla
 */

export default function VideoSection() {
  return (
    <section
      style={{
        padding: '60px 20px',
        backgroundColor: '#f8f8f8',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div
          style={{
            position: 'relative',
            paddingBottom: '56.25%',
            paddingTop: 0,
            height: 0,
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          }}
        >
          <iframe
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
            src="https://mediazilla.com/xxexlvtJRB"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; fullscreen"
          />
        </div>
      </div>
    </section>
  );
}
