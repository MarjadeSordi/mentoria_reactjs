import React from 'react';
import { useSelector, useDispatch} from 'react-redux';

export default function Login() {

    const atividadeusuario = useSelector( state => state.usuario)
    const dispach = useDispatch();

    const atividadesenha = useSelector (state => state.senha)
    const dispachsenha = useDispatch();

    function checkLogin(){
        dispach({ type: 'FAZER_LOGIN', logar: 'Você está logado'})
    }

    function checkSenha() {
        dispachsenha({ type: 'FAZER_LOGIN', senha: 'Você digitou a senha corretamente'})
    }

    return(

<div>


       {atividadeusuario.map( user => <label> {user} </label>)}
 
       <button type='button' onClick={checkLogin}> ENTRAR </button>



       {atividadesenha.map( senha => <label> {senha} </label>)}
    
       <button type='button' onClick={checkSenha}>


        ENTRAR </button>



    <div>
        <label for="username"> Username: </label>
        <input type="text" id="username" name="username"></input>
    </div>

    <div>
    <label for="pass"> Senha (mínimo de 8 letras ou números):</label>
    <input type="password" id="pass" name="password" minlength="8" required></input>

    <input type="submit" value="Sign in"></input>

    </div>
     



</div>

    );
}

