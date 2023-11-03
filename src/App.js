import React, { Component } from 'react';
import Header from './Components/Header';
import About from './Components/About';
import Resume from './Components/Titulos';
import Portfolio from './Components/Portfolio';
import ContactUs from './Components/Contactos';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Resume />
        <Portfolio />
        <ContactUs />
        <Footer />
      </div>
    );
  }
}

export default App;