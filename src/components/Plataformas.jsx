export default function Plataformas() {
  return (
    <section id="plataformas">
      <div className="container text-center">
        <p className="plataformas-label">Escuchanos en</p>
        <div className="plataformas-badges">
          <a href="https://www.spotify.com" target="_blank" rel="noreferrer" className="badge-plataforma badge-spotify">
            <i className="fab fa-spotify"></i> Spotify
          </a>
          <a href="https://www.youtube.com/@Pymenautas" target="_blank" rel="noreferrer" className="badge-plataforma badge-youtube">
            <i className="fab fa-youtube"></i> YouTube
          </a>
          <a href="#" target="_blank" rel="noreferrer" className="badge-plataforma badge-apple">
            <i className="fab fa-apple"></i> Apple Podcasts
          </a>
        </div>
      </div>
    </section>
  )
}
