import { Link } from "react-router-dom";
import { Button } from "../components";
import { H2 } from "../components/styles";

const Login = () =>{
  return (<>
     
    <h1>Cadastro</h1>
    <form>
        <H2>Nome:<input placeholder="nome"></input>
        </H2>
        <H2>Senha:<input placeholder="Senha"></input>
        </H2>
    </form>
    <Link to='/'>
     <Button title="Voltar">
    </Button>
    </Link>
   </>
  );
}

export { Login };