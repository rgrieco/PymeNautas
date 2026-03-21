export default function UltimoEpisodio() {
  return (
    <section id="ultimo-episodio">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">NUEVO</span>
          <h2 className="section-title">Último Episodio</h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="episodio-destacado">
              <p className="episodio-numero">Episodio #01</p>
              <h3 className="episodio-titulo">Bienvenidos a la Galaxia Empresarial</h3>
              <p className="episodio-descripcion">
                En este primer episodio te contamos de qué se trata PymeNautas, qué vas a encontrar
                en este podcast y por qué decidimos crear una guía para navegar el universo empresarial
                de las PYME.
              </p>
              <div className="spotify-wrapper">
                <iframe
                  src="https://open.spotify.com/embed/episode/{ID_DEL_EPISODIO}"
                  width="100%"
                  height="152"
                  frameBorder="0"
                  allow="encrypted-media"
                ></iframe>
              </div>
              <div className="episodio-plataformas">
                <span>Escuchar también en:</span>
                <a href="https://www.youtube.com/@Pymenautas" target="_blank" rel="noreferrer">
                  <i className="fab fa-youtube"></i> YouTube
                </a>
                <a href="#" target="_blank" rel="noreferrer">
                  <i className="fab fa-apple"></i> Apple Podcasts
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
