import './BtnEmoji.css';

function BtnEmoji(props){
    return(
        <div className='btn-emoji' onClick={()=>props.function(props.emoji)}>{props.emoji}</div>
    )
    
}

export default BtnEmoji;