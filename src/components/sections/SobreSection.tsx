import Image from 'next/image';
import { IconBrandWhatsapp } from '@tabler/icons-react';

export default function SobreSection() {
  return (
    <section id="sobre" className="relative py-28 px-6 section-cream bg-stone-texture logo-bg-sobre overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-display text-xs tracking-[0.3em] mb-3" style={{ color: '#6CC24A' }}>QUEM SOU EU</p>
          <h2 className="font-bold" style={{ color: '#1E6F30' }}>Sandrä Costa</h2>
          <div className="divider-logo mt-6 max-w-xs mx-auto">
            <img src="/assets/logotipo.svg" alt="" className="divider-logo-icon" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div className="flex justify-center">
            <div className="relative w-80 rounded-3xl overflow-hidden shadow-2xl shadow-green-900/15">
              <Image
                src="/assets/eu1.jpeg"
                alt="Sandrä Costa — Terapeuta Holística"
                width={720}
                height={1280}
                className="w-full h-auto rounded-3xl"
              />
            </div>
          </div>

          <div className="space-y-5 text-base leading-[1.9]" style={{ color: '#000000' }}>
            <h3 className="font-bold leading-snug" style={{ color: '#1E6F30' }}>
              Prazer, eu sou Sandrä Costa
            </h3>

            <p>
              Desde 2001, com muito amor e propósito, dedico minha vida a inspirar mulheres que
              desejam se reconectar com sua essência e transformar suas jornadas.
            </p>
            <p>
              Minha missão é acolher, guiar e oferecer o suporte necessário para que você descubra
              seu verdadeiro potencial, desvendando bloqueios, ressignificando histórias e abrindo
              espaço para uma vida mais plena e equilibrada.
            </p>
            <p>
              Cada sessão é um espaço seguro e transformador, onde você pode reconhecer sua força
              interior e alinhar-se com quem você realmente é.
            </p>
            <p className="font-medium italic" style={{ color: '#4a8f5c' }}>
              Vamos juntas nessa jornada de cura e autodescoberta?
            </p>

            <a
              href="https://wa.me/5511957947776"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-outline inline-flex items-center gap-2 mt-2"
            >
              <IconBrandWhatsapp size={16} />
              Fale comigo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
