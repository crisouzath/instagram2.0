import './ConteudoPrincipal.css';
import Feed from './componentes/Feed/Feed';
import Recomendados from './componentes/Recomendados/Recomendados';
import Kris from './componentes/Feed/img/kris.jpg';

function ConteudoPrincipal(){
    return(
        <div className='conteudoPrincipal'>
            <Feed/>
            <Recomendados src={Kris} user='crisouzath' name='Cristhian de Souza'/>
        </div>
    )
}

export default ConteudoPrincipal;