import './Item.css';


function Item(props) {
    return (
        <div className='item'>
            <span className='icon'>{props.icon}</span>
            <span className={props.classe}>{props.nome}</span>
        </div>
    )

}

export default Item;