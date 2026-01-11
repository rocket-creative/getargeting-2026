/**
 * |UXUIDC| Cookie Consent Component
 * @version 1.0.0
 * @created 2026
 * @description GDPR/CCPA compliant cookie consent banner
 * @features
 * - Cookie preferences management
 * - Granular consent options
 * - Persistent storage
 * - Accessible
 */

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

export default function UXUIDCCookieConsent() {
  const [show, setShow] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('itl-cookie-consent');
    if (!consent) {
      // Delay showing the banner slightly for better UX
      const timer = setTimeout(() => setShow(true), 1000);
      return () => clearTimeout(timer);
    } else {
      const saved = JSON.parse(localStorage.getItem('itl-cookie-preferences') || '{}');
      setPreferences({ ...preferences, ...saved });
    }
  }, []);

  const savePreferences = (acceptAll = false) => {
    const prefs = acceptAll
      ? {
          necessary: true,
          analytics: true,
          marketing: true,
          functional: true,
        }
      : preferences;

    localStorage.setItem('itl-cookie-consent', 'true');
    localStorage.setItem('itl-cookie-preferences', JSON.stringify(prefs));

    // Update analytics consent if available
    if (typeof window !== 'undefined' && (window as unknown as { gtag?: (cmd: string, action: string, params: Record<string, string>) => void }).gtag) {
      const gtag = (window as unknown as { gtag: (cmd: string, action: string, params: Record<string, string>) => void }).gtag;
      if (prefs.analytics) {
        gtag('consent', 'update', { analytics_storage: 'granted' });
      }
      if (prefs.marketing) {
        gtag('consent', 'update', { ad_storage: 'granted' });
      }
    }

    setShow(false);
    setShowPreferences(false);
  };

  const rejectAll = () => {
    const prefs = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    };
    setPreferences(prefs);
    localStorage.setItem('itl-cookie-consent', 'true');
    localStorage.setItem('itl-cookie-preferences', JSON.stringify(prefs));
    setShow(false);
    setShowPreferences(false);
  };

  if (!show) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/30 z-40" aria-hidden="true" />

      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-2xl border-t z-50">
        <div className="container py-6">
          {!showPreferences ? (
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-[var(--dk-blue)] mb-2">
                  We Value Your Privacy
                </h3>
                <p className="text-sm text-gray-600">
                  We use cookies to enhance your browsing experience and analyze site traffic. 
                  By clicking &quot;Accept All&quot;, you consent to our use of cookies. See our{' '}
                  <Link href="/cookies" className="text-[var(--blue)] hover:underline">
                    Cookie Policy
                  </Link>{' '}
                  and{' '}
                  <Link href="/privacy" className="text-[var(--blue)] hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <button
                  onClick={() => setShowPreferences(true)}
                  className="px-6 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-sm font-medium"
                >
                  Cookie Settings
                </button>
                <button
                  onClick={rejectAll}
                  className="px-6 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-sm font-medium"
                >
                  Reject Non-Essential
                </button>
                <button
                  onClick={() => savePreferences(true)}
                  className="px-6 py-2.5 bg-[var(--cta)] text-white rounded-lg hover:bg-[var(--cta-hover)] transition text-sm font-medium"
                >
                  Accept All
                </button>
              </div>
            </div>
          ) : (
            <div>
              <h3 className="font-semibold text-lg text-[var(--dk-blue)] mb-4">
                Cookie Preferences
              </h3>

              <div className="space-y-4 mb-6">
                {/* Necessary Cookies */}
                <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium text-[var(--dk-blue)]">Strictly Necessary</h4>
                      <span className="text-xs bg-gray-200 px-2 py-1 rounded">Always Active</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Essential for the website to function. Cannot be disabled.
                    </p>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-[var(--dk-blue)] mb-1">Analytics Cookies</h4>
                    <p className="text-sm text-gray-600">
                      Help us understand how visitors interact with our website.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) =>
                        setPreferences({ ...preferences, analytics: e.target.checked })
                      }
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[var(--blue)] rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--cta)]"></div>
                  </label>
                </div>

                {/* Functional Cookies */}
                <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-[var(--dk-blue)] mb-1">Functional Cookies</h4>
                    <p className="text-sm text-gray-600">
                      Enable enhanced functionality and personalization.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.functional}
                      onChange={(e) =>
                        setPreferences({ ...preferences, functional: e.target.checked })
                      }
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[var(--blue)] rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--cta)]"></div>
                  </label>
                </div>

                {/* Marketing Cookies */}
                <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-[var(--dk-blue)] mb-1">Marketing Cookies</h4>
                    <p className="text-sm text-gray-600">
                      Used to track visitors across websites for advertising purposes.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) =>
                        setPreferences({ ...preferences, marketing: e.target.checked })
                      }
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[var(--blue)] rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--cta)]"></div>
                  </label>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-end">
                <button
                  onClick={() => setShowPreferences(false)}
                  className="px-6 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-sm font-medium"
                >
                  Back
                </button>
                <button
                  onClick={() => savePreferences(false)}
                  className="px-6 py-2.5 bg-[var(--cta)] text-white rounded-lg hover:bg-[var(--cta-hover)] transition text-sm font-medium"
                >
                  Save Preferences
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
