import { Link } from "react-router-dom";
import { Button } from "../components";
import { AiFillHome } from "react-icons/ai";
const Home = () =>{
  return (<>
    <h1>Home  <AiFillHome /></h1>
    <Link to='/login'>
        <Button title="Fazer login" >
          
        </Button>   

     </Link>
    
  
</>
  );
}

export { Home }