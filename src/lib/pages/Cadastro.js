import React,{useState, useEffect} from 'react';

import '../assets/css/PageCadastro.css'
import SelectUser from '../../components/SelectUser';
import StepBar from '../../components/StepBar';

const Cadastro = () =>{
    const [counter, setCounter] = useState(0);
    const [num, setNum] = useState(0);
    
    function changeComponent(id){
        switch(id){
            case 'deficiente':
                setCounter(1);
                break;
            case 'empresa':
                setCounter(2);
                break;
            case 'freelancer':
                setCounter(3);
                break;
            default:
                setCounter(0);
        }
    }

    function showComponent(){
        switch(counter){
            case 0 :
                return <SelectUser onClick={changeComponent}/>
            case 1 :
                return <h1>Form 1</h1>
            case 2 :
                return <h1>Form 2</h1>
            case 3 :
                return <h1>Form 3</h1>
            default:
                return <h1>hello World</h1>
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
