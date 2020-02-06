import React, { useState } from 'react';

import '../lib/assets/css/PageCadastro.css';
import SelectUser from '../lib/components/SelectUser.jsx';
import UserBasicForm from '../lib/components/UserBasicForm.jsx';
import PersonalInfosFormPcD from '../lib/components/PersonalInfosFormPcD.jsx';
import CompanyInfosForm from '../lib/components/CompanyInfosForm.jsx';
import FreelancerInfosForm from '../lib/components/FreelancerInfosForm.jsx';
import AddressFomr from '../lib/components/AddressForm.jsx';

import RequestCadastroFreelancer from '../requests/CadastroFreelancer/RequestCadastroFreelancer.js';
import RequestCadastroEmpresa from '../requests/CadastroEmpresa/RequestCadastroEmpresa.js';
import RequestCadastroPcD from '../requests/CadastroPcd/RequestCadastroPcD.js';

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
    const [ err, setErr ] = useState('');

    async function cadastro(){
        if(cadastroFinal.usuario.id_tipo_usuario === 1){
            let e = await RequestCadastroPcD(cadastroFinal)
            if(e.data.error){
                setErr(e)
            }
        }
        else if(cadastroFinal.usuario.id_tipo_usuario === 2){
            let e = await RequestCadastroEmpresa(cadastroFinal)
            if(e.data.error){
                setErr(e)
            }
        }
        else{
           let e = await RequestCadastroFreelancer(cadastroFinal)
            if(e.data.error){
                setErr(e)
            }
        }
    };

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
                cadastro();
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
                cadastro()
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
                cadastro()
            default:
        }  
    };

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
