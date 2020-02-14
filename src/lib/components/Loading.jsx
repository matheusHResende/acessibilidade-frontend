import React, { useState, useEffect } from 'react';

import { Loader } from '../assets/css/Loading';

import RequestCadastroFreelancer from '../../requests/CadastroFreelancer/RequestCadastroFreelancer.js';
import RequestCadastroEmpresa from '../../requests/CadastroEmpresa/RequestCadastroEmpresa.js';
import RequestCadastroPcD from '../../requests/CadastroPcd/RequestCadastroPcD.js';

const Loading = ({ answerResponse, dadosFinais, endereco, usertype, history }) => {
    const [pais, setPais] = useState()
    const [estado, setEstado] = useState()
    const [cidade, setCidade] = useState()
    const [bairro, setBairro] = useState()
    const [cep, setCep] = useState()
    const [logradouro, setLogradouro] = useState()
    const [numero, setNumero] = useState()
    const [complemento, setComplemento] = useState()
    
    useEffect(() => {
        if ( pais === undefined && 
             estado === undefined && 
             cidade === undefined &&
             bairro === undefined && 
             cep === undefined && 
             logradouro === undefined && 
             numero === undefined &&
             complemento === undefined ) {
                
                setPais(endereco.endereco.pais);
                setEstado(endereco.endereco.estado);
                setCidade(endereco.endereco.cidade);
                setBairro(endereco.endereco.bairro);
                setCep(endereco.endereco.cep);
                setLogradouro(endereco.endereco.logradouro);
                setNumero(endereco.endereco.numero);
                setComplemento(endereco.endereco.complemento);
        }

        if ( pais !== undefined && 
             estado !== undefined && 
             cidade !== undefined &&
             bairro !== undefined && 
             cep !== undefined && 
             logradouro !== undefined && 
             numero !== undefined &&
             complemento !== undefined ) {
            
                dadosFinais.endereco = {
                    pais,
                    estado,
                    cidade,
                    bairro,
                    cep,
                    logradouro,
                    numero,
                    complemento
                };
        }

        if ( dadosFinais.endereco.pais !== undefined ) {
            async function makePromisse(){
                let response;
                 
                switch(usertype){
                    case "deficiente":
                        response = await RequestCadastroPcD(dadosFinais, history);
                        answerResponse(response);
                        break;
                    case "empresa":
                        response = await RequestCadastroEmpresa(dadosFinais, history);
                        answerResponse(response);
                        break;
                    case "freelancer":
                        response = await RequestCadastroFreelancer(dadosFinais, history);
                        answerResponse(response);
                        break;
                    default:
                }
                    
            }
            makePromisse()
        }
    }, [endereco.endereco.pais, endereco.endereco.estado, endereco.endereco.cidade, endereco.endereco.bairro, endereco.endereco.cep, endereco.endereco.logradouro, endereco.endereco.numero, endereco.endereco.complemento, dadosFinais.endereco, pais, estado, cidade, bairro, cep, logradouro, numero, complemento, endereco, dadosFinais, usertype, history, answerResponse])

    return(
        <Loader></Loader>
    )
}

export default Loading;