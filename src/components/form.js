import {useState} from 'react'

function Form(){
    
    

    
    const [name, setName] = useState()
    const [senha, setSenha] = useState()

    return(      

        <div>
            <h1> Meu cadastro</h1>
            <form onSubmit={(e)=>(e.preventDefault(), console.log(name), console.log(senha))}>
                <div>
                    <div>
                        <label htmlFor="nome">Nome:</label>
                        <input type ="text" placeholder="digite o seu nome aqui" onChange={(e)=> setName(e.target.value)}></input>
                    </div>
                    <div>
                        <label htmlFor="senha">senha:</label>
                        <input type ="text" placeholder="digite o sua senha aqui" onChange={(e)=> setSenha(e.target.value)}></input>
                    </div>
                    <div>
                        <input className="name" type="submit" name="name" value="Entrar"></input>
                    </div>
                </div>
            </form>
        </div>

    )

}

export default Form