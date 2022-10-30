import './Sidebar.css';
import Item from './componentes/Item/Item';
import More from './componentes/More/More';
import { HiOutlinePaperAirplane, HiOutlineHeart, HiHome } from "react-icons/hi";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { RiCompass3Line } from "react-icons/ri";
import { FaSistrix } from "react-icons/fa";
import { TbMenu2 } from "react-icons/tb";
import { useState } from 'react';
import  Kris from '../ConteudoPrincipal/componentes/Feed/img/kris.jpg';

function Sidebar(props) {
    const [display, moreBox]=useState('more');
    

    return (
        
        <div className="sidebar">
            <img src={props.logo} alt='Logo do Instagram' width='60%' height='6%'/>
            <div className='itens-list'>
                <Item icon={<HiHome size={25} />} nome="Página Inicial" classe='selected'/>
                <Item icon={<FaSistrix size={25} />} nome="Pesquisar" />
                <Item icon={<RiCompass3Line size={25} />} nome="Explorar" />
                <Item icon={<HiOutlinePaperAirplane size={25} />} nome="Mensagens" />
                <Item icon={<HiOutlineHeart size={25} />} nome="Notificações" />
                <Item icon={<AiOutlinePlusSquare size={25} />} nome="Criar" />
                <Item icon={<img alt='icon' src={Kris} height='24px' width='24px' style={{borderRadius:'50%', margin:'0px'}}/>} nome="Perfil" />
            </div>
            <div style={{ width: '100%', height: '20%', display: 'flex', alignItems: 'flex-end' }}>
                <More darkMode={props.darkMode} display={display?'none':'block'}/>
                <div style={{width:'100%', marginBottom:'10px'}} onClick={()=>moreBox(!display)}>
                    <Item icon={<TbMenu2 size={25} />}  nome="Mais" onClick={()=>alert("ROI")} />
                </div>
                

            </div>

        </div>
    )
}

export default Sidebar;