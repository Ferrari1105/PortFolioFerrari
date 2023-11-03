import React, { Component } from 'react';
export default class Footer extends Component {
  render() {

    return (
      <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
           Gracias por visitar mi portafolio, si te gusto y quieres contactarme puedes hacerlo a traves de mis redes sociales.
          </ul>
          
        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
      </div>
    </footer>
    );
  }
}