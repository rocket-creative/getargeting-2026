import type { Metadata } from 'next';

// META from contact.md lines 1-4
export const metadata: Metadata = {
  title: 'Contact Ingenious Targeting Laboratory | Request Quote, Schedule Consultation',
  description: 'Contact Ingenious Targeting Laboratory for custom mouse model projects. Request quotes, schedule consultations, and discuss research needs.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
