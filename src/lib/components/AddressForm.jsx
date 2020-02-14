import React, { useState, useEffect } from 'react';

import { Main, Form, Title, Header, Logo, Login, InputGroup, DuoInputGroup, HeaderButtonGroup, Error, Button, BackButton } from '../assets/css/CadForms';

import RequestEndereco from '../../requests/RequestEndereco/RequestEndereco';
import ReturnCEP from '../assets/const/ReturnCEP';

const LoginInfos = ({ onSubmit, voltarComponent, history }) => {
    useEffect(() => document.querySelector('input[name="cep"]').focus(), []);

    const [ pais, setPais ] = useState('');
    const [ estado, setEstado ] = useState('');
    const [ cidade, setCidade ] = useState('');
    const [ bairro, setBairro ] = useState('');
    const [ cep, setCep ] = useState(0);
    const [ cepMask, setCepMask ] = useState('');
    const [ logradouro, setLogradouro ] = useState('');
    const [ numero, setNumero ] = useState(0)
    const [ complemento, setComplemento ] = useState('');

    const [ erro, setErro ] = useState('');

    const setDisplay = document.getElementById('error');

    function enviarDados(e){
        e.preventDefault();

        let endereco = {
            pais,
            estado,
            cidade,
            bairro,
            cep,
            logradouro,
            numero,
            complemento
        }

        if(endereco.pais === ''){
            setDisplay.style.display = "block";
            setErro('Por favor seleciona seu país!');
            document.querySelector('input[name="pais"]').focus();
        }
        else if(endereco.estado === ''){
            setDisplay.style.display = "block";
            setErro('Por favor preencha seu estado!');
            document.querySelector('input[name="estado"]').focus();
        }
        else if(endereco.cidade === ''){
           setDisplay.style.display = "block";
           setErro('Por favor preencha sua cidade!');
           document.querySelector('input[name="cidade"]').focus();
        }else{
            onSubmit(endereco)
        }
    }

    async function cepReturn(c){
        const reformedCEP = c.replace('-', '');
        const response = await RequestEndereco(reformedCEP);

        if(response.data.erro){
            setBairro('');
            setEstado('');
            setPais('');
            setCidade('')
            setLogradouro('')
        }else{
            setBairro(response.data.bairro);
            setEstado(response.data.uf);
            setPais('Brasil');
            setCidade(response.data.localidade)
            setLogradouro(response.data.logradouro)
            const maskedCEP = ReturnCEP(reformedCEP)
            setCep(maskedCEP.cep)
            setCepMask(maskedCEP.mask)
        }        
    }

    useEffect(() => {
        const cep = document.getElementById('cep');

        cep.value.indexOf('-') >= 0 ? cep.maxLength = 9 : cep.maxLength = 8
    }, [cepMask])

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
                        <label htmlFor="cep">
                            CEP
                        </label>
                    
                        <input 
                            type="text" 
                            name="cep" 
                            id="cep" 
                            value={cepMask}
                            maxLength={9}
                            onPaste={e => e.target.maxLength = 9}
                            onChange={e => setCepMask(e.target.value)} 
                            onBlur={e => e.target.value === '' ? '' : cepReturn(e.target.value)}
                        />
                    </InputGroup>

                    <InputGroup>
                        <label htmlFor="pais">
                            País <sup>*</sup>
                        </label>
                        
                        <input 
                            type="text" 
                            name="pais" 
                            id="pais" 
                            value={pais} 
                            onChange={e => setPais(e.target.value)} 
                        />
                    </InputGroup>
                </DuoInputGroup>

                <DuoInputGroup>
                    <InputGroup>
                        <label htmlFor="estado">
                            Estado <sup>*</sup>
                        </label>
                        
                        <input 
                            type="text" 
                            name="estado" 
                            id="estado" 
                            value={estado} 
                            onChange={e => setEstado(e.target.value)} 
                        />
                    </InputGroup>

                    <InputGroup>
                        <label htmlFor="cidade">
                            Cidade <sup>*</sup>
                        </label>
                        
                        <input 
                            type="text" 
                            name="cidade" 
                            id="cidade" 
                            value={cidade} 
                            onChange={e => setCidade(e.target.value)} 
                        />
                    </InputGroup>
                </DuoInputGroup>
                
                <DuoInputGroup>
                    <InputGroup>
                        <label htmlFor="bairro">
                            Bairro
                        </label>
                        
                        <input 
                            type="text" 
                            name="bairro" 
                            id="bairro" 
                            value={bairro} 
                            onChange={e => setBairro(e.target.value)} 
                        />
                    </InputGroup>

                    <InputGroup>
                        <label htmlFor="logradouro">
                            Logradouro
                        </label>
                        
                        <input 
                            type="text" 
                            name="logradouro" 
                            id="logradouro" 
                            value={logradouro} 
                            onChange={e => setLogradouro(e.target.value)} 
                        />
                    </InputGroup>
                </DuoInputGroup>

                <DuoInputGroup>
                    <InputGroup>
                        <label htmlFor="numero">
                            Número 
                        </label>
                        
                        <input 
                            type="text" 
                            name="numero" 
                            id="numero" 
                            onChange={e => setNumero(e.target.value)} 
                        />
                    </InputGroup>

                    <InputGroup>
                        <label htmlFor="complemento">
                            Complemento 
                        </label>
                        
                        <input 
                            type="text" 
                            name="complemento" 
                            id="complemento" 
                            value={complemento} 
                            onChange={e => setComplemento(e.target.value)} 
                        />
                    </InputGroup>
                </DuoInputGroup>
                
                <Button 
                    type="submit" 
                    name="avançar"
                >
                    Cadastrar!
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
