import Login from "./components/Login";
import { Link } from 'react-router-dom';

const PageLogin = () =>{
    return(
        <>

       <Login />
       <p>'Digite seu login'</p>
        

       
       <Link to ='/cadastro'> <button> Cadastro  </button> </Link>
    
       <Link to ='/home'>  <button > Home </button> </Link>
       </>
    )
}

export default PageLogin;