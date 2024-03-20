import React, {useState, useEffect} from "react"
import Amazon from "./assets/amazon.png"
import Sirio from "./assets/siriolibanes.png"
import Vnw from "./assets/vnw.png"
import styled from "styled-components"
import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle `
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  
}
`
const Informacoes = styled.div`
border: solid red;
display: flex;
justify-content: space-around;
align-items: center;
height: 50vh;
img{
  }

`
const Patrocinadores = styled.div`
height: 50vh;
border: solid blue;
display: flex;
justify-content: space-evenly;
align-items: center;
`


function App (){
  const [logo, setLogo] = useState (Vnw)

  useEffect(() => {
    if (logo === Vnw) {
      document.querySelector("div").style.backgroundColor = "#F8BF15"
      document.querySelector("div").style.transition="ease-in-out 0.8s"

    } else if (logo === Amazon) {
      document.querySelector("div").style.backgroundColor = "#FF00FF"
      document.querySelector("div").style.transition="ease-in-out 0.8s"
      document.querySelector("div > h2").style.color="#FFFFFF"

    } else if (logo === Sirio) {
      document.querySelector("div").style.backgroundColor = "#00FF00"
      document.querySelector("div").style.transition="ease-in-out 0.8s"

   //NESSE CASO ELSE É OPCIONAL } else{
      document.querySelector("div").style.backgroundColor = "#FFFFFF"
    }

  })

  return (
<>

<section>
<GlobalStyle/>
<Informacoes>
  <img src={logo} alt="Logo VNW"/>
  <h2>PATROCINADORA OFICIAL DO CICLO 'TALENTOS DIGITAIS DA ESCOLA VAI NA WEB'
  </h2>
  </Informacoes>

  <Patrocinadores>
  <img onClick={() =>{setLogo(Amazon)}} src={Amazon} alt="Logo Amazon" />
    <img onClick={() => {setLogo(Vnw)}} src={Vnw} alt="Logo VNW" />
    <img onClick={() => {setLogo (Sirio)}} src={Sirio} alt="Logo Sírio Libanes" />
  </Patrocinadores>

</section>
</>
  )
}

export default App