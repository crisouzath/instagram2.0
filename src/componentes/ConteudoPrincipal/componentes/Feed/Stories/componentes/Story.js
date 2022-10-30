import './Story.css';

function Story(props){
    return(
        <div className='container-story'>
            <div className={props.classe}>
                <img src={props.imagem} alt='Perfil' width='61px' height='61px'/>
            </div>
            <span>{props.user}</span>
        </div>
        
    )
}

export default Story;