import Image from 'next/image';
import {
  IconBrandInstagram,
  IconBrandTiktok,
  IconBrandYoutube,
  IconBrandFacebook,
  IconBrandLinkedin,
  IconMapPin,
  IconBrandWhatsapp,
  IconMail,
  IconClock,
} from '@tabler/icons-react';

const socials = [
  { icon: IconBrandInstagram, label: 'Instagram', href: 'https://www.instagram.com/terapeutasandracosta' },
  { icon: IconBrandTiktok,    label: 'TikTok',    href: 'https://www.tiktok.com/@terapeutasandracosta' },
  { icon: IconBrandYoutube,   label: 'YouTube',   href: 'https://www.youtube.com/@TerapeutaSandraCosta' },
  { icon: IconBrandFacebook,  label: 'Facebook',  href: 'https://www.facebook.com/TerapeutaSandraCostaZYON/' },
  { icon: IconBrandLinkedin,  label: 'LinkedIn',  href: 'https://www.linkedin.com/in/terapeuta-sandr%C3%A4-costa-5667b2105/' },
];

export default function SiteFooter() {
  return (
    <footer style={{ background: '#D8EDD8', borderTop: '1px solid #6CC24A' }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-14 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Coluna 1 — Logo + descrição */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/Logotipo.jpg"
              alt="Logotipo Sandrä Costa"
              width={40}
              height={40}
              className="h-[40px] w-[40px] object-contain"
            />
            <div className="flex flex-col leading-tight">
              <span className="font-display text-sm tracking-[0.08em] font-semibold" style={{ color: '#000000' }}>
                Sandrä Costa
              </span>
              <span className="font-display text-[8px] tracking-[0.22em]" style={{ color: '#6CC24A' }}>
                TERAPEUTA HOLÍSTICA
              </span>
            </div>
          </div>

          <p className="text-[15px] leading-[1.8]" style={{ color: '#1E6F30' }}>
            <span style={{ color: '#000000' }}>Desde 2001 inspirando mulheres a se reconectarem com sua identidade e a transformarem suas jornadas.</span>
          </p>

          <div className="flex gap-2.5 mt-1">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                style={{ color: '#6CC24A', border: '1px solid #6CC24A55' }}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Coluna 2 — Navegação */}
        <div>
          <h3 className="font-display text-[11px] tracking-[0.22em] mb-5" style={{ color: '#1E6F30', fontSize: '11px' }}>
            NAVEGAÇÃO
          </h3>
          <ul className="space-y-2.5">
            {[
              ['Atendimentos Terapêuticos', '#atendimentos'],
              ['Cursos de Desenvolvimento', '#cursos-desenvolvimento'],
              ['Formações Terapêuticas', '#cursos-formacoes'],
              ['Orientação Intuitiva Diária', '#app'],
              ['Quem sou eu', '#sobre'],
            ].map(([label, href]) => (
              <li key={label}>
                <a href={href} className="footer-link text-[15px]">
                  <span style={{ color: '#000000' }}>{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Coluna 3 — Contato */}
        <div>
          <h3 className="font-display text-[11px] tracking-[0.22em] mb-5" style={{ color: '#1E6F30', fontSize: '11px' }}>
            CONTATO
          </h3>
          <ul className="space-y-4">
            <li className="flex gap-2.5">
              <IconMapPin size={17} className="shrink-0 mt-0.5" style={{ color: '#6CC24A' }} />
              <span className="text-[15px] leading-[1.7]" style={{ color: '#000000' }}>
                Rua João Zunta, 36 — Vila São Pedro<br />São Paulo — SP — 04676-080
              </span>
            </li>
            <li className="flex gap-2.5 items-center">
              <IconBrandWhatsapp size={17} className="shrink-0" style={{ color: '#6CC24A' }} />
              <a href="https://wa.me/5511957947776" target="_blank" rel="noopener noreferrer" className="footer-link text-[15px]">
                <span style={{ color: '#000000' }}>(11) 9 5794-7776</span>
              </a>
            </li>
            <li className="flex gap-2.5 items-center">
              <IconMail size={17} className="shrink-0" style={{ color: '#6CC24A' }} />
              <a href="mailto:contato@terapeutasandracosta.com.br" className="footer-link text-[15px] break-all">
                <span style={{ color: '#000000' }}>contato@terapeutasandracosta.com.br</span>
              </a>
            </li>
            <li className="flex gap-2.5 items-start">
              <IconClock size={17} className="shrink-0 mt-0.5" style={{ color: '#6CC24A' }} />
              <span className="text-[15px] leading-[1.7]" style={{ color: '#000000' }}>
                Exclusivamente com horário agendado
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div style={{ borderTop: '1px solid #6CC24A33' }} className="py-5 text-center">
        <p className="text-[12px]">
          <span className="footer-copyright">
            © {new Date().getFullYear()} Sandrä Costa — Terapeuta Holística ·{' '}
          </span>
          <a href="https://terapeutasandracosta.com.br" className="hover:opacity-70 transition-colors footer-copyright">
            terapeutasandracosta.com.br
          </a>
        </p>
      </div>
    </footer>
  );
}
