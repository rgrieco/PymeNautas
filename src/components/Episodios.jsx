const episodios = [
  {
    num: '#01',
    titulo: 'Bienvenidos a la Galaxia Empresarial',
    desc: 'Qué es PymeNautas, qué vas a encontrar y por qué existe este podcast para emprendedores.',
    disponible: true,
  },
  {
    num: '#02',
    titulo: 'Próximamente',
    desc: 'Nuevos episodios en camino. Suscribite al newsletter para ser el primero en enterarte.',
    disponible: false,
  },
  {
    num: '#03',
    titulo: 'Próximamente',
    desc: 'Seguimos construyendo la galaxia. Cada semana un nuevo episodio para tu negocio.',
    disponible: false,
  },
]

export default function Episodios() {
  return (
    <section id="episodios">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Episodios</h2>
          <p className="section-subtitle">Cada episodio es un salto al futuro de tu negocio</p>
        </div>
        <div className="row g-4">
          {episodios.map((ep) => (
            <div className="col-md-4" key={ep.num}>
              <div className={`episodio-card${!ep.disponible ? ' episodio-card-soon' : ''}`}>
                <div className="episodio-card-num">{ep.num}</div>
                <h4 className="episodio-card-title">{ep.titulo}</h4>
                <p className="episodio-card-desc">{ep.desc}</p>
                <div className="episodio-card-footer">
                  {ep.disponible ? (
                    <>
                      <span className="episodio-duracion"><i className="fas fa-clock"></i> Disponible</span>
                      <a href="#ultimo-episodio" className="btn-escuchar">
                        <i className="fas fa-play"></i> Escuchar
                      </a>
                    </>
                  ) : (
                    <span className="episodio-duracion"><i className="fas fa-rocket"></i> En órbita</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
