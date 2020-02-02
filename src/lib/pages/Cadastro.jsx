import React, { useState, useEffect } from 'react';

import '../assets/css/PageCadastro.css';
import api from '../../services/api.js';
import SelectUser from '../../components/SelectUser.jsx';
import UserBasicForm from '../../components/UserBasicForm.jsx';
import PersonalInfosFormPcD from '../../components/PersonalInfosFormPcD.jsx';
import CompanyInfosForm from '../../components/CompanyInfosForm.jsx';
import FreelancerInfosForm from '../../components/FreelancerInfosForm.jsx';
import AddressFomr from '../../components/AddressForm.jsx';

const Cadastro = () =>{
    const [ user_type, setUserType ] = useState("");
    const [ counter, setCounter ] = useState(0);

    // Infos de Login
    const [cadastroPcDLogin, setCadastroPcDLogin] = useState({});
    const [cadastroEmpresaLogin, setCadastroEmpresaLogin] = useState({});
    const [cadastroFreelancerLogin, setCadastroFreelancerLogin] = useState({});
    // Infos Básicas
    const [cadastroPcD, setCadastroPcD] = useState({});
    const [cadastroEmpresa, setCadastroEmpresa] = useState({});
    const [cadastroFreelancer, setCadastroFreelancer] = useState({});
    function handleSubmit(usuario){
        switch(usuario.id_tipo_usuario){
            case 1:
                setCadastroPcDLogin(usuario)
                setCounter(2);
                break;

            case 2:
                setCadastroEmpresaLogin(usuario)
                setCounter(3);
                break;

            case 3:
                setCadastroFreelancerLogin(usuario)
                setCounter(4);
                break;

            default:
                setCadastroPcDLogin(usuario)
        }
    };
    
    function changeCounter(id){
        setUserType(id)
        setCounter(1)
    };

    function handleSubmitCadPcD(infos){
        setCadastroPcD(
            {
                rg: infos.rg,
                telefone_fixo: infos.telefone_fixo,
                telefone_celular: infos.telefone_celular,
                dt_nascimento: infos.dt_nascimento,
                laudo_url: infos.laudo_url,
                id_tipo_deficiencia: infos.id_tipo_deficiencia
            }
        );
        
        setCounter(5);
    };

    function handleSubmitCadEmpresa(infos){
        setCadastroEmpresa(
            {
                cnpj: infos.cnpj,
                razao_social: infos.razao_social,
                telefone_fixo: infos.telefone_fixo,
                telefone_celular: infos.telefone_celular
            }  
        );
        
        setCounter(5);
    };

    function handleSubmitCadFreelancer(infos){
        setCadastroFreelancer(
            {
                cpf: infos.cpf,
                telefone_fixo: infos.telefone_fixo,
                telefone_celular: infos.telefone_celular,
                dt_nascimento: infos.dt_nascimento
            }  
        );
        
        setCounter(5);
    };

    
    // Cadastro Final
    const [cadastroFinal, setCadastroFinal] = useState({});

    function handleSubmitCadFinal(infos){
        switch(user_type){
            case "deficiente":
                return setCadastroFinal({
                    usuario: { ...cadastroPcDLogin },
                    endereco:{
                        pais: infos.pais,
                        estado: infos.estado,
                        cidade: infos.cidade,
                        bairro: infos.bairro,
                        cep: infos.cep,
                        logradouro: infos.logradouro,
                        numero: infos.numero,
                        complemento: infos.complemento
                    },
                    usuario_pcd:{ ...cadastroPcD }
                });
            case "empresa":
                return setCadastroFinal({
                    usuario: { ...cadastroEmpresaLogin },
                    endereco:{
                        pais: infos.pais,
                        estado: infos.estado,
                        cidade: infos.cidade,
                        bairro: infos.bairro,
                        cep: infos.cep,
                        logradouro: infos.logradouro,
                        numero: infos.numero,
                        complemento: infos.complemento
                    },
                    usuario_empresa:{ ...cadastroEmpresa }
                });
            case "freelancer":
                return setCadastroFinal({
                    usuario: { ...cadastroFreelancerLogin },
                    endereco:{
                        pais: infos.pais,
                        estado: infos.estado,
                        cidade: infos.cidade,
                        bairro: infos.bairro,
                        cep: infos.cep,
                        logradouro: infos.logradouro,
                        numero: infos.numero,
                        complemento: infos.complemento
                    },
                    usuario_freelancer:{ ...cadastroFreelancer }
                });
            default:
        }  
    };

    useEffect(() => {  
        if(cadastroFinal.usuario){
            if(cadastroFinal.usuario.id_tipo_usuario === 1){
                const response = api.post('/pcd', cadastroFinal);
                console.log({response});
            }
            else if(cadastroFinal.usuario.id_tipo_usuario === 2){
                const response = api.post('/empresas', cadastroFinal);
                console.log({response});
            }
            else{
                const response = api.post('/freelancer', cadastroFinal);
                console.log({response});
            }
        }
    },[cadastroFinal])

    function voltarComponent(){
        let back = counter - 1;
        setCounter(back);
    };

    function voltarComponentEmpresa(){
        let back = counter - 2;
        setCounter(back);
    };

    function voltarComponentFreelancer(){
        let back = counter - 3;
        setCounter(back);
    };

    function changeRender(){
        switch(counter){
            case 0:
                return <SelectUser onClick={changeCounter} />;
            case 1:
                return <UserBasicForm onSubmit={handleSubmit} user_type={user_type} voltarComponent={voltarComponent}/>

            case 2:
                return <PersonalInfosFormPcD onSubmit={handleSubmitCadPcD} voltarComponent={voltarComponent} />

            case 3:
                return <CompanyInfosForm onSubmit={handleSubmitCadEmpresa} voltarComponent={voltarComponentEmpresa} />

            case 4:
               return <FreelancerInfosForm onSubmit={handleSubmitCadFreelancer} voltarComponent={voltarComponentFreelancer} />

            case 5:
                return <AddressFomr onSubmit={handleSubmitCadFinal} voltarComponent={voltarComponentFreelancer} />

            default:
                return <SelectUser onClick={changeCounter} />;
        }
    };

    return changeRender();
}

export default Cadastro;
