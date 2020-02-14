import React, { useState } from 'react';

import SelectUser from '../lib/components/SelectUser.jsx';
import UserBasicForm from '../lib/components/UserBasicForm.jsx';
import PersonalInfosFormPcD from '../lib/components/PersonalInfosFormPcD.jsx';
import CompanyInfosForm from '../lib/components/CompanyInfosForm.jsx';
import FreelancerInfosForm from '../lib/components/FreelancerInfosForm.jsx';
import AddressFomr from '../lib/components/AddressForm.jsx';
import Loading from '../lib/components/Loading.jsx';

const Cadastro = ({ history }) =>{
    document.title = "Cadastrar - IncluJobs"
    const [ user_type, setUserType ] = useState("");
    const [ counter, setCounter ] = useState(0);

    const [ error, setErr ] = useState('');
    const [ dadosFinais, setDadosFinais ] = useState()

    // Infos de Login
    const [ cadastroLogin, setCadastroLogin ] = useState({});
    // Infos Básicas
    const [ cadastroPcD, setCadastroPcD ] = useState({});
    const [ cadastroEmpresa, setCadastroEmpresa ] = useState({});
    const [ cadastroFreelancer, setCadastroFreelancer ] = useState({});

    // Infos de endereço
    const [endereco, setEndereco] = useState({});

    function handleSubmit(usuario){
        switch(usuario.id_tipo_usuario){
            case 1:
                setCadastroLogin(usuario)
                setCounter(2);
                break;

            case 2:
                setCadastroLogin(usuario)
                setCounter(3);
                break;

            case 3:
                setCadastroLogin(usuario)
                setCounter(4);
                break;

            default:
                setCadastroLogin(usuario)
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
                dt_nascimento: infos.dt_nascimento,
                especialidade: infos.especialidade
            }  
        );
        
        setCounter(5);
    };

    
    // Cadastro Final
    async function cadastro(){
        switch(user_type){
            case "deficiente":
                setDadosFinais({
                    usuario: cadastroLogin,
                    endereco,
                    usuario_pcd: cadastroPcD
                })
                break;
            case "empresa":
                setDadosFinais({
                    usuario: cadastroLogin,
                    endereco,
                    usuario_empresa: cadastroEmpresa
                })
                break;
            case "freelancer":
                setDadosFinais({
                    usuario: cadastroLogin,
                    endereco,
                    usuario_freelancer: cadastroFreelancer
                })
                break;
        default:
        }

        setCounter(6)
    };

    function handleSubmitCadFinal(infos){
        setEndereco({
            endereco:{
                pais: infos.pais,
                estado: infos.estado,
                cidade: infos.cidade,
                bairro: infos.bairro,
                cep: infos.cep,
                logradouro: infos.logradouro,
                numero: infos.numero,
                complemento: infos.complemento
            }
        });
        cadastro();  
    };

    function answerResponse(answer){
        if(answer){
            setErr('')
            if ( answer.data.error === "Usuario ja existe." ){
                setCounter(1)
                setErr("Usuario já existe!")
            } else if("Email ja esta em uso.") {
                setCounter(1)
                setErr("Email já está em uso!")
            }
        }
    }

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

    function voltarComponentAdress(){
        let back;
        if ( user_type === "deficiente") {
            back = counter - 3
        }
        else if ( user_type === "empresa") {
            back = counter - 2
        }else{
            back = counter - 1
        }
        setCounter(back)
    }

    function changeRender(){
        switch(counter){
            case 0:
                return <SelectUser onClick={ changeCounter } />;
            case 1:
                return <UserBasicForm onSubmit={ handleSubmit } user_type={ user_type } voltarComponent={ voltarComponent } history={ history } error={ error }/>

            case 2:
                return <PersonalInfosFormPcD onSubmit={ handleSubmitCadPcD } voltarComponent={ voltarComponent } history={ history } />

            case 3:
                return <CompanyInfosForm onSubmit={ handleSubmitCadEmpresa } voltarComponent={ voltarComponentEmpresa } history={ history } />

            case 4:
               return <FreelancerInfosForm onSubmit={ handleSubmitCadFreelancer } voltarComponent={ voltarComponentFreelancer } history={ history } />

            case 5:
                return <AddressFomr onSubmit={ handleSubmitCadFinal } voltarComponent={ voltarComponentAdress } history={ history } />
            case 6:
                return <Loading dadosFinais={ dadosFinais } answerResponse={ answerResponse } endereco={ endereco } usertype={ user_type } history={ history }/>
            default:
                return <SelectUser onClick={ changeCounter } />;
        }
    };

    return changeRender();
}

export default Cadastro;
