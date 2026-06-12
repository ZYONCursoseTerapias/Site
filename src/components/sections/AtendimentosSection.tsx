'use client';

import { useState } from 'react';
import { atendimentos } from '@/data/atendimentos';
import { IconBrandWhatsapp, IconMapPin, IconChevronDown } from '@tabler/icons-react';

function AtendimentoCard({ a }: { a: (typeof atendimentos)[number] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="card-therapeutic">
      <button
        className="card-therapeutic-trigger"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <div className="flex items-center gap-2 min-w-0">
          <span className="font-medium leading-snug text-left" style={{ color: '#1E6F30', fontSize: '15px' }}>{a.nome}</span>
        </div>
        <IconChevronDown
          size={16}
          className={`shrink-0 text-[#98BE98] transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div className="card-therapeutic-body">
          <p className="text-sm leading-[1.85]" style={{ color: '#000000' }}>
            {a.descricao}
            <span className="font-medium" style={{ color: '#1E6F30' }}>
              {a.presencial ? ' (Atendimento Presencial)' : ' (Atendimento Online ou Presencial)'}
            </span>
          </p>
          <a
            href="https://wa.me/5511957947776"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-xs text-[#1E6F30]/70 hover:text-[#1E6F30] transition-colors tracking-[0.1em] border-b border-[#98BE98]/50 hover:border-[#1E6F30] pb-0.5"
          >
            <IconBrandWhatsapp size={13} />
            Agendar sessão
          </a>
        </div>
      )}
    </div>
  );
}

export default function AtendimentosSection() {
  return (
    <section id="atendimentos" className="py-28 px-6 section-white bg-bamboo">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-display text-xs tracking-[0.3em] text-[#6CC24A] mb-3">
            ATENDIMENTOS TERAPÊUTICOS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E6F30] mb-5">
            Um cuidado para cada momento
          </h2>
          <p className="max-w-md mx-auto text-sm leading-[1.9]" style={{ color: '#000000' }}>
            Cada modalidade oferece um caminho único de transformação.<br />
            Escolha o que ressoa com o que você precisa agora, ou me conte sua história e encontramos juntas, a melhor solução.
          </p>
          <div className="divider-elegant mt-8 max-w-xs mx-auto" />
        </div>

        {/* Lista accordion */}
        <div className="flex flex-col gap-2">
          {atendimentos.map((a) => (
            <AtendimentoCard key={a.nome} a={a} />
          ))}
        </div>

        {/* CTA ao final */}
        <div className="mt-12 text-center">
          <a
            href="https://wa.me/5511957947776"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-primary inline-flex items-center gap-2"
          >
            <IconBrandWhatsapp size={16} />
            Agendar minha sessão
          </a>
          <p className="mt-4 text-xs italic" style={{ color: '#9ab59a' }}>
            Não sabe por onde começar?<br />Entre em contato, que conversaremos sem compromisso.
          </p>
        </div>
      </div>
    </section>
  );
}
