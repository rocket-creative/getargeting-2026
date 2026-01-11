/**
 * Biomarker Discovery Mice - Placeholder Page
 * To be built with full content
 */

import {
  UXUIDCNavigation,
  UXUIDCFooter,
} from '@/components/UXUIDC';

export const metadata = {
  title: 'Biomarker Discovery Mice | ingenious targeting laboratory',
  description: 'Mouse models for biomarker discovery research.',
};

export default function BiomarkerDiscoveryMicePage() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <UXUIDCNavigation />
      <main id="main-content" style={{ minHeight: '60vh', padding: '80px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#0a253c', marginBottom: '20px' }}>Biomarker Discovery Mice</h1>
        <p style={{ color: '#666', fontSize: '1.1rem' }}>Page content coming soon.</p>
      </main>
      <UXUIDCFooter />
    </div>
  );
}
