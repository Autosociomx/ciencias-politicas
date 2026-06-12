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
          <blockquote>
            "Si pude digitalizar Tepic con{' '}
            <em>425 mil habitantes,</em>{' '}
            puedo digitalizar Nayarit entero."
          </blockquote>
          <cite>— Geraldine Ponce · Presidenta Municipal de Tepic</cite>
        </div>
      </div>
    </div>
  );
}
