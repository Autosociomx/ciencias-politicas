import { AVISO, FIGURA } from '../campana/plataforma';

export default function Footer() {
  return (
    <footer>
      <span className="ft-logo">Jala <em>Digital</em></span>
      <p className="ft-sub">{FIGURA.nombre} · {FIGURA.eleccion}</p>
      <div className="ft-arco" />
      <p className="ft-cr">{AVISO}</p>
    </footer>
  );
}
