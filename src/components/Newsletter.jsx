export default function Newsletter() {
  return (
    <section id="newsletter">
      <div className="newsletter-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 text-center">
              <i className="fas fa-envelope-open-text newsletter-icon"></i>
              <h2 className="section-title">Recibí cada episodio antes que nadie</h2>
              <p className="newsletter-desc">
                Suscribite y recibí en tu correo: nuevos episodios, herramientas para emprendedores
                y recursos exclusivos para hacer crecer tu PYME.
              </p>

              <div id="mc_embed_signup">
                <form
                  action="https://creafinity.us14.list-manage.com/subscribe/post?u=0c9edbf68d52ecfef4dc92b79&amp;id=e64050d700&amp;f_id=00beb1e5f0"
                  method="post"
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  target="_blank"
                >
                  <div className="mc-field-group">
                    <label htmlFor="mce-EMAIL" className="visually-hidden">Email</label>
                    <input
                      type="email"
                      name="EMAIL"
                      className="required email"
                      id="mce-EMAIL"
                      required
                      placeholder="tucorreo@ejemplo.com"
                    />
                    <input
                      type="submit"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      className="button"
                      value="¡Despegar! 🚀"
                    />
                  </div>
                  <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                    <input type="text" name="b_0c9edbf68d52ecfef4dc92b79_e64050d700" tabIndex="-1" defaultValue="" />
                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
