/**
 * |UXUIDC| Cookie Consent Component
 * @version 1.2.0
 * @created 2026
 * @description GDPR/CCPA compliant cookie consent banner with multi-platform tracking
 * @features
 * - Cookie preferences management
 * - Granular consent options
 * - Persistent storage
 * - Google Consent Mode v2 integration
 * - Facebook, LinkedIn, Twitter, AdRoll consent handling
 * - Accessible
 */

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { gtag, updateFBConsent } from '@/components/analytics';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

/**
 * Update all platform consent based on user preferences
 */
function updateAllPlatformConsent(prefs: CookiePreferences, shouldReload = false) {
  // Google Analytics consent
  if (prefs.analytics) {
    gtag('consent', 'update', { analytics_storage: 'granted' });
  } else {
    gtag('consent', 'update', { analytics_storage: 'denied' });
  }

  // Marketing/Ads consent (Google Ads)
  if (prefs.marketing) {
    gtag('consent', 'update', {
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
    });
    
    // Update Facebook consent
    updateFBConsent(true);
  } else {
    gtag('consent', 'update', {
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    });
    
    // Revoke Facebook consent
    updateFBConsent(false);
  }

  // Functional consent
  if (prefs.functional) {
    gtag('consent', 'update', {
      functionality_storage: 'granted',
      personalization_storage: 'granted',
    });
  } else {
    gtag('consent', 'update', {
      functionality_storage: 'denied',
      personalization_storage: 'denied',
    });
  }

  // Reload page if marketing preferences changed to load/unload pixels
  // LinkedIn, Twitter, and AdRoll check localStorage on load
  if (shouldReload && typeof window !== 'undefined') {
    window.location.reload();
  }
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

    // Check if marketing preference changed (for reload)
    const oldPrefs = JSON.parse(localStorage.getItem('itl-cookie-preferences') || '{}');
    const marketingChanged = oldPrefs.marketing !== prefs.marketing;

    localStorage.setItem('itl-cookie-consent', 'true');
    localStorage.setItem('itl-cookie-preferences', JSON.stringify(prefs));

    // Update all platform consent (reload if marketing changed to load pixels)
    updateAllPlatformConsent(prefs, marketingChanged && prefs.marketing);

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

              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
                <button
                  onClick={() => savePreferences(true)}
                  className="px-6 py-2.5 bg-[var(--cta)] text-white rounded-lg hover:bg-[var(--cta-hover)] transition text-sm font-medium order-first sm:order-none"
                >
                  Accept All
                </button>
                <button
                  onClick={rejectAll}
                  className="px-6 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-sm font-medium"
                >
                  Reject Non-Essential
                </button>
                <button
                  onClick={() => setShowPreferences(true)}
                  className="px-6 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-sm font-medium"
                >
                  Cookie Settings
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
                      Help us understand how visitors interact with our website using Google Analytics.
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
                      Used for advertising and retargeting across platforms including Google Ads, 
                      Meta (Facebook/Instagram), LinkedIn, X (Twitter), and AdRoll.
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

              <div className="flex flex-col sm:flex-row gap-3 justify-end flex-wrap">
                <button
                  onClick={() => setShowPreferences(false)}
                  className="px-6 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-sm font-medium"
                >
                  Back
                </button>
                <button
                  onClick={rejectAll}
                  className="px-6 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-sm font-medium"
                >
                  Reject Non-Essential
                </button>
                <button
                  onClick={() => savePreferences(false)}
                  className="px-6 py-2.5 border border-[var(--cta)] text-[var(--cta)] rounded-lg hover:bg-[var(--cta)]/5 transition text-sm font-medium"
                >
                  Save Preferences
                </button>
                <button
                  onClick={() => savePreferences(true)}
                  className="px-6 py-2.5 bg-[var(--cta)] text-white rounded-lg hover:bg-[var(--cta-hover)] transition text-sm font-medium"
                >
                  Accept All
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
