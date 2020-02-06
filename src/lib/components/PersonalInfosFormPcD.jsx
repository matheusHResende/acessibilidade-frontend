import React, { useState, useEffect } from 'react';

import '../assets/css/PersonalInfosForm.css'

const LoginInfos = ({ onSubmit, voltarComponent }) => {
    useEffect(() => document.querySelector('input[name="rg"]').focus(), [])
    
    const [ rg, setRg ] = useState('');
    const [ dt_nascimento, setData ] = useState('');
    const [ deficiencia, setDeficiencia ] = useState('');
    const [ telefone_fixo, setTelefoneFixo ] = useState(0);
    const [ telefone_celular, setTelefoneCelular ] = useState(0);
    const [ laudo_url ] = useState('batta');
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

    return(
        <main>
            <form onSubmit={enviarDados}>
                <h1>Informações pessoais</h1>

                <span className="error" id="error">{erro}</span>

                <label htmlFor="rg">RG <sup>*</sup></label>
                <input type="text" name="rg" id="rg" value={rg} onChange={e => setRg(e.target.value)} />

                <div className="selectGroup">
                    <div className="selectGroupComponent">
                        <label htmlFor="dt_nascimento">Data de Nascimento <sup>*</sup></label>
                        <input type="date" name="dt_nascimento" id="dt_nascimento" value={dt_nascimento} onChange={e => setData(e.target.value)} />
                    </div>
                    
                    <div className="selectGroupComponent">
                        <label htmlFor="deficiencias">Qual sua deficiência? <sup>*</sup></label>   
                        <select id="deficiencias" name="deficiencias" onChange={e => setDeficiencia(e.target.value)}>
                            <option value="visual" defaultValue>Deficiências</option>
                            <option value="visual" >Visual</option>
                            <option value="auditiva">Auditiva</option>
                            <option value="fisica">Física</option>
                            <option value="mental">Mental</option>
                            <option value="multipla">Múltipla</option>
                        </select>
                    </div>
                </div>

                <div className="passwordGroup">
                    <div className="passwordGroupComponent">
                        <label>Telefone Fixo</label>
                        <input 
                            type="tel" 
                            name="telefone_fixo" 
                            maxLength={11}
                            onChange={e => setTelefoneFixo(e.target.value)} 
                        />
                    </div>

                    <div className="passwordGroupComponent">
                        <label>Telefone Celular</label>
                        <input 
                            type="tel" 
                            name="telefone_celular" 
                            maxLength={11}
                            onChange={e => setTelefoneCelular(e.target.value)} 
                        />
                    </div>
                </div>

                <div className="buttonGroup">
                    <button type="button" name="voltar" onClick={voltarComponent}>Voltar</button>
                    <button type="submit" name="avançar">Próximo</button>
                </div>
            </form>
        </main>
    )
}

export default LoginInfos;
