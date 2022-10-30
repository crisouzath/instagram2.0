import './Account.css';

function Account(props) {

    return (
        <div className='account'>
            <img alt='icon' src={props.src} width={props.size} height={props.size} />
            <div>
                <span><b>{props.user}</b></span>
                <span>{props.information}</span>
            </div>
            <button>{props.valueButton}</button>
        </div>
    )
}

export default Account;