# instagram 2.0
## Descrição
Projeto desenvolvido totalmente em React com o objetivo de replicar a interface do Instagram com o conteúdo dos posts focado no sonho do usuário que postou.

## Resultado Final
<img src='https://user-images.githubusercontent.com/111239606/198903327-45bc1caf-73fc-4f57-bb55-43d133d0a321.png'></img>

## Horizontal Scroll
Para criar o efeito de scroll nos stories foi utilizado o HorizontalScroll, componente fornecido pelo próprio React.<br><br>

`Instalando o react-horizontal-scrolling:`
```
npm install react-horizontal-scrolling
```

`Importando:`
```
 import HorizontalScroll from 'react-horizontal-scrolling';
```

`No código:`
```html
 return (
        <HorizontalScroll>
            <ComponenteExemplo/>
            <ComponenteExemplo/>
            <ComponenteExemplo/>
            <ComponenteExemplo/>
        </HorizontalScroll>
    )
```
<img src='https://user-images.githubusercontent.com/111239606/198903822-ab71562e-337b-499a-8638-d8c6b1f1571e.gif'></img>

## API Users do Github
A API do Github foi consumida para a criação da aba de Sugestões, fornecendo a imagem de perfil e o nome do usuário, junto ao UseEffect do React para buscar os dados.<br><br>

`Preparando o código:`
```
 const [suggestions, setSuggestions] = useState([]);

 const [limitUsers] = useState(5);

 const slice = suggestions.slice(0, limitUsers)
```

`API Github e UseEffect:`
```
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
```

`No código:`
```html
{slice.map((suggestion, index) => (
   <Account key={index} 
   src={`https://github.com/${suggestion.login}.png`} 
   user={suggestion.login}/>
))}
```
<div align=center>
<img src='https://user-images.githubusercontent.com/111239606/198905150-5acfb1de-1f54-4a4c-af7e-4c2634fd09a8.png'>
</div><br>

## Links
Link do projeto hospedado no Vercel e no LinkedIn:
<div style='display:inline_block'><br>
<a href='instagram-asuini02a-crisouzath.vercel.app'><img src='https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white'></a>
<a href=''><img src='https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white'></a>
</div><br>

## Tecnologias Utilizadas
<div style='display:inline_block'><br>
<img src='https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB'>
<img src='https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black'>
<img src='https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white'>
<img src='https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white'>
</div><br>

## Contatos
<div style='display:inline_block'><br>
<a href='https://www.linkedin.com/in/cristhian-de-souza/' target=_blank><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/></a>
<a href='https://github.com/crisouzath' target=_blank><img src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white'/></a>
</div><br>
