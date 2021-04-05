import Login from "./components/Login";

const PageLogin = () =>{
    return(
        <>

       <Login />
       <p>'Digite seu login'</p>
        

        <button>< a href='http://localhost:3000/cadastro'>  Cadastro  </a> </button>
    
        <button > <a href='http://localhost:3000/home'> Home</a> </button>
       </>
    )
}

export default PageLogin;