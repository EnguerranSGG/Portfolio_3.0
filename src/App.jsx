import { BrowserRouter } from "react-router-dom"
import { About, Experience, Hero, Navbar, Tech, Works, Passions, StarsCanvas, Footer } from "./components"
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center"></div>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Tech />
        <div className="relative z-0">
          <Works />
          <StarsCanvas />
        </div>
      </div>
      <Passions />
      <Footer />
    </BrowserRouter>
  )
}

export default App
