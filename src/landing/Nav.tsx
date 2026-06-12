import { useEffect, useRef } from 'react';
import type { AppView } from '../types';

interface NavProps {
  onNavigate: (view: AppView) => void;
}

export default function Nav({ onNavigate }: NavProps) {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      navRef.current?.classList.toggle('sombra', scrollY > 50);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav ref={navRef} id="nav">
      <a href="#inicio" className="nav-logo">
        <span className="gema" />
        Geraldine Ponce
      </a>
      <ul className="nav-links">
        <li><a href="#logros">Logros</a></li>
        <li><a href="#pilares">Propuesta</a></li>
        <li><a href="#ia">Asistente IA</a></li>
        <li>
          <button
            className="nav-links"
            style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
            onClick={() => onNavigate('dashboard')}
          >
            <span style={{
              fontFamily: 'var(--inst)', fontSize: '.72rem', fontWeight: 600,
              letterSpacing: '.12em', textTransform: 'uppercase',
              color: 'var(--gris)', transition: 'color .2s',
            }}>
              ConnectX →
            </span>
          </button>
        </li>
        <li><a href="#comunidad" className="nav-cta">Únete</a></li>
      </ul>
    </nav>
  );
}
