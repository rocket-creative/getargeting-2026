/**
 * |UXUIDC| Announcement Bar - Matches Screenshot
 * @version 2.0.0
 */

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function UXUIDCAnnouncementBar() {
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem('announcement-dismissed');
    if (dismissed) setIsDismissed(true);
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    sessionStorage.setItem('announcement-dismissed', 'true');
  };

  if (isDismissed) return null;

  return (
    <div className="bg-[#008080] text-white py-2">
      <div className="container flex items-center justify-between">
        <Link href="/contact" className="flex-1 text-xs sm:text-sm hover:underline">
          <span className="hidden sm:inline">Is uncertain NIH funding holding you back from starting a much needed mouse model project? </span>
          <span className="font-medium">We have ways for you to start your project now and pay later.</span>
        </Link>
        <button
          onClick={handleDismiss}
          className="ml-4 p-1 hover:bg-white/20 rounded"
          aria-label="Dismiss"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
