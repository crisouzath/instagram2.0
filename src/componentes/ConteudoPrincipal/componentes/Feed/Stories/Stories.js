import './Stories.css';
import Story from './componentes/Story';
import HorizontalScroll from 'react-horizontal-scrolling';
import BancoPanIcon from '../img/banco_pan.png';
import GoogleIcon from '../img/google.jpg';
import MicrosoftIcon from '../img/microsoft.jpg';
import NasaIcon from '../img/nasa.jpg';
import OracleIcon from '../img/oracle.jpg';
import ProaIcon from '../img/proa.jpg';
import Dipper from '../img/dipper.png';
import Teemo from '../img/teemo.jpg';
import OneBitCode from '../img/onecode.jpg';
import DuolingoIcon from '../img/duolingo.jpg';
import Yeonjun from '../img/yeonjun.jpg';
import DoctorWhoIcon from '../img/doctorwho.jpg';

function Stories() {

    return (
        <HorizontalScroll className='stories'>
            <Story classe='friends' user='yawnzz' imagem={Yeonjun} />
            <Story classe='friends' user='_mason_' imagem={Dipper} />
            <Story classe='friends' user='teemo' imagem={Teemo} />
            <Story classe='story' user='instituto.proa' imagem={ProaIcon} />
            <Story classe='story' user='bancopan' imagem={BancoPanIcon} />
            <Story classe='story' user='oracledobrasil' imagem={OracleIcon} />
            <Story classe='story' user='nasa' imagem={NasaIcon} />
            <Story classe='visto' user='duolingo' imagem={DuolingoIcon} />
            <Story classe='visto' user='microsoftbr' imagem={MicrosoftIcon} />
            <Story classe='visto' user='onebitcode' imagem={OneBitCode} />
            <Story classe='visto' user='doctorwho_bbca' imagem={DoctorWhoIcon} />
            <Story classe='visto' user='googlebrasi' imagem={GoogleIcon} />
        </HorizontalScroll>
    )
}


export default Stories;