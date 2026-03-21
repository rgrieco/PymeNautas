export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container">
        <a className="navbar-brand" href="#hero">
          <img src="/Img/Logo-02.svg" alt="Logo de PymeNautas" className="logo-img" />
          PymeNautas
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#episodios">Episodios</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#sobre">El Podcast</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-cta" href="#newsletter">Newsletter</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
