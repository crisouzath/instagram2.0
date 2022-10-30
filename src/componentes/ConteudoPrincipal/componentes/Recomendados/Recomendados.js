import './Recomendados.css';
import Account from './componentes/Account';
import { useEffect, useState } from 'react';


function Recomendados(props) {
    const [suggestions, setSuggestions] = useState([])

    const [limitUsers] = useState(5)

    const slice = suggestions.slice(0, limitUsers)

    useEffect(() => {
        fetch(`https://api.github.com/users/crisouzath/following`)
        .then((response) => {
            return response.json()
        })
        .then((result) => {
            setSuggestions(result)
        })

        .catch((err) => {
            throw new Error(err)
        })

    }, [])

    return (
        <div className='recomendados'>
            <Account src={props.src} size='61px' user={props.user} information={props.name} valueButton='Mudar' />
            <div className='suggestions'>
                <div>
                    <span>Sugestões para você</span>
                    <span>Ver todas</span>
                </div>
            </div>

            {slice.map((suggestion, index) => (
                     <Account key={index} src={`https://github.com/${suggestion.login}.png`} size='40px' user={suggestion.login} information={`Seguido por ${suggestion.login}`} valueButton='Seguir' />
                ))}

            <div className='footer'>
                <div className='links'>
                    <ul>
                        <li><a href='https://github.com/'>Sobre</a></li>
                        <li><a href='https://github.com/'>Ajuda</a></li>
                        <li><a href='https://github.com/'>Imprensa</a></li>
                        <li><a href='https://github.com/'>API</a></li>
                        <li><a href='https://github.com/'>Empregos</a></li>
                        <li><a href='https://github.com/'>Privacidade</a></li>
                        <li><a href='https://github.com/'>Termos</a></li>
                        <li><a href='https://github.com/'>Localização</a></li>
                        <li><a href='https://github.com/'>Idioma</a></li>
                    </ul>
                </div>
                <span>© 2022 INSTAGRAM 2.0 FROM KRIS</span>
            </div>

        </div>
    )
}

export default Recomendados;