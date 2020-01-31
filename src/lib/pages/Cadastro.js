import React,{useState, useEffect} from 'react';

import '../assets/css/PageCadastro.css'
import SelectUser from '../../components/SelectUser';
import StepBar from '../../components/StepBar';
import UserBasicForm from '../../components/UserBasicForm';

const Cadastro = () =>{
    // Variavel para fazer troca de componentes
    const [counter, setCounter] = useState(0);
    //Variavel para fazer troca do StepBar
    const [num, setNum] = useState(0);

    //Variaveis para salvar informaçães do usuário
    const [userType, setUserType] = useState(0);

    // Objeto para ser enviado para o BackEnd
    // let UserInfos = {
    //     usuario:{
    //         nome: "",
    //         usuario: "",
    //         email: "",
    //         senha: "",
    //         id_tipo_usuario: userType
    //     }
    // }

    function changeComponent(id){
        switch(id){
            case 'deficiente':
                setCounter(1);
                setUserType(1)
                break;
            case 'empresa':
                setCounter(1);
                setUserType(2)
                break;
            case 'freelancer':
                setCounter(1);
                setUserType(3)
                break;
            default:
                setCounter(0);
        }
    }

    function RecieveFirstForm(){
        console.log(userType)
    }

    function showComponent(){
        switch(counter){
            case 0 :
                return <SelectUser onClick={changeComponent}/>
            case 1 :
                return <UserBasicForm onSubmit={RecieveFirstForm} userType={userType}/>
            default:
                return <SelectUser onClick={changeComponent}/>
        }
    }

    return(
        <>
        <StepBar num={num}/>
        {showComponent()}
        </>
    )
}

export default Cadastro;
