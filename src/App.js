import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Sobre from './pages/Sobre'
import NovoProjeto from './pages/NovoProjeto'
import Projeto from './pages/Projeto'
import Contato from './pages/Contato'
import Project from './pages/Project'

import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'


function App() {
  return (
      <Router>        
        <Navbar />
        <Container customClass="min-height">
          <Routes>
              <Route path="/" element={<Home />}>Home</Route>
              <Route path="/sobre" element={<Sobre />}>Sobre nós!</Route>
              <Route path="/contato" element={<Contato />}>Contatos</Route>
              <Route path="/novoprojeto" element={<NovoProjeto />}>Novo Projeto</Route>
              <Route path="/projeto" element={<Projeto />}>Projeto</Route>
              <Route path="/project/:id" element={<Project />}>Project</Route>                
          </Routes>
        </Container>
        <Footer />
      </Router>
      
  );
}

export default App;
