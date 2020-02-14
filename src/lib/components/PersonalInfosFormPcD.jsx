import React, { useState, useEffect } from 'react';

import { Main, Form, Title, Header, Logo, Login, InputGroup, DuoInputGroup, HeaderButtonGroup, Error, Button, BackButton } from '../assets/css/CadForms';
import ReturnRG from '../assets/const/ReturnRG'

const LoginInfos = ({ onSubmit, history, voltarComponent }) => {
    useEffect(() => document.querySelector('input[name="rg"]').focus(), [])
    
    const [ rg, setRg ] = useState('');
    const [ dt_nascimento, setData ] = useState('');
    const [ deficiencia, setDeficiencia ] = useState('');
    const [ telefone_fixo, setTelefoneFixo ] = useState('');
    const [ telefone_celular, setTelefoneCelular ] = useState('');
    const [ laudo_url ] = useState('');
    const [id_tipo_deficiencia, setTipoDeficienia] = useState(1);
    const [ erro, setErro ] = useState('');

    useEffect(()=>{
        switch(deficiencia){
            case "visual":
                setTipoDeficienia(1);
                break;
            case "auditiva":
                setTipoDeficienia(2);
                break;
            case "fisica":
                setTipoDeficienia(3);
                break;
            case "mental":
                setTipoDeficienia(4);
                break;
            case "multipla":
                setTipoDeficienia(5);
                break;
            default:
                setTipoDeficienia(0);
        }
    },[deficiencia])

    const setDisplay = document.getElementById('error');

    function enviarDados(e){
        e.preventDefault();

         let usuario_pcd = {
             rg,
             telefone_fixo,
             telefone_celular,
             dt_nascimento,
             laudo_url,
             id_tipo_deficiencia
         }

         if(usuario_pcd.rg === ''){
             setDisplay.style.display = "block"
             setErro('Por favor preencha seu RG!');
             document.querySelector('input[name="rg"]').focus()
         }
         else if(usuario_pcd.dt_nascimento === ''){
             setDisplay.style.display = "block"
             setErro('Por favor preencha sua data de nascimento!');
             document.querySelector('input[name="dt_nascimento"]').focus()
         }
         else if(usuario_pcd.id_tipo_deficiencia === 0){
             setDisplay.style.display = "block"
             setDisplay.style.fontSize = "1.2rem"
             setErro('Por favor selecione seu tipo de deficiência!');
         }else{
            onSubmit(usuario_pcd)
         }
    }

    function conferirRg(rg){
        const reformedRG = rg.replace('.','').replace('.','').replace('-','')
        setRg(ReturnRG(reformedRG))
    }

    useEffect(() => {
        const rg = document.getElementById('rg')
        rg.value.indexOf('.') >= 0 ? rg.maxLength = 12 : rg.maxLength = 9
    },[rg])

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

                <InputGroup>
                    <label htmlFor="rg">
                        RG <span>(Apenas números)</span><sup>*</sup>
                    </label>
                    
                    <input 
                        type="text" 
                        name="rg" 
                        id="rg" 
                        value={rg} 
                        onPaste={e => e.target.maxLength = 12}
                        onBlur={e => e.target.value === '' ? '' : conferirRg(e.target.value)}
                        onChange={e => setRg(e.target.value)} 
                    />
                            
                </InputGroup>
                
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
                    <label htmlFor="deficiencias">
                        Qual sua deficiência? <sup>*</sup>
                    </label>   
                    
                    <select 
                        id="deficiencias" 
                        name="deficiencias" 
                        onChange={e => setDeficiencia(e.target.value)}
                    >
                        <option value="visual" defaultValue >
                            Deficiências
                        </option>
                        
                        <option value="visual" >
                            Visual
                        </option>
                        
                        <option value="auditiva" >
                            Auditiva
                        </option>
                        
                        <option value="fisica" >
                            Física
                        </option>
                        
                        <option value="mental" >
                            Mental
                        </option>
                        
                        <option value="multipla" >
                            Múltipla
                        </option>
                    </select>
                </InputGroup>

                <DuoInputGroup>
                    <InputGroup>
                        <label htmlFor="telefone_fixo">
                            Telefone Fixo
                        </label>
                        
                        <input 
                            type="text" 
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
                            type="text" 
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
