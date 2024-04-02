import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'
import Container from './components/layout/Container'
import Projects from './components/pages/Projects'
import Project from './components/pages/Project'
import Footer from './components/layout/Footer'



function App() {
  return (

    <Router>
      <Navbar></Navbar>
      <Container customClass="min_height">
        <Routes>

          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/projects' element={<Projects></Projects>}></Route>
          <Route path='/company' element={<Company></Company>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/newproject' element={<NewProject></NewProject>}></Route>
          <Route path='/project/:id' element={<Project></Project>}></Route>

        </Routes>
      </Container>
      <Footer/>
    </Router>


  );
}

export default App;
