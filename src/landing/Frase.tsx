export default function Frase() {
  return (
    <div className="frase wix-bg">
      <div className="frase-in rv">
        <div className="ff-wrap">
          <img
            className="ff-img"
            src="https://images.unsplash.com/photo-1586996292898-71f4036c4e07?w=300&h=300&fit=crop&crop=faces&auto=format&q=80"
            alt="Geraldine Ponce"
            loading="lazy"
          />
        </div>
        <div>
          <p style={{ fontFamily: 'var(--mono)', fontSize: '.58rem', fontWeight: 600, letterSpacing: '.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,.55)', marginBottom: '.7rem' }}>
            Visión de campaña · Nayarit 2027–2033
          </p>
          <blockquote>
            "De la Ciudad que Queremos<br />
            al Estado que{' '}
            <em>Merecemos:</em><br />
            Tecnología con Corazón<br />
            para Nayarit."
          </blockquote>
          <cite>— Geraldine Ponce · Candidata a Gobernadora de Nayarit</cite>

          {/* Frase derivada — la prueba */}
          <div style={{ marginTop: '1.4rem', paddingTop: '1.2rem', borderTop: '1px solid rgba(255,255,255,.2)' }}>
            <p style={{ fontFamily: 'var(--frau)', fontVariationSettings: '"opsz" 30', fontStyle: 'italic', fontWeight: 400, fontSize: 'clamp(.9rem, 1.8vw, 1.15rem)', color: 'rgba(255,255,255,.75)', lineHeight: 1.5 }}>
              "Si pude digitalizar Tepic con{' '}
              <span style={{ color: 'var(--solar)', fontWeight: 600 }}>425 mil habitantes,</span>{' '}
              puedo digitalizar Nayarit entero."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
