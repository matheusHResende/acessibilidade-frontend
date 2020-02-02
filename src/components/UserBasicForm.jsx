import React, { useState, useEffect } from "react";

import '../lib/assets/css/UserBasicForm.css'

const UserBasic = ({ onSubmit, user_type, voltarComponent }) => { 
    useEffect(() => document.querySelector('input[name="nome"]').focus(), [])
    
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

    const [ nome, setNome ] = useState('');
    const [ nome_de_usuario, setUsuario ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ senha, setSenha ] = useState('');
    const [ confirmar_senha, setConfirmarSenha ] = useState('');
    const [ erro, setErro ] = useState('');

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

    return(
        <main>
            <form>
                <h1>Informações básicas para login</h1>

                <span className="error" id="error">{erro}</span>

                <label htmlFor="nome">{ labelName } <sup>*</sup></label>
                <input type="text" name="nome" id="nome" value={ nome } onChange={e => setNome(e.target.value)} />

                <label htmlFor="usuario">Nome de Usuário <sup>*</sup></label>
                <input type="text" name="usuario" id="usuario" value={ nome_de_usuario } onChange={e => setUsuario(e.target.value)} />

                <label htmlFor="email">Email <sup>*</sup></label>
                <input type="email" name="email" id="email" onChange={e => setEmail(e.target.value)} />

                <div className="passwordGroup">
                    <div className="passwordGroupComponent">
                        <label htmlFor="senha">Senha <sup>*</sup></label>
                        <input type="password" name="senha" id="senha" value={ senha } onChange={e => setSenha(e.target.value)} />
                    </div>

                    <div className="passwordGroupComponent">
                        <label htmlFor="confirmar_senha">Confirmar Senha <sup>*</sup></label>
                        <input type="password" name="confirmar_senha" id="confirmar_senha" value={ confirmar_senha } onChange={e => setConfirmarSenha(e.target.value)} />
                    </div>
                </div>

                <div className="buttonGroup">
                    <button type="button" name="voltar" onClick={ voltarComponent }>Voltar</button>
                    <button type="submit" name="avançar" onClick={ registarDados }>Próximo</button>
                </div>
            </form>
        </main>
    )
}

export default UserBasic;
