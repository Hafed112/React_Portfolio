import './app.scss';
import Contact from './components/contact/Contact';
import Me from './components/me/Me';
import Navbar from './components/navbar/Navbar';
import Parallax from './components/parallax/Parallax';
import Services from './components/services/Services';
import Works from './components/works/Works';

const App = () => {
  return <div>
    <section>
      <Navbar/>
      <Me/>
    </section>  
    <section>
      <Parallax type="services"/>
    </section>  
    <section style={{ "height":"100vh"}} id="services">
      <Services/> 
    </section>  
    <section>
      <Parallax type="project"/>
    </section>  
    <Works/>  
    <section id='Contact' style={{ "height":"115vh"}}><Contact/></section>  

  </div>;
};




export default App;
