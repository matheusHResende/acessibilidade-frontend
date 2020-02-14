import React, { useState, useEffect } from 'react';

import { Main, Header, Logo, Form, InputGroup, Error } from '../assets/css/EmailForm';
import ValidarEmail from '../assets/const/ValidarEmail.js';

const EmailForm = ({ saveUsuario, erro }) => {
    const [ usuario, setUsuario ] = useState('');
    const [ error, setError ] = useState('');

    useEffect(() => {
        setError(erro)
        document.getElementById('error').style.display = "block"
    }, [erro])

    function send(){
        if ( usuario === '' ) {
            setError('Por favor preencha o campo de usuario!')
            document.getElementById('error').style.display = "block"
            document.getElementById('usuario').focus()
        }else{
            if ( usuario.indexOf('@') !== -1 ){
                if(ValidarEmail(usuario) === false){
                    setError('Por favor preencha o campo de usuario corretamente!')
                    document.getElementById('error').style.display = "block"
                    document.getElementById('usuario').focus()
                }else{
                    setError('')
                    document.getElementById('error').style.display = "none"
                    saveUsuario(usuario)
                }
            }else{
                setError('')
                document.getElementById('error').style.display = "none"
                saveUsuario(usuario)
            }
        }
    }

    return (
        <Main>
            <Header>
                <Logo />
            </Header>

            <Form>
                <h1>
                    Esqueceu sua senha? Não tem problema! Insira seu email ou nome de usuário no campo abaixo para ajudarmos você a recuperá-la.
                </h1>

                <Error id="error">
                    { error }
                </Error>

                <InputGroup>
                    <label htmlFor="usuario">
                        Email / Usuário
                    </label>
                    
                    <input  
                        type="usuario"
                        name="usuario"
                        id="usuario"
                        onChange={e => setUsuario(e.target.value)}
                    />
                </InputGroup>
                <button
                    type="button"
                    id="sendCode"
                    onClick={send}
                >
                    Enviar
                </button>
            </Form>
        </Main>
    )
}

export default EmailForm;