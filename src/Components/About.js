import React, { Component } from 'react';
export default class About extends Component {
  render() {

    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="foto-perfil"  src="images/FotoPerfil.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>Mas info sobre mi</h2>
               <p>
                  Soy un estudiante de Ort Infomatica, me definiria como un Programador junior con conocimientos basicos de muchos lengujes
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}