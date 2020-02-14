import React, { useState, useEffect } from 'react';

import { Main, Form, Title, Header, Logo, Login, InputGroup, HeaderButtonGroup, Error, Button, BackButton } from '../assets/css/CadForms'

import ReturnCNPJ from '../assets/const/ReturnCNPJ';

const LoginInfos = ({ onSubmit, history, voltarComponent }) => {
    useEffect(() => document.querySelector('input[name="razao_social"]').focus(), [])

    const [ cnpj, setCnpj ] = useState('');
    const [ razao_social, setRazaoSocial ] = useState('');
    const [ telefone_fixo, setTelefoneFixo ] = useState(0);
    const [ telefone_celular, setTelefoneCelular ] = useState(0);
    const [ erro, setErro ] = useState('');

    const setDisplay = document.getElementById('error');

    function enviarDados(e){
        e.preventDefault();

         let usuario_empresa = {
             cnpj,
             razao_social,
             telefone_fixo,
             telefone_celular
         }

         if(usuario_empresa.cnpj === ''){
             setDisplay.style.display = "block"
             setErro('Por favor preencha seu CNPJ!');
             document.querySelector('input[name="cnpj"]').focus()
         }
         else if(usuario_empresa.cnpj.length < 14){
            setDisplay.style.display = "block"
            setErro('Por favor preencha seu CNPJ corretamente!');
            document.querySelector('input[name="cnpj"]').focus()
        }
         else if(usuario_empresa.razao_social === ''){
             setDisplay.style.display = "block"
             setErro('Por favor preencha sua razão social!');
             document.querySelector('input[name="razao_social"]').focus()
         }else{
            onSubmit(usuario_empresa)
         }
    }

    function conferirCnpj(cnpj){
        const reformedCNPJ = cnpj.replace('.','').replace('.','').replace('/','').replace('-','')
        setCnpj(ReturnCNPJ(reformedCNPJ))
    }

    useEffect(() => {
        const cnpj = document.getElementById('cnpj')
        cnpj.value.indexOf('.') >= 0 ? cnpj.maxLength = 18 : cnpj.maxLength = 14
    },[cnpj])

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
                Informações Básicas
            </Title>
            
            <Form onSubmit={enviarDados}>

                <Error id="error">
                    { erro }
                </Error>

                <InputGroup>
                    <label htmlFor="razao_social">
                        Razão Social <sup>*</sup>
                    </label>

                    <input 
                        type="text" 
                        name="razao_social" 
                        id="razao_social" 
                        value={razao_social} 
                        onChange={e => setRazaoSocial(e.target.value)} 
                    />
                </InputGroup>

                <InputGroup>
                    <label htmlFor="cnpj">
                        CNPJ <sup>*</sup>
                    </label>

                    <input 
                        type="text" 
                        name="cnpj" 
                        id="cnpj" 
                        value={cnpj}
                        onPaste={e => e.target.maxLength = 18}
                        onBlur={e => e.target.value === '' ? '' : conferirCnpj(e.target.value)}
                        onChange={e => setCnpj(e.target.value)} 
                    />
                </InputGroup>
                
                <InputGroup>
                    <label htmlFor="telefone_fixo">
                        Telefone Fixo
                    </label>

                    <input 
                        type="tel" 
                        name="telefone_fixo" 
                        id="telefone_fixo"
                        maxLength={11}
                        onChange={e => setTelefoneFixo(e.target.value)} 
                    />
                </InputGroup>

                <InputGroup>
                    <label htmlFor="telefone_celular">
                        Telefone Celular
                    </label>

                    <input 
                        type="tel" 
                        name="telefone_celular" 
                        id="telefone_celular"
                        maxLength={11}
                        onChange={e => setTelefoneCelular(e.target.value)} 
                    />
                </InputGroup>

                <Button 
                    type="submit" 
                    name="avançar"
                >
                        Próximo
                </Button>
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

export default LoginInfos;
