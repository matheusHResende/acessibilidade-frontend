import React,{useState} from 'react';

import '../assets/css/PageCadastro.css'
import SelectUser from '../../components/SelectUser';
import StepBar from '../../components/StepBar';

const Cadastro = () =>{
    const [counter, setCounter] = useState(0);
    const [num, setNum] = useState(0);
    
    async function changeComponent(id){
        console.log(id)
        // switch(counter){
        //     case 0:
        //         setCounter(1);
        //         setCounter(1);
        //         break;
        //     case 1:
        //         setCounter(2);
        //         setCounter(2);
        //         break;
        //     case 2:
        //         setCounter(3);
        //         setNum(3);
        //         break;
        //     case 3:
        //         setCounter(4);
        //         setNum(4);
        //         break;
        //         default:
        //             setCounter(0);
        //             setNum(0);
        // }
    }

    function showComponent(){
        switch(counter){
            case 0 :
                return <SelectUser onClick={changeComponent}/>
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
