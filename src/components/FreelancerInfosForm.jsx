import React, { useState, useEffect } from 'react';

import '../lib/assets/css/PersonalInfosForm.css'

const LoginInfos = ({ onSubmit, voltarComponent }) => {
    useEffect(() => document.querySelector('input[name="dt_nascimento"]').focus(), [])

    const [ cpf, setCpf ] = useState('');
    const [ dt_nascimento, setData ] = useState('');
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
            dt_nascimento
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
         }else{
            onSubmit(usuario_freelancer)
         }
    }

    return(
        <main>
            <form onSubmit={enviarDados}>
                <h1>Informações</h1>

                <span className="error" id="error">{erro}</span>

                <label htmlFor="dt_nascimento">Data de Nascimento <sup>*</sup></label>
                <input type="date" name="dt_nascimento" id="dt_nascimento" value={dt_nascimento} onChange={e => setData(e.target.value)} />
                    
                <label htmlFor="cpf">CPF <sup>*</sup></label>
                <input type="text" name="cpf" id="cpf" value={cpf} onChange={e => setCpf(e.target.value)} />

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
