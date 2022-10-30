import './Posts.css';
import Post from './componentes/Post'
import Kris from '../img/kris.jpg';
import Post1 from '../img/littles.jpg';
import Polar from '../img/polar.jpg';
import Post2 from '../img/brothers.jpg';
import Felps from '../img/felps.jpg';
import Post3 from '../img/space.jpg';
import Nasa from '../img/nasa.jpg';
import Post4 from '../img/aliencon.jpg';
import Katniss from '../img/katniss.jpg';
import Post5 from '../img/familia.jpg';
import Post6 from '../img/bests.jpg';

function Posts(){
    return(
        <div className='posts'>
            <Post user='crisouzath' lastLike='mirellinha' time='3 HORAS' legend='The Little EighTEEN - Fundadores da maior startup brasileira' src={Post1} icon={Kris}/>
            <Post user='crisouzath' lastLike='mirellinha' time='3 HORAS' legend='❤️❤️❤️' src={Post6} icon={Kris}/>
            <Post user='polar' lastLike='panda' time='3 HORAS' legend='...' src={Post2} icon={Polar} />
            <Post user='zagetthi' lastLike='carolinga' time='3 HORAS' legend="'-'" src={Post3} icon={Felps} />
            <Post user='nasa' lastLike='kira' time='3 HORAS' legend='Finalmente encontramos vida extraterrestre' src={Post4} icon={Nasa} />
            <Post user='everdeen' lastLike='kira' time='3 HORAS' legend='Rye e Willow Mellark' src={Post5} icon={Katniss} />
        </div>
    )
}

export default Posts;