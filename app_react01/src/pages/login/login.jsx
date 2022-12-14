import { Link } from "react-router-dom";

const Login = () =>{
  return (<>
     
    <h1>Cadastro</h1>
    <form>
        <h2>Nome:<input placeholder="nome"></input>
        </h2>
        <h2>Senha:<input placeholder="nome"></input>
        </h2>
    </form>
    <button><Link to="/">Voltar para</Link></button>
   
  
    </>
  );
}

export { Login };