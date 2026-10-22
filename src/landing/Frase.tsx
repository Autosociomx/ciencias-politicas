import { FIGURA } from '../campana/plataforma';

export default function Frase() {
  return (
    <div className="frase wix-bg">
      <div className="frase-in rv">
        <div className="ff-wrap orbe-mini" aria-hidden="true">
          <span>🛣️</span>
        </div>
        <div>
          <blockquote>
            “{FIGURA.lema} <em>El Orbe te guía.</em> Tú no tienes que entender el organigrama.”
          </blockquote>
          <cite>— {FIGURA.nombre} · {FIGURA.cargo}</cite>
        </div>
      </div>
    </div>
  );
}
