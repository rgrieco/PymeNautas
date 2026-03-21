export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row footer-content g-4">
          <div className="col-md-4 footer-column">
            <div className="footer-brand">
              <img src="/Img/Logo-02.svg" alt="PymeNautas" className="footer-logo" />
              <span>PymeNautas</span>
            </div>
            <p className="footer-tagline">Tu guía en la galaxia empresarial.</p>
          </div>

          <div className="col-md-4 footer-column">
            <h5 className="footer-heading">Links de Interés</h5>
            <ul className="list-unstyled footer-links">
              <li><a href="https://www.gcasociados.uy" target="_blank" rel="noreferrer">Estudio Profesional</a></li>
              <li><a href="#sobre">El Podcast</a></li>
              <li><a href="#episodios">Episodios</a></li>
              <li><a href="#newsletter">Newsletter</a></li>
            </ul>
          </div>

          <div className="col-md-4 footer-column">
            <h5 className="footer-heading">Seguinos</h5>
            <ul className="list-unstyled footer-social">
              <li>
                <a href="https://www.instagram.com/pymenautas" target="_blank" rel="noreferrer">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@Pymenautas" target="_blank" rel="noreferrer">
                  <i className="fab fa-youtube"></i> YouTube
                </a>
              </li>
              <li>
                <a href="https://www.spotify.com" target="_blank" rel="noreferrer">
                  <i className="fab fa-spotify"></i> Spotify
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom text-center">
          <p>&copy; 2025 PymeNautas. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
