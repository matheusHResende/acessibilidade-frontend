import React,{useState} from 'react';

import '../assets/css/PageCadastro.css'
import Comp0 from '../../components/Teste';
import Comp1 from '../../components/Teste2';

const Cadastro = () =>{
    const [counter = 0, setCounter] = useState(0);
    
    function addCounter() {
        setCounter(counter + 1);
    }

    function removeCounter() {
        setCounter(counter - 1);
    }


        return(
        <>
            <button onClick={addCounter}>1</button>
            <button onClick={removeCounter}>2</button>
            <br/><br/><br/><br/>
            {(counter === 0)? <Comp0 /> : <Comp1 />}
        </>
    )
}

export default Cadastro;
