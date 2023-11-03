import React, { Component } from 'react';
export default  class Titulos extends Component {
  render() {
    const educacionInfo = [
      {
        NombreInstituto: "Ort Yatay (Almagro)",
        specializacion: "Secundario informatica",
        MesDeEgreso: "diciembre",
        Año: "2023",
        Logros: "Graduado con honores y mencion en UX-challenge",
      }
    ];
    
    // Experiencia laboral
    const experienciaDeTrabajo = [
      {
        enDonde: "Independiente",
        specializacion: "Codeanndo en mi tiempo libre",
        MesQueDeje: "Continuo",
        añoQueDeje: "...",
      },
      {
        enDonde: "Roma Produce",
        specializacion: "Ayudante informatico y administrativo",
        MesQueDeje: "octubre",
        añoQueDeje: "2023",
      
      },
    ];
    
    // Habilidades
    const skillsInfo = {
      Descripcion: "Conocimientos",
      skills: [
        {
          skill: "JS",
        },
        {
          skill: "HTML",
        },
        {
          skill: "CSS",
        },{
          skill: "Photoshop",
        },{
          skill: "Ilustrator",
        }]
    };
    return (
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Educacion</span></h1>
            </div>

            <div className="nine columns main-col">
              {
              educacionInfo.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.NombreInstituto}</h3>
                          <p className="info">
                          {item.specializacion}
                          <span>&bull;</span> <em className="date">{item.MesDeEgreso} {item.Año}</em></p>
                          <p>
                          {item.Logros}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Trabajo</span></h1>
            </div>

            <div className="nine columns main-col">
              {
              experienciaDeTrabajo.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.enDonde}</h3>
                          <p className="info">
                          {item.specializacion}
                          <span>&bull;</span> <em className="date">{item.MesQueDeje} {item.añoQueDeje}</em></p>
                          <p>
                          {item.Logros}
                          </p>
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>


         <div className="row skill">

            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>

            <div className="nine columns main-col">

               <p>
               {skillsInfo.Descripcion}
               </p>

   				<div className="bars">

   				   <ul className="skills">
                {
                  skillsInfo.skills.map((item) => {
                    return(
                      <li>
                      <span className={`bar-expand ${item.skill.toLowerCase()}`}>
                      </span><em>{item.skill}</em>
                      </li>
                    )
                  })
                }

   					</ul>

   				</div>

   			</div>

         </div>

      </section>
    );
  }
}