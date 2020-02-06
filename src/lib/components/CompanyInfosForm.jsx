import React, { useState, useEffect } from 'react';

import '../assets/css/PersonalInfosForm.css'

const LoginInfos = ({ onSubmit, voltarComponent }) => {
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
         else if(usuario_empresa.razao_social === ''){
             setDisplay.style.display = "block"
             setErro('Por favor preencha sua razão social!');
             document.querySelector('input[name="razao_social"]').focus()
         }else{
            onSubmit(usuario_empresa)
         }
    }

    return(
        <main>
            <form onSubmit={enviarDados}>
                <h1>Informações</h1>

                <span className="error" id="error">{erro}</span>

                <label htmlFor="razao_social">Razão Social <sup>*</sup></label>
                <input type="text" name="razao_social" id="razao_social" value={razao_social} onChange={e => setRazaoSocial(e.target.value)} />

                <label htmlFor="cnpj">CNPJ <sup>*</sup></label>
                <input type="text" name="cnpj" id="cnpj" value={cnpj} onChange={e => setCnpj(e.target.value)} />

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
