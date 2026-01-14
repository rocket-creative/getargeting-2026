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
  white: '#ffffff',
  lightGray: '#f5f5f5',
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
 * Light theme: white background with gold accents
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
    const verified = getCookie(COOKIE_NAME);
    setIsVerified(verified === 'true');
    setIsChecking(false);
  }, []);

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

  if (isChecking) {
    return (
      <div style={{ 
        padding: '50px 20px', 
        textAlign: 'center',
        backgroundColor: BRAND.lightGray,
        borderRadius: '10px'
      }}>
        <div style={{
          width: '35px',
          height: '35px',
          border: '3px solid #e0e0e0',
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

  if (isVerified) {
    return <>{children}</>;
  }

  return (
    <div style={{ position: 'relative' }}>
      {/* Preview content with blur */}
      {previewContent && (
        <div style={{
          position: 'relative',
          maxHeight: '280px',
          overflow: 'hidden',
          marginBottom: '-70px',
        }}>
          <div style={{
            filter: 'blur(4px)',
            opacity: 0.5,
            pointerEvents: 'none',
            userSelect: 'none',
          }}>
            {previewContent}
          </div>
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '180px',
            background: `linear-gradient(transparent, ${BRAND.white})`,
          }} />
        </div>
      )}

      {/* Gate */}
      <div style={{
        position: 'relative',
        backgroundColor: BRAND.lightGray,
        borderRadius: '12px',
        padding: '40px 25px',
        textAlign: 'center',
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        zIndex: 10,
        maxWidth: '450px',
        margin: '0 auto',
      }}>
        {/* Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          backgroundColor: BRAND.black,
          color: BRAND.gold,
          padding: '6px 16px',
          borderRadius: '20px',
          marginBottom: '20px',
        }}>
          <IconMail size={16} color={BRAND.gold} />
          <span style={{ fontSize: '.75rem', fontWeight: 700, letterSpacing: '0.5px' }}>
            MEMBERS-ONLY
          </span>
        </div>

        {!showSignup ? (
          <>
            <h3 style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '1.25rem',
              fontWeight: 700,
              color: BRAND.black,
              marginBottom: '8px',
            }}>
              Verify your subscription
            </h3>
            <p style={{ color: '#666', fontSize: '.9rem', marginBottom: '20px' }}>
              Enter your email to access this article
            </p>

            <form onSubmit={handleVerify}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  style={{
                    padding: '12px 14px',
                    fontSize: '.95rem',
                    border: verifyError ? '2px solid #ef4444' : '1px solid #ddd',
                    borderRadius: '6px',
                    outline: 'none',
                    backgroundColor: BRAND.white,
                  }}
                />
                {verifyError && (
                  <p style={{ color: '#ef4444', fontSize: '.8rem', margin: 0 }}>{verifyError}</p>
                )}
                <button
                  type="submit"
                  disabled={isVerifying}
                  style={{
                    padding: '12px 20px',
                    fontSize: '.95rem',
                    fontWeight: 700,
                    backgroundColor: isVerifying ? '#999' : BRAND.gold,
                    color: BRAND.black,
                    border: 'none',
                    borderRadius: '6px',
                    cursor: isVerifying ? 'wait' : 'pointer',
                  }}
                >
                  {isVerifying ? 'Verifying...' : 'Verify'}
                </button>
              </div>
            </form>

            <div style={{ margin: '25px 0', borderTop: '1px solid #ddd', position: 'relative' }}>
              <span style={{
                position: 'absolute',
                top: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: BRAND.lightGray,
                padding: '0 12px',
                color: '#999',
                fontSize: '.8rem',
              }}>
                or
              </span>
            </div>

            <h4 style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '1rem',
              fontWeight: 600,
              color: BRAND.black,
              marginBottom: '8px',
            }}>
              Not subscribed?
            </h4>
            <button
              onClick={() => setShowSignup(true)}
              style={{
                padding: '10px 22px',
                fontSize: '.9rem',
                fontWeight: 600,
                backgroundColor: BRAND.white,
                color: BRAND.black,
                border: '2px solid #ddd',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
            >
              Subscribe Free
            </button>
          </>
        ) : (
          <>
            <h3 style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '1.25rem',
              fontWeight: 700,
              color: BRAND.black,
              marginBottom: '8px',
            }}>
              Subscribe to Lab Signals
            </h3>
            <p style={{ color: '#666', fontSize: '.9rem', marginBottom: '18px' }}>
              Free biweekly research insights
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              marginBottom: '20px',
              textAlign: 'left',
            }}>
              {['Expert analysis', 'Technical guides', 'Full archive access'].map((b, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#444', fontSize: '.85rem' }}>
                  <IconCheckCircle size={16} color="#d4a000" />
                  <span>{b}</span>
                </div>
              ))}
            </div>

            <FlodeskForm />

            <button
              onClick={() => setShowSignup(false)}
              style={{
                marginTop: '15px',
                background: 'none',
                border: 'none',
                color: '#666',
                fontSize: '.8rem',
                cursor: 'pointer',
                textDecoration: 'underline',
              }}
            >
              ← Already subscribed? Verify
            </button>
          </>
        )}
      </div>
    </div>
  );
}
