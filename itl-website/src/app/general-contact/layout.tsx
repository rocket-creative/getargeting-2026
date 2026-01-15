import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Ingenious Targeting Laboratory',
  description: 'Contact Ingenious Targeting Laboratory for general inquiries about custom mouse models, services, and support. Our team responds within 1 business day.',
  keywords: 'contact ITL, mouse model inquiry, gene targeting contact, biotech support',
  openGraph: {
    title: 'Contact Us | Ingenious Targeting Laboratory',
    description: 'Contact Ingenious Targeting Laboratory for general inquiries about custom mouse models, services, and support.',
    type: 'website',
  },
};

export default function GeneralContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
