import { useEffect } from 'react';
import type { AppView } from '../types';
import Nav from './Nav';
import Hero from './Hero';
import Stats from './Stats';
import Logros from './Logros';
import Frase from './Frase';
import Pilares from './Pilares';
import AsistenteIA from './AsistenteIA';
import Ruta from './Ruta';
import Redes from './Redes';
import CTA from './CTA';
import Footer from './Footer';

interface LandingPageProps {
  onNavigate: (view: AppView) => void;
}

export default function LandingPage({ onNavigate }: LandingPageProps) {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.rv');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('on');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <Nav onNavigate={onNavigate} />
      <Hero onNavigate={onNavigate} />
      <Stats />
      <Logros />
      <Frase />
      <Pilares />
      <AsistenteIA />
      <Ruta />
      <Redes />
      <CTA />
      <Footer />
    </>
  );
}
