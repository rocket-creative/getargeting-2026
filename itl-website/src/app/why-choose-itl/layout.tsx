import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why Choose Ingenious Targeting Laboratory | 28 Years of Mouse Model Expertise',
  description:
    'Why researchers choose Ingenious Targeting Laboratory for custom mouse models. 2,500+ projects, 800+ publications, pre germline characterization since 1998.',
  keywords:
    'why choose Ingenious Targeting Laboratory, mouse model expertise, gene targeting experience, ES cell advantages, trusted mouse model provider',
};

export default function WhyChooseLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
