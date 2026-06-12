import { useEffect, useRef } from 'react';

function countUp(el: HTMLElement, target: number, sfx = '', dur = 1800) {
  let start: number | null = null;
  const step = (ts: number) => {
    if (!start) start = ts;
    const p = Math.min((ts - start) / dur, 1);
    const ease = 1 - Math.pow(1 - p, 3);
    const v = Math.floor(ease * target);
    el.textContent = (target >= 10000 ? (v / 1000).toFixed(0) + 'K' : v) + sfx;
    if (p < 1) requestAnimationFrame(step);
    else el.textContent = (target >= 10000 ? (target / 1000).toFixed(0) + 'K' : target) + sfx;
  };
  requestAnimationFrame(step);
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current!.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
            countUp(el, +(el.dataset.count!), el.dataset.sfx ?? '');
          });
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="stats" ref={ref}>
      <div className="stats-grid">
        <div>
          <span className="st-num s1" data-count="425924">425K</span>
          <span className="st-label">Tepicenses gobernados</span>
        </div>
        <div>
          <span className="st-num s2" data-count="100" data-sfx="%">100%</span>
          <span className="st-label">Obras trazables en vivo</span>
        </div>
        <div>
          <span className="st-num s3" data-count="20">20</span>
          <span className="st-label">Municipios por digitalizar</span>
        </div>
        <div>
          <span className="st-num s4" data-count="519000" data-sfx="K">519K</span>
          <span className="st-label">Seguidores en Instagram</span>
        </div>
      </div>
    </div>
  );
}
