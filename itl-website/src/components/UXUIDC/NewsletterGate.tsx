'use client';

import { useState, useEffect } from 'react';
import { IconMail, IconCheckCircle } from './Icons';
import FlodeskForm from './FlodeskForm';

interface NewsletterGateProps {
  children: React.ReactNode;
  articleTitle?: string;
  previewContent?: React.ReactNode;
}

const STORAGE_KEY = 'itl_newsletter_subscribed';

/**
 * NewsletterGate - Gates content behind newsletter signup
 * 
 * Stores subscription state in localStorage.
 * Shows a preview of content with a signup form overlay.
 */
export default function NewsletterGate({ 
  children, 
  articleTitle = 'this article',
  previewContent 
}: NewsletterGateProps) {
  const [isSubscribed, setIsSubscribed] = useState<boolean | null>(null);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    // Check localStorage for subscription status
    const subscribed = localStorage.getItem(STORAGE_KEY);
    setIsSubscribed(subscribed === 'true');
    setIsChecking(false);

    // Listen for Flodesk form submission events
    const handleFlodeskSubmit = () => {
      localStorage.setItem(STORAGE_KEY, 'true');
      setIsSubscribed(true);
    };

    // Check for Flodesk success state periodically after form render
    const checkInterval = setInterval(() => {
      const successMessage = document.querySelector('[data-fd-success]');
      if (successMessage) {
        handleFlodeskSubmit();
        clearInterval(checkInterval);
      }
    }, 1000);

    return () => clearInterval(checkInterval);
  }, []);

  // Handle manual unlock (for demo purposes or if Flodesk doesn't trigger)
  const handleUnlock = () => {
    localStorage.setItem(STORAGE_KEY, 'true');
    setIsSubscribed(true);
  };

  // Show loading state
  if (isChecking) {
    return (
      <div style={{ 
        padding: '60px 20px', 
        textAlign: 'center',
        backgroundColor: '#f7f7f7',
        borderRadius: '12px'
      }}>
        <div style={{
          width: '40px',
          height: '40px',
          border: '3px solid #e0e0e0',
          borderTopColor: '#008080',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
          margin: '0 auto'
        }} />
        <style jsx>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  // Show full content if subscribed
  if (isSubscribed) {
    return <>{children}</>;
  }

  // Show gated content with signup form
  return (
    <div style={{ position: 'relative' }}>
      {/* Preview content with blur/fade */}
      {previewContent && (
        <div style={{
          position: 'relative',
          maxHeight: '300px',
          overflow: 'hidden',
          marginBottom: '-100px',
        }}>
          <div style={{
            filter: 'blur(3px)',
            opacity: 0.5,
            pointerEvents: 'none',
            userSelect: 'none',
          }}>
            {previewContent}
          </div>
          {/* Gradient fade overlay */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '150px',
            background: 'linear-gradient(transparent, white)',
          }} />
        </div>
      )}

      {/* Signup gate */}
      <div style={{
        position: 'relative',
        backgroundColor: 'white',
        borderRadius: '16px',
        padding: '50px 30px',
        textAlign: 'center',
        boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
        border: '1px solid #e0e0e0',
        zIndex: 10,
      }}>
        <div style={{
          width: '70px',
          height: '70px',
          borderRadius: '50%',
          backgroundColor: 'rgba(0,128,128,0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 20px',
        }}>
          <IconMail size={32} color="#008080" />
        </div>

        <h3 style={{
          fontFamily: 'Poppins, sans-serif',
          fontSize: '1.6rem',
          fontWeight: 700,
          color: '#0a253c',
          marginBottom: '12px',
        }}>
          Unlock Full Article
        </h3>

        <p style={{
          color: '#666',
          fontSize: '1rem',
          lineHeight: 1.7,
          maxWidth: '500px',
          margin: '0 auto 25px',
        }}>
          Subscribe to Lab Signals to access {articleTitle} and our complete archive of research insights, technical guides, and industry analysis.
        </p>

        {/* Benefits list */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
          marginBottom: '30px',
        }}>
          {[
            'Biweekly research updates',
            'Expert technical guides',
            'Full article archive access',
          ].map((benefit, i) => (
            <div 
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#333',
                fontSize: '.9rem',
              }}
            >
              <IconCheckCircle size={18} color="#008080" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>

        {/* Flodesk Form */}
        <div style={{ maxWidth: '500px', margin: '0 auto 20px' }}>
          <FlodeskForm />
        </div>

        {/* Alternative access for returning subscribers */}
        <p style={{
          color: '#999',
          fontSize: '.8rem',
          marginTop: '20px',
        }}>
          Already subscribed?{' '}
          <button
            onClick={handleUnlock}
            style={{
              background: 'none',
              border: 'none',
              color: '#008080',
              textDecoration: 'underline',
              cursor: 'pointer',
              fontSize: '.8rem',
            }}
          >
            Click here to unlock
          </button>
        </p>
      </div>
    </div>
  );
}
