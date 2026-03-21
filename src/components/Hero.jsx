import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

export default function Hero() {
  const controls = useAnimation()

  useEffect(() => {
    async function sequence() {
      await controls.start({
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
        opacity: 1,
        transition: { duration: 3.2, ease: [0.16, 1, 0.3, 1] },
      })
      controls.start({
        y: [0, -26, 0],
        transition: { duration: 7, repeat: Infinity, ease: 'easeInOut' },
      })
    }
    sequence()
  }, [controls])

  return (
    <section id="hero">
      <div className="hero-stars"></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 hero-text">
            <p className="hero-tag">🚀 El podcast para emprendedores</p>
            <h1 className="hero-title">
              Despega tu PYME al<br />
              <span className="text-highlight">siguiente nivel</span>
            </h1>
            <p className="hero-subtitle">
              Tu guía en la galaxia empresarial. Episodios semanales con herramientas,
              estrategias y consejos reales para dueños de PYME y emprendedores.
            </p>
            <div className="hero-ctas">
              <a href="#ultimo-episodio" className="btn-hero-primary">
                Escuchar ahora <i className="fas fa-play ms-2"></i>
              </a>
              <a href="#newsletter" className="btn-hero-secondary">
                Suscribirme <i className="fas fa-envelope ms-2"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-5 hero-logo-col d-none d-lg-flex">
            <motion.img
              src="/Img/Logo-02.svg"
              alt="PymeNautas"
              className="hero-logo-img"
              initial={{ x: '-90vw', y: '85vh', rotate: 38, scale: 0.12, opacity: 0 }}
              animate={controls}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
