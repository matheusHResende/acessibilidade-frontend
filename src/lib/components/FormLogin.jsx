import React, {useState, useEffect} from 'react';

import { Main, Header, Logo, MainTitle, Form, InputGroup, Button, Error, ForgotPassword, NewAtPlatform } from '../assets/css/FormLogin'

import ValidarEmail from '../assets/const/ValidarEmail.js';
import RequestLogin from '../../requests/Login/RequestLogin.js';
import RedirecionarFeed from '../assets/const/RedirecionarFeed.js';

const FormLogin = ({ history }) => {
    document.title = "Login - IncluJobs"
    useEffect(() =>{document.getElementById('userName').focus();},[])

    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');

    async function handleSubmit(e){
        e.preventDefault();

        const name = usuario.toLowerCase().trim();

        let errorDiv = document.getElementById('alert');
        
        if(senha === '' && usuario === ''){
            errorDiv.style.display = "block";
            setError('Por favor preencha os campos de usuário e senha!')
            document.getElementById('userName').focus();
        }

        else if(usuario === ''){
            errorDiv.style.display = "block";
            setError('Por favor preencha o campo de usuário!')
            document.getElementById('userName').focus();
        }

        else if(senha === ''){
            errorDiv.style.display = "block";
            setError('Por favor preencha o campo de senha!')
            document.getElementById('senha').focus();
        }else{
            errorDiv.style.display = "none";
            setError(''); 
            const response = await RequestLogin({usuario:name, senha})
            
            if( response.status === 200 ){
                localStorage.setItem('key', response.data.token);
                localStorage.setItem('dados', JSON.stringify(response.data.user));
                RedirecionarFeed({ history, response });
                return true;
            }else{
                if(response === 'Usuario Não existe'){
                    errorDiv.style.display = "block";
                    setError('Usuário inválido ou inexistente!')
                    document.getElementById('userName').focus();
                }else{
                    errorDiv.style.display = "block";
                    setError('Senha inválida!')
                    document.getElementById('senha').focus();
                }
            }
        }
    }

    function conferirEmail(e){
        let errorDiv = document.getElementById('alert');
        setError('');
        errorDiv.style.display = "none";

        if(e.indexOf("@") !== -1){
            if(ValidarEmail(e) === false){
                errorDiv.style.display = "block";
                setError('Preencha seu email corretamente!')
                document.getElementById('userName').focus();
            }else{
                setError('');
                errorDiv.style.display = "none";
            }
        }
        
    }

    return(
        <Main>
            <Header>
                <Logo />

                <MainTitle>
                    Bem vindo!<br />
                    Entre e confira os profissionais e empresas que estão precisando de você.
                </MainTitle>
            </Header>
            
            <Form onSubmit={handleSubmit} >

                <Error id="alert">
                    { error }
                </Error>

                <InputGroup>
                    <label htmlFor="userName">
                        Usuário
                    </label>

                    <input 
                        type="text" 
                        name="userName" 
                        id="userName" 
                        value={usuario} 
                        onChange={e => setUsuario(e.target.value)} 
                        placeholder="Digite seu nome de usuário ou email"
                        onBlur={e => e.target.value === '' ? '' : conferirEmail(e.target.value)}
                    />
                </InputGroup>
                
                <InputGroup>
                    <label htmlFor="senha">
                        Senha
                    </label>

                    <input 
                        type="password" 
                        name="senha" 
                        id="senha" 
                        value={senha}
                        onChange={e => setSenha(e.target.value)} 
                        placeholder="Digite sua senha"
                    />
                </InputGroup>

                <Button type="submit">
                    Entrar
                </Button>

                <ForgotPassword href="/recuperarsenha">
                    Esqueceu a senha?
                </ForgotPassword>

                <NewAtPlatform>
                    Novo na plataforma? <a href="/cadastrar"> Cadastre-se </a>
                </NewAtPlatform>
            </Form>
        </Main>
    );
}

export default FormLogin;
