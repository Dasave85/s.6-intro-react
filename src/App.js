
import { useState } from 'react'
import { historias } from './assets/historias'
import { Escena } from './components/escena/Escena'
import { Intro } from './components/escena/Intro'
import { Buttonstyled } from './components/styledComponents/But'
import { IntroDiv } from './components/styledComponents/IntroDiv'
import { EscenaDiv } from './components/styledComponents/EscenaDiv'

export const App = () => {

  const [counter, setCounter] = useState(1)

  const add = () => {
    if (counter === 4) return;
    setCounter(counter + 1);
  }

  const substract = () => {
    if (counter === 1) return;
    setCounter(counter - 1);
  }

  const [condition, setCondition] = useState(true);

  const changeCondition = () =>{
    setCondition(false)
  } 

  return (

    condition ? 
    <IntroDiv>
    <Intro/>
    <button onClick={changeCondition}>Inicio</button>

    </IntroDiv>
    :
    <EscenaDiv counter={counter} img={historias}>
    <Buttonstyled onClick={substract}>Anterior</Buttonstyled>
    <Buttonstyled onClick={add}>Siguiente</Buttonstyled>
    
    <Escena num={1} counter={counter} text={historias[0].txt}/>
    <Escena num={2} counter={counter} text={historias[1].txt}/>
    <Escena num={3} counter={counter} text={historias[2].txt}/>
    <Escena num={4} counter={counter} text={historias[3].txt}/>
    
    </EscenaDiv>
    )
}
