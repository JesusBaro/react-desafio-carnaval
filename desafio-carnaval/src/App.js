import bruxa from "./img/bruxa.png"
import fada from "./img/fada.png"
import fantasma from "./img/fantasma.png"
import pirata from "./img/pirata.png"
import vamp from "./img/vamp.png"
import zumbi from "./img/zumbi.png"
import "./files/style.css"
import React, { Component } from 'react';
class CarnavalPage extends Component {
  state = {
    imagensDaBody: [
      {
        imagem: `${bruxa}`,
        titulo: "Bruxa"
      },
      {
        imagem: `${fada}`,
        titulo: "Fada"
      },
      {
        imagem: `${fantasma}`,
        titulo: "Fantasma"
      },
      {
        imagem: `${vamp}`,
        titulo: "Vampiro"
      },
      {
        imagem: `${zumbi}`,
        titulo: "Zumbi"
      },
      {
        imagem: `${pirata}`,
        titulo: "Pirata"
      }]}
  render() {
    return (

//------------
// Porque essa tag aqui ela não renderiza em cima da <body>, porém embaixo sim ?
{/* <div class="header">
<h1>Carnaval Vai na Web</h1>
</div>, */},
//------------

      <body>
        <div class="header">
          <h1>Carnaval Vai na Web</h1>
        </div>
        <section class="Content">
          <div class="CostumeBox">
            <img class="ImagensDaBody" 
            src={this.state.imagensDaBody[0].imagem} 
            alt={this.state.imagensDaBody[0].titulo} />
            <h3>{this.state.imagensDaBody[0].titulo}</h3>
          </div>
          <div class="CostumeBox">
            <img class="ImagensDaBody"
             src={this.state.imagensDaBody[1].imagem}
              alt={this.state.imagensDaBody[1].titulo} />
            <h3>{this.state.imagensDaBody[1].titulo}</h3>
          </div>
          <div class="CostumeBox">
            <img class="ImagensDaBody" 
            src={this.state.imagensDaBody[2].imagem} 
            alt={this.state.imagensDaBody[2].titulo} />
            <h3>{this.state.imagensDaBody[2].titulo}</h3>
          </div>
        </section>

        <section class="Content">
          <div class="CostumeBox">
            <img class="ImagensDaBody" 
            src={this.state.imagensDaBody[3].imagem} 
            alt={this.state.imagensDaBody[3].titulo} />
            <h3>{this.state.imagensDaBody[3].titulo}</h3>
          </div>
          <div class="CostumeBox">
            <img class="ImagensDaBody" 
            src={this.state.imagensDaBody[4].imagem} 
            alt={this.state.imagensDaBody[4].titulo} />
            <h3>{this.state.imagensDaBody[4].titulo}</h3>
          </div>
          <div class="CostumeBox">
            <img class="ImagensDaBody"
             src={this.state.imagensDaBody[5].imagem} 
             alt={this.state.imagensDaBody[5].titulo} />
            <h3>{this.state.imagensDaBody[5].titulo}</h3>
          </div>
        </section>,

        {/* Aqui ela renderiza */}
        {/* <div class="header">
  <h1>Carnaval Vai na Web</h1>
 </div>, */}

        <footer class="footer">
          {this.state.imagensDaBody.map((item) => (
            <div class="CostumeBoxFooter">
              <img id="ImagensDaFooter" 
              src={item.imagem} 
              alt={item.titulo} />
            </div>
          ))}
        </footer>
      </body>)}}
export default CarnavalPage
