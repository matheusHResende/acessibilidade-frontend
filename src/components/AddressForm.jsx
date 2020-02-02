import React, { useState, useEffect } from 'react';

import '../lib/assets/css/AddressForm.css'

const LoginInfos = ({ onSubmit, voltarComponent }) => {
    useEffect(() => document.querySelector('input[name="pais"]').focus(), []);

    const [ pais, setPais ] = useState('');
    const [ estado, setEstado ] = useState('');
    const [ cidade, setCidade ] = useState('');
    const [ bairro, setBairro ] = useState('');
    const [ cep, setCep ] = useState(0);
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

    return(
        <main>
            <form className="formAddress" onSubmit={enviarDados}>
                <h1>Informações</h1>

                <span className="error" id="error">{erro}</span>

                <div className="form-group">
                <label htmlFor="pais">País <sup>*</sup></label>
                <input type="text" name="pais" id="pais" value={pais} onChange={e => setPais(e.target.value)} />
                </div>

                <div className="form-group">
                <label htmlFor="estado">Estado <sup>*</sup></label>
                <input type="text" name="estado" id="estado" value={estado} onChange={e => setEstado(e.target.value)} />
                </div>

                <div className="form-group">
                <label htmlFor="cidade">Cidade <sup>*</sup></label>
                <input type="text" name="cidade" id="cidade" value={cidade} onChange={e => setCidade(e.target.value)} />
                </div>

                <div className="form-group">
                <label htmlFor="bairro">Bairro </label>
                <input type="text" name="bairro" id="bairro" value={bairro} onChange={e => setBairro(e.target.value)} />
                </div>

                <div className="form-group">
                <label htmlFor="cep">CEP</label>
                <input type="number" name="cep" id="cep" onChange={e => setCep(e.target.value)} />
                </div>

                <div className="form-group">
                <label htmlFor="logradouro">Logradouro</label>
                <input type="text" name="logradouro" id="logradouro" value={logradouro} onChange={e => setLogradouro(e.target.value)} />
                </div>

                <div className="form-group">
                <label htmlFor="numero">Número </label>
                <input type="text" name="numero" id="numero" onChange={e => setNumero(e.target.value)} />
                </div>

                <div className="form-group">
                <label htmlFor="complemento">Complemento </label>
                <input type="text" name="complemento" id="complemento" value={complemento} onChange={e => setComplemento(e.target.value)} />
                </div>

                <div className="buttonGroup">
                    <button type="button" name="voltar" onClick={voltarComponent}>Voltar</button>
                    <button type="submit" name="avançar">Cadastrar!</button>
                </div>
            </form>
        </main>
    )
}

export default LoginInfos;
