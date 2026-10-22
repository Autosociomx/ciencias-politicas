import { AVISO, FIGURA } from '../campana/plataforma';

export default function Footer() {
  return (
    <footer>
      <span className="ft-logo">Vanessa <em>Zúñiga</em></span>
      <p className="ft-sub">{FIGURA.partido} · {FIGURA.eleccion} · {FIGURA.lema} {FIGURA.llamado}</p>
      <div className="ft-arco" />
      <p className="ft-cr">{AVISO}</p>
    </footer>
  );
}
