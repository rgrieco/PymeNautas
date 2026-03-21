import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Plataformas from './components/Plataformas'
import UltimoEpisodio from './components/UltimoEpisodio'
import Sobre from './components/Sobre'
import Episodios from './components/Episodios'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  return (
    <div id="wrap">
      <Navbar />
      <Hero />
      <Plataformas />
      <UltimoEpisodio />
      <Sobre />
      <Episodios />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App
