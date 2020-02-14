import React, { useState } from 'react';

import { Main, Header, Logo, Form, InputGroup, Error } from '../assets/css/NovaSenhaForm';
import RequestTrocarSenha from '../../requests/RequestTrocarSenha';

const NovaSenhaForm = () => {
    const [ token, setToken ] = useState('');
    const [ senha, setSenha ] = useState('');
    const [ conferirSenha, setConferirSenha ] = useState('');
    const [ error, setError ] = useState('');

    async function send(){
        if ( token === ''){
            setError('Por favor insira o token enviado para seu email!');
            document.getElementById('error').style.display = "block";
            document.getElementById('token').focus();
        }
        else if ( senha === '' ){
            setError('Por favor digite sua nova senha!');
            document.getElementById('error').style.display = "block";
            document.getElementById('senha').focus();
        }
        else if ( conferirSenha === '' ){
            setError('Por favor digite sua senha novamente!');
            document.getElementById('error').style.display = "block";
            document.getElementById('conferirSenha').focus();
        }
        else if ( senha !== conferirSenha ){
            setError('Senhas diferentes!');
            document.getElementById('error').style.display = "block";
            document.getElementById('senha').focus();
        }else{
            const res = await RequestTrocarSenha({token, senha});
            if ( res.status !== 201 ){
                setError( res.data.error )
                document.getElementById('error').style.display = "block";
                document.getElementById('token').focus();
            }
        }
    }
    return(
        <Main>
            <Header>
                <Logo />
            </Header>

            <Form>
                <h1>
                    Por favor insira o token enviado para o seu email no campo a baixo,<br /> e digite sua nova senha!
                </h1>

                <Error id="error">
                    { error }
                </Error>

                <InputGroup>
                    <label htmlFor="token">
                        Token
                    </label>
                    
                    <input  
                        type="text"
                        name="token"
                        id="token"
                        onChange={e => setToken(e.target.value)}
                    />
                </InputGroup>

                <InputGroup>
                    <label htmlFor="senha">
                        Nova Senha
                    </label>
                    
                    <input  
                        type="password"
                        name="senha"
                        id="senha"
                        onChange={e => setSenha(e.target.value)}
                    />
                </InputGroup>

                <InputGroup>
                    <label htmlFor="conferirSenha">
                        Confirmar Nova Senha
                    </label>
                    
                    <input  
                        type="password"
                        name="conferirSenha"
                        id="conferirSenha"
                        onChange={e => setConferirSenha(e.target.value)}
                    />
                </InputGroup>

                <button
                    type="button"
                    id="sendCode"
                    onClick={send}
                >
                    Alterar Senha
                </button>
            </Form>
        </Main>
    )
};

export default NovaSenhaForm;