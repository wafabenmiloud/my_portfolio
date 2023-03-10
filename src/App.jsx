import Header from './components/header/Header'
import Nav from './components/navbar/Nav'
import About from './components/about/About'
import Experience from './components/Experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
    <Header/>
    <Nav/>
        <Portfolio/>
        <Experience/>

    <About/>
    {/* <Services/> */}
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
