//cada parte é um componente
import bruxa from"./img/bruxa.png"
import fada from "./img/fada.png"
import"./files/style.css"



import React, {Component} from 'react'

  class CarnavalPage extends Component{

    render(){
return(
 
  
<body>

        <div class="header">
        <h1>Carnaval Vai na Web</h1>
        </div>,

        <section class="Content">
        <div class="CostumeBox">`${bruxa}`</div>
        <div class="CostumeBox">${fada}`</div>
        <div class="CostumeBox">img</div>
        </section>
        <section class="Content">
        <div class="CostumeBox">img</div>
        <div class="CostumeBox">img</div>
        <div class="CostumeBox">img</div>
        </section>,



        <footer class="footer">
        <div class="CostumeBoxFooter"></div>
        <div class="CostumeBoxFooter"></div>
        <div class="CostumeBoxFooter"></div>
        <div class="CostumeBoxFooter"></div>
        <div class="CostumeBoxFooter"></div>
        <div class="CostumeBoxFooter"></div>
        <div class="CostumeBoxFooter"></div>
       </footer>
</body>
  
      )
    }
  }
  
export default CarnavalPage
