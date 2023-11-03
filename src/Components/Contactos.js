import React, { Component } from 'react';
export default class Contactos extends Component {
  render() {

    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Sientanse libres de contactarme para cualquier consulta o propuesta de trabajo.
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>Email: Roccoferrari5@gmail.com
                </h4>
              </div>
              <div className="widget">
                <h4>Numero de trabajo: +54 9 11 3278-1348
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}