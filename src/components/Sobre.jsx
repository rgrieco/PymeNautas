import { motion } from 'framer-motion'

const pilares = [
  {
    icon: 'fas fa-chart-line',
    titulo: 'Estrategia',
    texto: 'Cómo planificar el crecimiento de tu PYME con claridad y sin perderte en el camino.',
  },
  {
    icon: 'fas fa-coins',
    titulo: 'Finanzas',
    texto: 'Gestión financiera práctica y real para dueños de negocio.',
  },
  {
    icon: 'fas fa-bullhorn',
    titulo: 'Marketing',
    texto: 'Cómo atraer clientes y hacer crecer tu marca sin grandes presupuestos.',
  },
  {
    icon: 'fas fa-users',
    titulo: 'Equipo',
    texto: 'Liderazgo y gestión de personas en pequeñas empresas que crecen.',
  },
]

export default function Sobre() {
  return (
    <section id="sobre">
      <div className="sobre-bg">
        <div className="container">
          <div className="section-header text-center mb-5">
            <h2 className="section-title">¿Qué es PymeNautas?</h2>
            <p className="section-subtitle">Un podcast hecho para quienes tienen el coraje de construir algo propio</p>
          </div>
          <div className="row align-items-center g-5">
            <div className="col-lg-5 text-center">
              <motion.img
                src="/Img/Logo-02.svg"
                alt="PymeNautas"
                className="sobre-logo"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
            <div className="col-lg-7">
              <p className="sobre-texto">
                PymeNautas nació para ser la guía que todo emprendedor necesita. Sin vueltas,
                sin tecnicismos innecesarios. Cada episodio es una herramienta concreta para
                que puedas llevar tu negocio al siguiente nivel.
              </p>
              <div className="pilares-grid">
                {pilares.map((p) => (
                  <div className="pilar" key={p.titulo}>
                    <div className="pilar-icon"><i className={p.icon}></i></div>
                    <h4>{p.titulo}</h4>
                    <p>{p.texto}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
