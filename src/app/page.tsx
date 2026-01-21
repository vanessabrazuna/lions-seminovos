import { LandingPage } from '@/templates/landing-page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lions.Seminovos',
  description: 'Os melhores carros seminovos do mercado em um único lugar',
  robots: 'index, follow',
  // openGraph: {
  //   title: 'Site.Set',
  //   description: 'Venda seus produtos como afiliado em um único lugar',
  //   url: 'https://nextjs-fundamentos.vercel.app/og-image.jpg',
  //   siteName: 'Site.Set',
  //   locale: 'pt-BR',
  //   type: 'website',
  //   images: [
  //     {
  //       url: 'https://nextjs-fundamentos.vercel.app/og-image.jpg',
  //       width: 800,
  //       height: 600,
  //       alt: 'Site.Set',
  //     },
  //   ],
  // },
};

export default function HomePage() {
  return <LandingPage />;
}
