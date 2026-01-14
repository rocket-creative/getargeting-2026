'use client';

import { useState, useEffect } from 'react';
import { IconMail, IconCheckCircle } from './Icons';
import FlodeskForm from './FlodeskForm';

interface NewsletterGateProps {
  children: React.ReactNode;
  articleTitle?: string;
  previewContent?: React.ReactNode;
}

const COOKIE_NAME = 'itl_newsletter_verified';
const COOKIE_DAYS = 30;

// Lab Signals brand colors
const BRAND = {
  gold: '#fb0',
  black: '#000000',
  darkGray: '#111111',
  white: '#ffffff',
};

// Cookie helpers
function setCookie(name: string, value: string, days: number) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
}

function getCookie(name: string): string | null {
  const nameEQ = name + '=';
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

/**
 * NewsletterGate - Gates content behind email verification
 * Lab Signals branded: gold #fb0 + black
 */
export default function NewsletterGate({ 
  children, 
  articleTitle = 'this article',
  previewContent 
}: NewsletterGateProps) {
  const [isVerified, setIsVerified] = useState<boolean | null>(null);
  const [isChecking, setIsChecking] = useState(true);
  const [email, setEmail] = useState('');
  const [verifyError, setVerifyError] = useState('');
  const [showSignup, setShowSignup] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  useEffect(() => {
    // Check cookie for verification status
    const verified = getCookie(COOKIE_NAME);
    setIsVerified(verified === 'true');
    setIsChecking(false);
  }, []);

  // Handle email verification
  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setVerifyError('');
    setIsVerifying(true);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
      setVerifyError('Please enter a valid email address');
      setIsVerifying(false);
      return;
    }

    await new Promise(resolve => setTimeout(resolve, 500));
    
    setCookie(COOKIE_NAME, 'true', COOKIE_DAYS);
    setIsVerified(true);
    setIsVerifying(false);
  };

  // Show loading state
  if (isChecking) {
    return (
      <div style={{ 
        padding: '60px 20px', 
        textAlign: 'center',
        backgroundColor: BRAND.darkGray,
        borderRadius: '12px'
      }}>
        <div style={{
          width: '40px',
          height: '40px',
          border: `3px solid ${BRAND.gold}33`,
          borderTopColor: BRAND.gold,
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

  // Show full content if verified
  if (isVerified) {
    return <>{children}</>;
  }

  // Show gated content with verification form
  return (
    <div style={{ position: 'relative' }}>
      {/* Preview content with blur/fade */}
      {previewContent && (
        <div style={{
          position: 'relative',
          maxHeight: '300px',
          overflow: 'hidden',
          marginBottom: '-80px',
        }}>
          <div style={{
            filter: 'blur(4px)',
            opacity: 0.4,
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
            height: '200px',
            background: `linear-gradient(transparent, ${BRAND.darkGray})`,
          }} />
        </div>
      )}

      {/* Verification gate */}
      <div style={{
        position: 'relative',
        backgroundColor: BRAND.black,
        borderRadius: '16px',
        padding: '50px 30px',
        textAlign: 'center',
        boxShadow: `0 10px 40px rgba(0,0,0,0.5)`,
        border: `1px solid ${BRAND.gold}33`,
        zIndex: 10,
        maxWidth: '500px',
        margin: '0 auto',
      }}>
        {/* Members-Only Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          backgroundColor: BRAND.gold,
          color: BRAND.black,
          padding: '8px 20px',
          borderRadius: '25px',
          marginBottom: '25px',
        }}>
          <IconMail size={18} color={BRAND.black} />
          <span style={{ fontSize: '.85rem', fontWeight: 700, letterSpacing: '0.5px' }}>
            MEMBERS-ONLY CONTENT
          </span>
        </div>

        {!showSignup ? (
          <>
            {/* Verify Email Section */}
            <h3 style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '1.4rem',
              fontWeight: 700,
              color: BRAND.white,
              marginBottom: '12px',
            }}>
              Enter your email to verify your subscription
            </h3>

            <form onSubmit={handleVerify} style={{ marginTop: '25px' }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                maxWidth: '350px',
                margin: '0 auto',
              }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  style={{
                    padding: '14px 18px',
                    fontSize: '1rem',
                    border: verifyError ? `2px solid #ef4444` : `1px solid ${BRAND.gold}44`,
                    borderRadius: '8px',
                    outline: 'none',
                    width: '100%',
                    boxSizing: 'border-box',
                    backgroundColor: BRAND.darkGray,
                    color: BRAND.white,
                  }}
                />
                {verifyError && (
                  <p style={{ color: '#ef4444', fontSize: '.85rem', margin: 0 }}>
                    {verifyError}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={isVerifying}
                  style={{
                    padding: '14px 24px',
                    fontSize: '1rem',
                    fontWeight: 700,
                    backgroundColor: isVerifying ? '#666' : BRAND.gold,
                    color: BRAND.black,
                    border: 'none',
                    borderRadius: '8px',
                    cursor: isVerifying ? 'wait' : 'pointer',
                    transition: 'background-color 0.2s ease',
                  }}
                >
                  {isVerifying ? 'Verifying...' : 'Verify'}
                </button>
              </div>
            </form>

            {/* Divider */}
            <div style={{
              margin: '35px 0',
              borderTop: `1px solid ${BRAND.gold}33`,
              position: 'relative',
            }}>
              <span style={{
                position: 'absolute',
                top: '-12px',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: BRAND.black,
                padding: '0 15px',
                color: 'rgba(255,255,255,0.5)',
                fontSize: '.85rem',
              }}>
                or
              </span>
            </div>

            {/* Not a subscriber */}
            <h4 style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '1.1rem',
              fontWeight: 600,
              color: BRAND.white,
              marginBottom: '10px',
            }}>
              Not a Subscriber Yet?
            </h4>
            <p style={{
              color: 'rgba(255,255,255,0.6)',
              fontSize: '.9rem',
              marginBottom: '15px',
            }}>
              Join Lab Signals for free access to our research insights
            </p>
            <button
              onClick={() => setShowSignup(true)}
              style={{
                padding: '12px 28px',
                fontSize: '.95rem',
                fontWeight: 600,
                backgroundColor: 'transparent',
                color: BRAND.gold,
                border: `2px solid ${BRAND.gold}`,
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              Subscribe Now
            </button>
          </>
        ) : (
          <>
            {/* Signup Form Section */}
            <h3 style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '1.4rem',
              fontWeight: 700,
              color: BRAND.white,
              marginBottom: '12px',
            }}>
              Subscribe to Lab Signals
            </h3>
            <p style={{
              color: 'rgba(255,255,255,0.7)',
              fontSize: '.95rem',
              lineHeight: 1.6,
              marginBottom: '20px',
            }}>
              Get biweekly research insights, technical guides, and industry analysis delivered to your inbox.
            </p>

            {/* Benefits */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              marginBottom: '25px',
              textAlign: 'left',
              maxWidth: '320px',
              margin: '0 auto 25px',
            }}>
              {[
                'Expert analysis from PhD scientists',
                'Technical guides & best practices',
                'Full article archive access',
              ].map((benefit, i) => (
                <div 
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    color: BRAND.white,
                    fontSize: '.9rem',
                  }}
                >
                  <IconCheckCircle size={18} color={BRAND.gold} />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            {/* Flodesk Form */}
            <div style={{ maxWidth: '400px', margin: '0 auto 20px' }}>
              <FlodeskForm />
            </div>

            {/* Back to verify */}
            <button
              onClick={() => setShowSignup(false)}
              style={{
                background: 'none',
                border: 'none',
                color: BRAND.gold,
                fontSize: '.85rem',
                cursor: 'pointer',
                textDecoration: 'underline',
              }}
            >
              ← Already subscribed? Verify instead
            </button>
          </>
        )}
      </div>
    </div>
  );
}
