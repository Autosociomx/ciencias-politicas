import { FIGURA } from '../campana/plataforma';

export default function Frase() {
  return (
    <div className="frase wix-bg">
      <div className="frase-in rv">
        <div className="ff-wrap orbe-mini" aria-hidden="true">
          <span>V</span>
        </div>
        <div>
          <blockquote>
            “{FIGURA.lema} <em>{FIGURA.llamado}</em>”
          </blockquote>
          <cite>— {FIGURA.nombreCompleto} · {FIGURA.partido} · Jala</cite>
        </div>
      </div>
    </div>
  );
}
