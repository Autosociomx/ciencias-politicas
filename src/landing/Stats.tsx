import { useEffect, useRef } from 'react';

function countUp(el: HTMLElement, target: number, sfx = '', dur = 1600) {
  let start: number | null = null;
  const step = (ts: number) => {
    if (!start) start = ts;
    const p = Math.min((ts - start) / dur, 1);
    const ease = 1 - Math.pow(1 - p, 3);
    const v = Math.floor(ease * target);
    el.textContent = v.toLocaleString('es-MX') + sfx;
    if (p < 1) requestAnimationFrame(step);
    else el.textContent = target.toLocaleString('es-MX') + sfx;
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
          <span className="st-num s1" data-count="19321">19,321</span>
          <span className="st-label">Habitantes de Jala · Censo 2020</span>
        </div>
        <div>
          <span className="st-num s2" data-count="1">1</span>
          <span className="st-label">Portal para todo trámite municipal</span>
        </div>
        <div>
          <span className="st-num s3" data-count="5">5</span>
          <span className="st-label">Colores de triaje · sin receta de IA</span>
        </div>
        <div>
          <span className="st-num s4" data-count="20">20</span>
          <span className="st-label">Municipios a los que puede escalar</span>
        </div>
      </div>
    </div>
  );
}
