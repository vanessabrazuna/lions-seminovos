import { Layout } from '@/components/layout';
import '@/styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lions.Seminovos',
  description: 'Os melhores carros seminovos do mercado em um único lugar',
  openGraph: {
    title: 'Lions.Seminovos',
    description: 'Os melhores carros seminovos do mercado em um único lugar',
    url: '#',
    siteName: 'Lions.Seminovos',
    locale: 'pt-BR',
    type: 'website',
    images: [
      {
        url: '#',
        width: 800,
        height: 600,
        alt: 'Lions.Seminovos',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
