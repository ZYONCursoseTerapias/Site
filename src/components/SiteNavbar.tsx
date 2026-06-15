'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IconMenu2, IconX, IconBrandWhatsapp } from '@tabler/icons-react';

const navLinks = [
  { label: 'Atendimentos', href: '#atendimentos' },
  { label: 'Cursos', href: '#cursos-formacoes' },
  { label: 'Quem sou eu', href: '#sobre' },
  { label: 'Orientação Intuitiva', href: '#app' },
];

export default function SiteNavbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/98 shadow-sm shadow-green-900/8 backdrop-blur-sm'
          : 'bg-white/92 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/assets/Logotipo.jpg"
            alt="Logotipo Sandrä Costa"
            width={45}
            height={45}
            priority
            className="h-[45px] w-[45px] object-contain"
          />
          <div className="flex flex-col leading-tight">
            <span className="font-cursive text-[22px] text-[#1E6F30] leading-tight">Sandrä Costa</span>
            <span className="font-display text-[8px] tracking-[0.22em] text-[#6CC24A]/80">TERAPEUTA HOLÍSTICA</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-display text-xs text-[#1E6F30]/80 hover:text-[#1E6F30] transition-colors tracking-[0.18em]"
            >
              {l.label.toUpperCase()}
            </a>
          ))}

          {/* Link WhatsApp discreto */}
          <a
            href="https://wa.me/5511957947776"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-[#1E6F30]/70 hover:text-[#1E6F30] transition-colors tracking-[0.12em] border-b border-[#98BE98]/60 hover:border-[#1E6F30] pb-0.5"
          >
            <IconBrandWhatsapp size={14} />
            Entre em Contato
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#1E6F30]/70 p-1"
          aria-label="Menu"
        >
          {open ? <IconX size={22} /> : <IconMenu2 size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white/98 border-t border-green-100/60 px-6 py-5 flex flex-col gap-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-xs text-[#1E6F30]/80 tracking-[0.18em] py-1"
            >
              {l.label.toUpperCase()}
            </a>
          ))}
          <a
            href="https://wa.me/5511957947776"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 text-xs text-[#1E6F30]/70 tracking-[0.12em] mt-1"
          >
            <IconBrandWhatsapp size={15} />
            Agendar sessão
          </a>
        </div>
      )}
    </header>
  );
}
