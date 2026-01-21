import { LandingPage } from '@/templates/landing-page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lions.Seminovos',
  description: 'Os melhores carros seminovos do mercado em um único lugar',
  robots: 'index, follow',
};

export default function HomePage() {
  return <LandingPage />;
}
