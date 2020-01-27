import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import '../lib/assets/css/FormLogin.css'
import arrowBack from '../lib/assets/images/arrowBack.svg';

const FormLogin = ({onSubmit}) => {
    document.title = "Login - IncluJobs"
    useEffect(() =>{document.querySelector('input[name="userName"]').focus();},[])

    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    async function handleSubmit(e){
        e.preventDefault();

        const name = usuario.toLowerCase().trim();

        let userAlert = document.querySelector('div.alertEmptyUser');
        let pswAlert =  document.querySelector('div.alertEmptyPassword');
        let bothAlert = document.querySelector('div.alertEmptyBoth');

        userAlert.style.display = "none";
        pswAlert.style.display = "none";
        bothAlert.style.display = "none";

        if(senha === '' && usuario === ''){
            bothAlert.style.display = "block";
            userAlert.style.display = "none";
            pswAlert.style.display = "none";
            document.querySelector('input[name="userName"]').focus();
        }
        else if(usuario === ''){
            userAlert.style.display = "block";
            bothAlert.style.display = "none";
            pswAlert.style.display = "none";
            document.querySelector('input[name="userName"]').focus();
        }
        else if(senha === ''){
            pswAlert.style.display = "block";
            userAlert.style.display = "none";
            bothAlert.style.display = "none";
            document.querySelector('input[name="senha"]').focus();
        }else{ onSubmit({usuario:name, senha});}
    }


    return(
        <>
        <div className="alertEmptyUser" id="alertEmptyUser">Usuário incorreto</div>
        <div className="alertEmptyPassword" id="alertEmptyPassword">Senha incorreta</div>
        <div className="alertEmptyBoth" id="alertEmptyBoth">Usuário/Senha incorretos</div>

        <form onSubmit={handleSubmit}>
            <h1 className="loginTitle">Login</h1>

            <label htmlFor="userName">Usuário</label>
            <input type="text" name="userName" id="userName" value={usuario} onChange={e => setUsuario(e.target.value)} placeholder="Digite seu nome de usuário ou email"/>
            
            <label htmlFor="senha">Senha</label>
            <input type="password" name="senha" id="senha" value={senha} onChange={e => setSenha(e.target.value)} placeholder="Digite sua senha"/>

            <button type="submit" className="loginButton">Logar</button>
            <p className="cadastroButton">Ainda não tem uma conta? <Link to="/cadastrar">Clique aqui!</Link></p>
        </form>
        <Link to="/" className="backButton"><img src={arrowBack} alt="Botão para voltar" tabIndex="0"/></Link>
        </>
    );
}

export default FormLogin;