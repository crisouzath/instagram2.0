import './Post.css';
import { HiOutlinePaperAirplane } from "react-icons/hi";
import { FaRegHeart, FaRegSmile, FaHeart } from "react-icons/fa";
import { RiBookmarkLine, RiBookmarkFill } from "react-icons/ri";
import { TbDots, TbMessageCircle2 } from "react-icons/tb";
import {useState} from 'react';
import EmojiBox from './EmojiBox/EmojiBox';

function Post(props) {
    const [coracao, curtir]=useState('black');
    const [bookmark, save]=useState('no-save');
    const [display, boxEmoji]=useState('emoji');

const [nameAnimation, onAnimation]=useState('');

const animationLike=()=>{
    onAnimation('likeAnimation 1s');
    curtir(false);
}

const addEmoji=(emoji)=>{
    document.getElementById('comentario').value+=emoji;
}



    return (
        <div className='post'>
            <div className='header'>
                <img alt='icon' src={props.icon}></img>
                <div className='titulos'>
                    <span><b>{props.user}</b></span>
                    <span>{props.local}</span>
                </div>
                <div className='more-option'>
                    <TbDots size={30} />
                </div>
            </div>
            <img onDoubleClick={()=>animationLike()} alt='post' src={props.src} width='100%' max-height='50%' />
            <FaHeart size={20} style={{position:'absolute', left:'50%', top:'35%', color:'white', opacity:'0', animation:`${nameAnimation}`}} />
            <div className='section'>
                <div className='icones-list'>
                    <div onClick={() => curtir(!coracao)}>{coracao ? <FaRegHeart size={25}/> : <FaHeart color='#ed4956' size={25}/>}</div>
                    <div><TbMessageCircle2 size={25} /></div>
                    <div><HiOutlinePaperAirplane size={25} /></div>
                    <div onClick={()=> save(!bookmark)}>{bookmark ? <RiBookmarkLine size={25} /> : <RiBookmarkFill size={25}/>}</div>
                </div>
                <div className='likes'>
                    <img alt='icon' src='https://i.pinimg.com/564x/b1/8d/ef/b18defd3415ac7478737054b68660df7.jpg'/>
                    <span>Likes: <b>{props.lastLike}</b> e <b>outras pessoas</b></span>
                </div>
                <span className='legenda'><b style={{cursor:'pointer'}}>{props.user}</b> {props.legend}
                </span>
                <div className='see-comments'>Ver todos os comentários</div>
                <span className='time'>HÁ {props.time}</span>

            </div>
            <form>
                <FaRegSmile size={25} onClick={()=> boxEmoji(!display)}/>
                <EmojiBox function={addEmoji}  display={display ? 'none' : 'grid'}/>
                <input onClick={()=> boxEmoji(true)} id='comentario' type='text' autoComplete="off" placeholder='Adicionar um comentário...'/>
                <button>Publicar</button>
            </form>
        </div>
    )
}

export default Post;