import Item from './item'

function List(){

    return(
        <>
         <h1>Minha Lista</h1>
            <ul>
            <Item marca="Ferrari" modelo="Super Sport" cor="Vermelho"/>
            <Item marca="Fiat" modelo="Hatch" cor="Prata"/>
            </ul>
        </>

    )
}

export default List