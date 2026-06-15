import type { Metadata } from 'next';
import { Quicksand, Yanone_Kaffeesatz, Great_Vibes } from 'next/font/google';
import './globals.css';

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-quicksand',
  display: 'swap',
  preload: false,
});

const yanone = Yanone_Kaffeesatz({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-yanone',
  display: 'swap',
  preload: false,
});

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-great-vibes',
  display: 'swap',
  preload: false,
});

export const metadata: Metadata = {
  title: 'Sandrä Costa — Terapeuta Holística | São Paulo',
  description: 'Atendimentos terapêuticos, cursos de formação e orientação intuitiva diária. Constelação Familiar, Hipnose, Regressão, Tarot Terapêutico e muito mais.',
  keywords: 'terapeuta holística, constelação familiar, hipnose, regressão, tarot terapêutico, massagem, cursos terapêuticos, São Paulo',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth">
      <body className={`${quicksand.variable} ${yanone.variable} ${greatVibes.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}
