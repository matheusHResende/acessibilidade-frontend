import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import '../lib/assets/css/FormLogin.css'
import arrowBack from '../lib/assets/images/arrowBack.svg';
import api from '../services/api.js';

const FormLogin = ({ history }) => {
    document.title = "Login - IncluJobs"
    useEffect(() =>{document.querySelector('input[name="userName"]').focus();},[])

    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');

    async function handleSubmit(e){
        e.preventDefault();

        const name = usuario.toLowerCase().trim();

        let errorDiv = document.querySelector('div.alert');
        
        if(senha === '' && usuario === ''){
            errorDiv.style.display = "block";
            setError('Por favor preencha os campos de usuário e senha!')
            document.querySelector('input[name="userName"]').focus();
        }

        else if(usuario === ''){
            errorDiv.style.display = "block";
            setError('Por favor preencha o campo de usuário!')
            document.querySelector('input[name="userName"]').focus();
        }

        else if(senha === ''){
            errorDiv.style.display = "block";
            setError('Por favor preencha o campo de senha!')
            document.querySelector('input[name="senha"]').focus();
        }else{ 
            errorDiv.style.display = "none";
            setError('');
            console.log(name)
            const response = await api.post('/sessions', {usuario:name, senha});

            if(!response.data.error){
                localStorage.setItem('key', response.data.token);
                localStorage.setItem('dados', JSON.stringify(response.data.user))
                history.push('/feed');
                return true;
            }else{
                let err = response.data.error

                if(err === "Senha Invalida"){
                    errorDiv.style.display = "block";
                    setError('Senha inválida!')
                    document.querySelector('input[name="senha"]').focus();
                }else{
                    errorDiv.style.display = "block";
                    setError('Usuário incorreto ou inexistente!')
                    document.querySelector('input[name="userName"]').focus();
                }
            }
        }
    }

    return(
        <>
            <form onSubmit={handleSubmit} >
                <h1 className="loginTitle">Login</h1>

                <div className="alert" id="alert">{error}</div>

                <label htmlFor="userName">Usuário</label>

                <input 
                    type="text" 
                    name="userName" 
                    id="userName" 
                    value={usuario} 
                    onChange={e => setUsuario(e.target.value)} 
                    placeholder="Digite seu nome de usuário ou email"
                />
                
                <label htmlFor="senha">Senha</label>

                <input 
                    type="password" 
                    name="senha" 
                    id="senha" 
                    value={senha} 
                    onChange={e => setSenha(e.target.value)} 
                    placeholder="Digite sua senha"
                />

                <button type="submit" className="loginButton">Entrar</button>

                <p className="cadastroButton">
                    Ainda não tem uma conta? <Link to="/cadastrar"> Clique aqui! </Link>
                </p>
            </form>

            <Link to="/" className="backButton">
                <img src={arrowBack} alt="Botão para voltar" tabIndex="0"/>
            </Link>
        </>
    );
}

export default FormLogin;
