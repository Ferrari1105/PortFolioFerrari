import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    const portfolioInfo = [
      {
        name: "Proyecto Final",
        description: "CourseScope",
        imgurl: "images/Logo.png",
      },
      {
        name: "Tp",
        description: "Pagina Web",
        imgurl: "images/TP.jpg",
      }
    ];
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Estos son algunos de mis trabajos</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            portfolioInfo.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01">
                      <img src={`${item.imgurl}`} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}