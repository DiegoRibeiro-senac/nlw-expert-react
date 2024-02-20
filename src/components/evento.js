function Evento({numero}){

    function meuEvento(){

        console.log(`Você ativou o botão, evento numero: ${numero}`)
    }

    return(
        <div>

            <p>Click para disparar um evento</p>
            <button onClick={meuEvento}>Ativar</button>

        </div>


    )

}

export default Evento