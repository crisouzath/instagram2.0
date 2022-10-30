import './More.css';
import { RiBookmarkLine, RiMoonLine, RiSettings5Line, RiAlertLine } from "react-icons/ri";

function More(props){

    return(
        <div style={{ display: props.display }} className='more-menu'>
            <div className='option'>
                <span>Configurações</span>
                <div>
                    <RiSettings5Line  size={25}/>
                </div>
            </div>
            <hr></hr>
            <div className='option'>
                <span>Salvos</span>
                <div>
                    <RiBookmarkLine size={25}/>
                </div>
            </div>
            <hr></hr>
            <div className='option' onClick={props.darkMode}>
                <span>Modo noturno/claro</span>
                <div>
                    <RiMoonLine size={25}/>
                </div>
            </div>
            <hr></hr>
            <div className='option'>
                <span>Suporte</span>
                <div>
                    <RiAlertLine size={25}/>
                </div>
            </div>
            <hr className='hr'></hr>
            <div className='option'>
                <span>Mudar de conta</span>
            </div> 
            <hr></hr>
            <div className='option'>
                <span>Sair</span>
            </div>
        </div>
    )
}

export default More;