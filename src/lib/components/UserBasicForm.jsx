import React, { useState, useEffect } from "react";

import { Main, Form, Title, Header, Logo, Login, InputGroup, DuoInputGroup, HeaderButtonGroup, Error, Button, BackButton } from '../assets/css/CadForms';
import ValidarEmail from '../assets/const/ValidarEmail.js';

const UserBasic = ({ onSubmit, user_type, history, error, voltarComponent }) => { 
    useEffect(() => document.querySelector('input[name="nome"]').focus(), [])
    

    const [ nome, setNome ] = useState('');
    const [ nome_de_usuario, setUsuario ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ senha, setSenha ] = useState('');
    const [ confirmar_senha, setConfirmarSenha ] = useState('');
    const [ err, setErro ] = useState('');
    
    useEffect(() => {
        if ( error === "Usuario já existe!" ) {
            document.getElementById('error').style.display = "block";
            setErro(error);
            document.querySelector('input[name="usuario"]').focus()
        }else {
            if ( error === "Email em uso!" ) {
                document.getElementById('error').style.display = "block";
                setErro(error);
                document.querySelector('input[name="email"]').focus()
            }
        }
    }, [error])

    const userType = user_type;
    const [ labelName, setLabelName ] = useState('');
    const [ id_tipo_usuario, setTipoUsuario ] = useState(0);

    useEffect(() => {
        switch( userType ){
            case "empresa":
                setLabelName('Nome Fantasia')
                break;
            default:
                setLabelName('Nome Completo')
        };
    }, [ userType ])

    useEffect(() => {
        switch( user_type ){
            case "deficiente":
                setTipoUsuario(1);
                break;
            case "empresa":
                setTipoUsuario(2);
                break;
            case "freelancer":
                setTipoUsuario(3);
                break;
            default:
                setTipoUsuario(1)
        }
    },[ user_type ])

    function registarDados(e){
        e.preventDefault();

        let usuario = {
            nome,
            usuario: nome_de_usuario.toLowerCase(),
            email,
            senha,
            id_tipo_usuario
        }

        const setDisplay = document.getElementById('error');

        if (usuario.nome === '') {
            setDisplay.style.display = "block"
            setErro('Preencha com seu nome!');
            document.querySelector('input[name="nome"]').focus()
        }

        else if (usuario.usuario === '') {
            setDisplay.style.display = "block"
            setErro('Preencha com seu nome de usuário!');
            document.querySelector('input[name="usuario"]').focus()
        }

        else if (usuario.email === '') {
            setDisplay.style.display = "block"
            setErro('Preencha com seu email!');
            document.querySelector('input[name="email"]').focus()
        }

        else if (usuario.senha === ''){
            setDisplay.style.display = "block"
            setErro('Preencha sua senha!');
            document.querySelector('input[name="senha"]').focus()
        }

        else if (confirmar_senha === ''){
            setDisplay.style.display = "block"
            setErro('Por favor confirme sua senha!');
            document.querySelector('input[name="confirmar_senha"]').focus()
        }
    
        else if (usuario.senha !== confirmar_senha){
            setDisplay.style.display = "block"
            setErro('Senhas diferentes!');
            document.querySelector('input[name="senha"]').focus()
        }else{
            onSubmit(usuario)
        }
    };

    function conferirEmail(e){
        let setDisplay = document.getElementById('error');
        
        if(ValidarEmail(e) === false){
            setDisplay.style.display = "block";
            setErro('Preencha seu email corretamente!')
            document.querySelector('input[name="email"]').focus();
        }else{
            setErro('');
            setDisplay.style.display = "none";
        }
        
        
    }

    return(
        <Main>

            <Header>
                <Logo />

                <HeaderButtonGroup>
                    <Login onClick={() => history.push('/login')}>
                        Entrar
                    </Login>
                </HeaderButtonGroup>
            </Header>
                
            <Title>
                Informações básicas para login
            </Title>
            
            <Form>

                <Error id="error">
                    { err }
                </Error>

                <InputGroup>
                    <label htmlFor="nome">
                        { labelName } <sup>*</sup>
                    </label>

                    <input 
                        type="text" 
                        name="nome" 
                        id="nome" 
                        value={ nome } 
                        onChange={e => setNome(e.target.value)} 
                        placeholder={ labelName === 'Nome Completo' ? "Por favor digite seu nome completo" : "Por favor digite o nome fantasia de sua empresa"}
                    />
                </InputGroup>

                <InputGroup>
                    <label htmlFor="usuario">
                        Nome de Usuário <sup>*</sup>
                    </label>
                    
                    <input 
                        type="text" 
                        name="usuario" 
                        id="usuario" 
                        value={ nome_de_usuario } 
                        placeholder={ labelName === 'Nome Completo' ? "Por favor digite um novo nome de usuário" : "Por favor digite o novo nome de usuário para sua empresa"}
                        onChange={e => setUsuario(e.target.value)} 
                    />
                </InputGroup>

                <InputGroup>
                    <label htmlFor="email">
                        Email <sup>*</sup>
                    </label>
                    
                    <input 
                        type="email" 
                        name="email" 
                        id="email"
                        placeholder={ labelName === 'Nome Completo' ? "Por favor digite seu nome completo" : "Por favor digite o nome fantasia de sua empresa"}
                        onBlur={e => e.target.value === '' ? '' : conferirEmail(e.target.value)}
                        onChange={e => setEmail(e.target.value)}
                    />
                </InputGroup>

                <DuoInputGroup>
                    <InputGroup className="password">
                        <label htmlFor="senha">
                            Senha <sup>*</sup>
                        </label>
                        
                        <input 
                            type="password" 
                            name="senha" 
                            id="senha" 
                            value={ senha } 
                            onChange={e => setSenha(e.target.value)} 
                        />
                    </InputGroup>
                    
                    <InputGroup className="password">
                        <label htmlFor="confirmar_senha">
                            Confirmar Senha <sup>*</sup>
                        </label>
                        
                        <input 
                            type="password" 
                            name="confirmar_senha" 
                            id="confirmar_senha" 
                            value={ confirmar_senha } 
                            onChange={e => setConfirmarSenha(e.target.value)} 
                        />
                    </InputGroup>
                </DuoInputGroup>
                
                <Button type="submit" name="avançar" onClick={ registarDados }>Próximo</Button>
            </Form>

            <BackButton
                type="button"
                name="voltar"
                id="voltar"
                onClick={voltarComponent}
            >
                <i className="material-icons">
                    arrow_back
                </i>
            </BackButton>
        </Main>
    )
}

export default UserBasic;
