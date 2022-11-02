import "./App.css";
import Bienvenida from "./componentes/cliente/inicio/bienvenidad";
import CallToAction from "./componentes/cliente/inicio/callToAction";
import Equipo from "./componentes/cliente/inicio/equipo";
import Footer from "./componentes/cliente/inicio/footer";
import Historia from "./componentes/cliente/inicio/historia"
import Navbar from "./componentes/cliente/inicio/navbar";
import "./index.css";



function App() {
  return (
    <>
      <Navbar></Navbar>
      <Bienvenida></Bienvenida>
      <Historia></Historia>
      <CallToAction></CallToAction>
      <Equipo></Equipo>
      <Footer></Footer>
    </>
  );
}

export default App;
