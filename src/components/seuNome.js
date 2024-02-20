function seuNome({setNome}){

    return(

        <div>

            <label htmlfor="Nome">Digite o seu nome: </label>
            <input type="text" placeholder="Qual é o seu nome?" onChange={(e)=>setNome(e.target.value)}/>

        </div>

    )

}

export default seuNome