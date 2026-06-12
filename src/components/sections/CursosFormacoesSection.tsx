'use client';

import { useState } from 'react';
import { cursosFormacoesDiversos, cursosMassagem, Curso } from '@/data/cursos';
import { IconChevronDown, IconUsers, IconBook, IconTarget } from '@tabler/icons-react';

function CursoCard({ curso }: { curso: Curso }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="card-therapeutic">
      <button
        onClick={() => setOpen(!open)}
        className="card-therapeutic-trigger"
        aria-expanded={open}
      >
        <span className="font-medium leading-snug" style={{ color: '#1E6F30', fontSize: '15px' }}>{curso.nome}</span>
        <IconChevronDown
          size={16}
          className={`shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          style={{ color: '#98BE98' }}
        />
      </button>

      {open && (
        <div className="card-therapeutic-body flex flex-col gap-4">
          <p className="text-sm leading-relaxed" style={{ color: '#000000' }}>{curso.descricao}</p>

          <div className="flex items-start gap-2">
            <IconTarget size={15} className="shrink-0 mt-0.5 text-[#6CC24A]" />
            <div>
              <p className="text-xs font-semibold text-[#1E6F30] uppercase tracking-wide mb-1">Objetivo</p>
              <p className="text-sm" style={{ color: '#000000' }}>{curso.objetivo}</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <IconBook size={15} className="shrink-0 mt-0.5 text-[#6CC24A]" />
            <div>
              <p className="text-xs font-semibold text-[#1E6F30] uppercase tracking-wide mb-2">Conteúdo Programático</p>
              <ul className="space-y-1">
                {curso.conteudo.map((c) => (
                  <li key={c} className="text-sm flex gap-2" style={{ color: '#000000' }}>
                    <span className="text-[#6CC24A] mt-1">›</span> {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <IconUsers size={15} className="shrink-0 mt-0.5 text-[#6CC24A]" />
            <div>
              <p className="text-xs font-semibold text-[#1E6F30] uppercase tracking-wide mb-1">Público-Alvo</p>
              <p className="text-sm" style={{ color: '#000000' }}>{curso.publico}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-1">
            <span className="text-xs text-[#1E6F30] bg-[#f0faf0] border border-[#98BE98] px-3 py-1 rounded-full">
              Apostila inclusa
            </span>
            <span className="text-xs text-[#1E6F30] bg-[#f0faf0] border border-[#98BE98] px-3 py-1 rounded-full">
              Certificado incluso
            </span>
          </div>

          <a
            href="https://wa.me/5511957947776"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-flex justify-center bg-[#1E6F30] hover:bg-[#6CC24A] text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-colors"
          >
            Quero me inscrever
          </a>
        </div>
      )}
    </div>
  );
}

export default function CursosFormacoesSection() {
  return (
    <section id="cursos-formacoes" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E6F30] mb-4">
            Cursos de Formações Terapêuticas
          </h2>
        </div>

        <hr className="divider-green mb-12" />

        {/* Texto introdutório */}
        <div className="max-w-3xl mx-auto mb-14">
          <div className="bg-[#f5fbf5] border border-[#98BE98] rounded-2xl p-8 text-gray-600 text-base leading-relaxed space-y-4">
            <p>
              Minhas formações são cuidadosamente planejadas para mulheres que desejam transformar
              não apenas suas carreiras, mas também a si mesmas.
            </p>
            <p>
              Aqui, o aprendizado vai além da capacitação técnica: é uma jornada de autodescoberta
              e crescimento pessoal. Cada formação é personalizada para oferecer uma experiência
              única, onde as alunas não apenas aprendem as técnicas terapêuticas, mas também
              vivenciam transformações profundas com as mesmas ferramentas que estão se formando.
            </p>
            <p>
              Com uma abordagem prática, acolhedora e enriquecida por materiais de apoio exclusivos,
              minhas formações unem teoria e vivência para que você se qualifique de forma completa
              na área de Terapias Holísticas.
            </p>
            <div className="pt-2">
              <p className="font-semibold text-[#1E6F30] mb-2">O que você encontrará:</p>
              <ul className="space-y-1">
                {[
                  'Aprendizado que transforma você e sua prática profissional.',
                  'Técnicas aplicadas na prática para autotransformação.',
                  'Um ambiente acolhedor que incentiva seu crescimento.',
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-sm">
                    <span className="text-[#6CC24A] font-bold">›</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-sm italic text-gray-400 pt-1">
              Escolha a formação que ressoa com a sua jornada e comece a construir uma carreira
              alinhada ao seu propósito e à sua essência.
            </p>
          </div>
        </div>

        {/* Cursos Diversos */}
        <div className="mb-14">
          <h3 className="font-display text-xl tracking-wide text-[#1E6F30] mb-6 pb-2 border-b-2 border-[#98BE98]">
            CURSOS DIVERSOS <span className="text-[#6CC24A] text-base ml-2">({cursosFormacoesDiversos.length} cursos)</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cursosFormacoesDiversos.map((c) => <CursoCard key={c.nome} curso={c} />)}
          </div>
        </div>

        {/* Cursos de Massagem */}
        <div>
          <h3 className="font-display text-xl tracking-wide text-[#1E6F30] mb-6 pb-2 border-b-2 border-[#98BE98]">
            CURSOS DE MASSAGENS <span className="text-[#6CC24A] text-base ml-2">({cursosMassagem.length} cursos)</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cursosMassagem.map((c) => <CursoCard key={c.nome} curso={c} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
