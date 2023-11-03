import React, { Component } from 'react';
export default class Header extends Component {
  render() {
   
    return (
      <React.Fragment>
      <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Rocco Ferrari</a></li>
               <li><a className="smoothscroll" href="#about">Sobre Mi</a></li>
             <li><a className="smoothscroll" href="#resume">Titulos</a></li>
               <li><a className="smoothscroll" href="#portfolio">Trabajos</a></li>
               <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">Hola, Soy Rocco.</h1>
               <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>Soy un Progamador Frontend y Backend
               </h3>
               <hr/>
               <ul className="social">
                 
                <li key="Linkedin">
                  <a href="https://www.linkedin.com/in/rocco-ferrari-701405250/" target="_blank"><i className="fa fa-linkedin"></i></a>
                </li>
                <li key="Github">
                  <a href="https://github.com/Ferrari1105" target="_blank"><i className="fa fa-github"></i></a>
                </li>
                <li key="Instagram">
                  <a href="https://www.instagram.com/rocco_1105_/?hl=es" target="_blank"><i className="fa fa-instagram"></i></a>
                </li>

                         
               </ul>
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      </React.Fragment>
    );
  }
}