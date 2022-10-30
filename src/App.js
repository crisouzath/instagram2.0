import './App.css';
import Sidebar from './componentes/Sidebar/Sidebar';
import ConteudoPrincipal from './componentes/ConteudoPrincipal/ConteudoPrincipal';
import logoInstagram from './imagens/Instagram_logo.svg.png';
import { useState } from 'react';

function App() {

  const[tema, setTema]=useState(true);

  const mudarTema=()=>{
    setTema(!tema);
  }


  return (
    <div className={tema ? "light": 'dark'}>
      {/* <div style={{width:'80px', height:'80px', backgroundColor:'red'}} onClick={()=>mudarTema()}></div> */}
      <Sidebar darkMode={mudarTema} logo={logoInstagram}/>
      <ConteudoPrincipal/>
    </div>
  );
}

export default App;
