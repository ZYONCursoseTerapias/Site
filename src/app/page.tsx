import SiteNavbar from '@/components/SiteNavbar';
import SiteFooter from '@/components/SiteFooter';
import LogoDivider from '@/components/LogoDivider';
import HeroSection from '@/components/sections/HeroSection';
import AtendimentosSection from '@/components/sections/AtendimentosSection';
import CursosDesenvolvimentoSection from '@/components/sections/CursosDesenvolvimentoSection';
import CursosFormacoesSection from '@/components/sections/CursosFormacoesSection';
import AppSection from '@/components/sections/AppSection';
import SobreSection from '@/components/sections/SobreSection';

export default function HomePage() {
  return (
    <>
      <SiteNavbar />
      <main>
        <HeroSection />
        <LogoDivider />
        <AtendimentosSection />
        <LogoDivider />
        <CursosDesenvolvimentoSection />
        <LogoDivider />
        <CursosFormacoesSection />
        <LogoDivider />
        <AppSection />
        <LogoDivider />
        <SobreSection />
      </main>
      <SiteFooter />
    </>
  );
}
