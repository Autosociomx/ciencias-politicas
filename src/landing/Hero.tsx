import { useEffect, useRef } from 'react';
import type { AppView } from '../types';

interface HeroProps {
  onNavigate: (view: AppView) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const escenaRef = useRef<HTMLDivElement>(null);
  const fotoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const escena = escenaRef.current;
    if (!escena) return;
    const ojos = [...escena.querySelectorAll<HTMLElement>('.ojo')];
    let tx = 0, ty = 0, cx = 0, cy = 0;
    const isTouch = 'ontouchstart' in window;
    let rafId: number;

    if (!isTouch) {
      const onMouse = (e: MouseEvent) => {
        tx = e.clientX / innerWidth - 0.5;
        ty = e.clientY / innerHeight - 0.5;
      };
      document.addEventListener('mousemove', onMouse, { passive: true });
      const animate = () => {
        cx += (tx - cx) * 0.06;
        cy += (ty - cy) * 0.06;
        ojos.forEach((o) => {
          const p = +(o.dataset.prof ?? 0);
          o.style.translate = `${cx * p}px ${cy * p}px`;
        });
        rafId = requestAnimationFrame(animate);
      };
      rafId = requestAnimationFrame(animate);
      return () => {
        document.removeEventListener('mousemove', onMouse);
        cancelAnimationFrame(rafId);
      };
    } else {
      const onOrient = (e: DeviceOrientationEvent) => {
        if (e.gamma !== null) {
          tx = Math.max(-0.5, Math.min(0.5, e.gamma / 60));
          ty = Math.max(-0.5, Math.min(0.5, ((e.beta ?? 45) - 45) / 60));
        }
      };
      const onScroll = () => {
        ty = Math.max(-0.5, Math.min(0.5, scrollY / innerHeight - 0.25));
      };
      window.addEventListener('deviceorientation', onOrient, { passive: true });
      window.addEventListener('scroll', onScroll, { passive: true });
      const animate = () => {
        cx += (tx - cx) * 0.06;
        cy += (ty - cy) * 0.06;
        ojos.forEach((o) => {
          const p = +(o.dataset.prof ?? 0);
          o.style.translate = `${cx * p}px ${cy * p}px`;
        });
        rafId = requestAnimationFrame(animate);
      };
      rafId = requestAnimationFrame(animate);
      return () => {
        window.removeEventListener('deviceorientation', onOrient);
        window.removeEventListener('scroll', onScroll);
        cancelAnimationFrame(rafId);
      };
    }
  }, []);

  useEffect(() => {
    const frame = fotoRef.current;
    if (!frame || 'ontouchstart' in window) return;
    frame.style.transition = 'transform .15s ease-out';
    const onMove = (e: MouseEvent) => {
      const r = frame.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      frame.style.transform = `perspective(800px) rotateY(${x * 7}deg) rotateX(${y * -7}deg) scale(1.015)`;
    };
    const onLeave = () => {
      frame.style.transform = 'perspective(800px) rotateY(0) rotateX(0) scale(1)';
    };
    frame.addEventListener('mousemove', onMove);
    frame.addEventListener('mouseleave', onLeave);
    return () => {
      frame.removeEventListener('mousemove', onMove);
      frame.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <section className="hero wix-bg" id="inicio">
      <div className="hero-banda-top" />
      <div className="ojos-escena" ref={escenaRef}>
        <div className="ojo ojo-a" data-prof="22">
          <div className="ojo-giro">
            <div className="capa c1" /><div className="capa c2" /><div className="capa c3" />
            <div className="capa c4" /><div className="capa c5" /><div className="capa c6" />
          </div>
        </div>
        <div className="ojo ojo-b" data-prof="40">
          <div className="ojo-giro">
            <div className="capa c1" /><div className="capa c2" /><div className="capa c3" />
            <div className="capa c4" /><div className="capa c5" /><div className="capa c6" />
          </div>
        </div>
        <div className="ojo ojo-c" data-prof="60">
          <div className="ojo-giro">
            <div className="capa c1" /><div className="capa c2" /><div className="capa c3" />
            <div className="capa c4" /><div className="capa c5" /><div className="capa c6" />
          </div>
        </div>
      </div>

      <div className="hero-texto">
        <div className="eyebrow">
          <span className="pt" />
          Nayarit · Gobernatura · 2027
        </div>
        <h1 className="hero-nombre">
          <span className="fn">Geraldine</span>
          <span className="ln">Ponce</span>
        </h1>
        <p className="hero-cargo">
          <strong>Presidenta Municipal de Tepic</strong>,<br />
          primera mujer en gobernar la capital de Nayarit
        </p>
        <p className="hero-tagline">
          La gobernante que <em>ya transformó Tepic.</em><br />
          Ahora lleva ese cambio a los 20 municipios de Nayarit.
        </p>
        <div className="hero-btns">
          <a href="#pilares" className="btn-a">Ver la propuesta →</a>
          <button className="btn-b" onClick={() => onNavigate('dashboard')}>
            Plataforma ConnectX
          </button>
        </div>
      </div>

      <div className="hero-foto">
        <div className="foto-frame" ref={fotoRef}>
          <img
            className="foto-img"
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=faces&auto=format&q=85"
            alt="Geraldine Ponce — Presidenta Municipal de Tepic"
            loading="eager"
          />
          <div className="foto-label">1ª Presidenta Municipal de Tepic</div>
          <div className="foto-badge">
            <span className="n">30</span>
            <span className="t">años · Tepic</span>
          </div>
        </div>
      </div>
    </section>
  );
}
