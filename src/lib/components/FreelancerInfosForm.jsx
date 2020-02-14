import React, { useState, useEffect } from 'react';

import { Main, Form, Title, Header, Logo, Login, InputGroup, DuoInputGroup, HeaderButtonGroup, Error, Button, BackButton } from '../assets/css/CadForms';
import ReturnCPF from '../assets/const/ReturnCPF';

const LoginInfos = ({ onSubmit, voltarComponent, history }) => {
    useEffect(() => document.querySelector('input[name="dt_nascimento"]').focus(), [])

    const [ cpf, setCpf ] = useState('');
    const [ dt_nascimento, setData ] = useState('');
    const [ especialidade, setEspecialidade ] = useState('');
    const [ telefone_fixo, setTelefoneFixo ] = useState(0);
    const [ telefone_celular, setTelefoneCelular ] = useState(0);
    const [ erro, setErro ] = useState('');


    const setDisplay = document.getElementById('error');

    function enviarDados(e){
        e.preventDefault();

         let usuario_freelancer = {
            cpf,
            telefone_fixo,
            telefone_celular,
            dt_nascimento,
            especialidade
         }

         if(usuario_freelancer.cpf === ''){
             setDisplay.style.display = "block"
             setErro('Por favor preencha seu CPF!');
             document.querySelector('input[name="cpf"]').focus()
         }
         else if(usuario_freelancer.dt_nascimento === ''){
             setDisplay.style.display = "block"
             setErro('Por favor preencha sua data de nascimento!');
             document.querySelector('input[name="dt_nascimento"]').focus()
         }
         else if(usuario_freelancer.especialidade === ''){
            setDisplay.style.display = "block"
            setErro('Por favor preencha sua data de nascimento!');
            document.querySelector('input[name="dt_nascimento"]').focus()
        }else{
            onSubmit(usuario_freelancer)
         }
    }

    function conferirCpf(cpf){
        const reformedCPF = cpf.replace('.','').replace('.','').replace('.','').replace('/','').replace('-','').trim()
        setCpf(ReturnCPF(reformedCPF))
    }

    useEffect(() => {
        const cpf = document.getElementById('cpf')
        cpf.value.indexOf('.') >= 0 ? cpf.maxLength = 14 : cpf.maxLength = 11
    },[cpf])

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
                Informações pessoais
            </Title>
            
            <Form onSubmit={enviarDados}>

                <Error id="error">
                    { erro }
                </Error>

                <DuoInputGroup>
                    <InputGroup>
                        <label htmlFor="dt_nascimento">
                            Data de Nascimento <sup>*</sup>
                        </label>
                    
                        <input 
                            type="date" 
                            name="dt_nascimento" 
                            id="dt_nascimento" 
                            value={dt_nascimento} 
                            onChange={e => setData(e.target.value)} 
                        />
                    </InputGroup>    

                    <InputGroup>
                        <label htmlFor="cpf">
                            CPF <sup>*</sup>
                        </label>
                        <input 
                            type="text" 
                            name="cpf" 
                            id="cpf" 
                            value={cpf}
                            onPaste={e => e.target.maxLength = 14} 
                            onChange={e => setCpf(e.target.value)} 
                            onBlur={e => e.target.value === '' ? '' : conferirCpf(e.target.value)}
                        />
                    </InputGroup>
                </DuoInputGroup>

                <InputGroup>
                    <label htmlFor="especialidade">
                        Especialidades
                    </label>

                    <input 
                        type="text"
                        name="especialidade"
                        id="especialidade"
                        value={especialidade}
                        onChange={ e => setEspecialidade(e.target.value)}
                    />
                </InputGroup>

                <DuoInputGroup>
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
                        <label htmlFor="telefone_celular" >
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
                </DuoInputGroup>
                    
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
