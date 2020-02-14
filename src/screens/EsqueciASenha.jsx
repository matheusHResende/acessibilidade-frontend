import React, { useState } from 'react';

import EmailForm from '../lib/components/EmailForm.jsx';
import Loading2 from '../lib/components/Loading2.jsx';
import NovaSenhaForm from '../lib/components/NovaSenhaForm.jsx';

const EsqueciASenha = () => {
    const [ counter, setCounter ] = useState(0);
    const [ usuario, setUsuario ] = useState('');
    const [ erro, setError ] = useState('');

    function saveUsuario(usuario){
        setUsuario(usuario)
        setCounter(1)
    }

    function responseGet(res){
        if ( res.status === 409){
            setError( res.error )
            setCounter(0)
        }else{
            setCounter(2)
        }
    }   

    function changeRender(){
        switch(counter){
            case 0:
                return <EmailForm saveUsuario={saveUsuario} erro={erro}/>
            case 1:
                return <Loading2 usuario={usuario} responseGet={responseGet}/>
            case 2:
                return <NovaSenhaForm />
            default:
        }
    }

    return changeRender()
}

export default EsqueciASenha;