import type { Metadata } from 'next';
import UXUIDCNavigation from '@/components/UXUIDC/Navigation';
import UXUIDCFooter from '@/components/UXUIDC/Footer';

export const metadata: Metadata = {
  title: 'Current Openings | ingenious targeting laboratory',
  description: 'Career opportunities at ingenious targeting laboratory.',
};

export default function CurrentOpeningsPage() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <UXUIDCNavigation />
      <main>
        <section style={{
          background: '#ffffff',
          padding: '120px 20px',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{ maxWidth: '800px', textAlign: 'center' }}>
            <h1 style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '2.5rem',
              fontWeight: 700,
              color: '#2384da',
              marginBottom: '30px',
              lineHeight: 1.3
            }}>
              Current Openings
            </h1>
            <p style={{
              fontSize: '1.1rem',
              fontWeight: 400,
              color: '#666',
              lineHeight: 1.7,
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Thank you for your interest in joining ingenious targeting laboratory. We don't have any current job openings at this time.
            </p>
          </div>
        </section>
      </main>
      <UXUIDCFooter />
    </div>
  );
}
