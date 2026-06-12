import Link from 'next/link';
import {
  IconTestPipe,
  IconUser,
  IconActivityHeartbeat,
  IconStars,
  IconLock,
  IconArrowRight,
} from '@tabler/icons-react';

const testes = [
  { icon: IconUser,              label: 'Guia da Personalidade',               status: 'disponível',    href: 'https://guiadapersonalidade.terapeutasandracosta.com/' },
  { icon: IconTestPipe,          label: 'Sabotadores',                         status: 'desenvolvimento', href: null },
  { icon: IconActivityHeartbeat, label: 'Raio X da Realidade',                 status: 'desenvolvimento', href: null },
  { icon: IconStars,             label: 'Análise parcial — Mapa Astral',       status: 'desenvolvimento', href: null },
  { icon: IconStars,             label: 'Análise parcial — Mapa Numerológico', status: 'desenvolvimento', href: null },
];

export default function AppSection() {
  return (
    <section id="app" className="py-24 px-4" style={{ background: '#F5E6C8' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="font-bold mb-4" style={{ color: '#1E6F30' }}>
            Orientação Intuitiva Diária
          </h2>
          <p className="max-w-xl mx-auto" style={{ color: '#000000' }}>
            Ferramentas digitais para autoconhecimento e orientação diária personalizada.
          </p>
        </div>

        <hr className="mb-14" style={{ borderColor: 'rgba(30,111,48,0.25)' }} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Testes Gratuitos */}
          <div className="rounded-2xl p-8" style={{ background: '#ffffff', border: '1px solid #e0d0a0' }}>
            <div className="flex items-center gap-3 mb-6">
              <IconTestPipe size={22} style={{ color: '#6CC24A' }} />
              <h3 className="font-bold" style={{ color: '#1E6F30' }}>Testes Gratuitos</h3>
              <span className="text-xs px-3 py-1 rounded-full font-semibold" style={{ background: '#6CC24A', color: '#fff' }}>FREEMIUM</span>
            </div>
            <p className="text-sm mb-6 leading-relaxed" style={{ color: '#000000' }}>
              Ferramentas de autoconhecimento disponíveis gratuitamente para você começar sua jornada.
            </p>
            <div className="space-y-3">
              {testes.map(({ icon: Icon, label, status, href }) => {
                const inner = (
                  <>
                    <Icon size={18} style={{ color: status === 'disponível' ? '#6CC24A' : '#aaa' }} />
                    <span className="flex-1" style={{ color: '#000000', fontSize: '15px' }}>{label}</span>
                    {status === 'disponível' ? (
                      <span className="text-xs font-semibold" style={{ color: '#6CC24A' }}>Disponível</span>
                    ) : (
                      <span className="text-xs flex items-center gap-1" style={{ color: '#999' }}>
                        <IconLock size={11} /> Em breve
                      </span>
                    )}
                  </>
                );
                const sharedStyle = {
                  background: status === 'disponível' ? '#f9f7f3' : '#f5f3f0',
                  border: `1px solid ${status === 'disponível' ? '#6CC24A55' : '#ddd'}`,
                  opacity: status === 'disponível' ? 1 : 0.65,
                };
                return href ? (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl transition-shadow hover:shadow-md"
                    style={sharedStyle}
                  >
                    {inner}
                  </a>
                ) : (
                  <div
                    key={label}
                    className="flex items-center gap-3 p-3 rounded-xl"
                    style={sharedStyle}
                  >
                    {inner}
                  </div>
                );
              })}
            </div>
            <button
              className="mt-6 w-full px-6 py-3 rounded-full text-sm font-semibold flex items-center justify-center gap-2 transition-opacity hover:opacity-90"
              style={{ background: '#6CC24A', color: '#ffffff' }}
            >
              Iniciar teste gratuito
              <IconArrowRight size={16} />
            </button>
          </div>

          {/* App Completo */}
          <div className="rounded-2xl p-8" style={{ background: '#ffffff', border: '2px solid #1E6F30' }}>
            <h3 className="font-bold mb-1" style={{ color: '#1E6F30' }}>Conselho Intuitivo</h3>
            <p className="font-display text-xs tracking-widest mb-5" style={{ color: '#6CC24A' }}>
              APLICATIVO COMPLETO
            </p>
            <p className="text-sm leading-relaxed mb-6" style={{ color: '#000000' }}>
              Análise diária integrada com interpretação personalizada de Luz e Sombra.
              Orientação completa para cada dia da sua vida.
            </p>

            <div className="space-y-3 mb-6">
              {[
                { plano: 'Free',    desc: '1 análise gratuita mensal' },
                { plano: 'Premium', desc: 'Análise diária completa + histórico' },
                { plano: 'VIP',     desc: 'Análise diária completa + histórico + orientação mensal com Sandrä' },
              ].map(({ plano, desc }) => (
                <div key={plano} className="flex items-center gap-3 p-3 rounded-xl"
                  style={{ background: '#f9f7f3', border: '1px solid #e0d8c8' }}>
                  <span className="font-bold w-16" style={{ color: '#1E6F30', fontSize: '15px' }}>{plano}</span>
                  <span style={{ color: '#000000', fontSize: '15px' }}>{desc}</span>
                </div>
              ))}
            </div>

            <p className="text-xs mb-4 text-center" style={{ color: '#666' }}>
              Pagamento via SumUp · Cancele quando quiser
            </p>

            <Link
              href="/cadastro"
              className="w-full px-6 py-3 rounded-full text-sm font-semibold flex items-center justify-center gap-2 transition-opacity hover:opacity-90"
              style={{ background: '#1E6F30', color: '#ffffff' }}
            >
              Acessar o Aplicativo
              <IconArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
