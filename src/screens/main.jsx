import React from 'react';
import {Link} from 'react-router-dom';

const Main = () => {
    return(
        <>
        
        <p>CAMPOS APENAS PARA TESTE, ENQUANTO LOGIN NÃO É IMPLEMENTADO</p>
        <Link to="/feedempresa">
            <button>
                Feed Empresa
            </button>
        </Link>

        <Link to="/feedpcd">
            <button>
            Feed Pcd
            </button>
        </Link>

        <Link to="/feedfreelancer">
            <button>
            Feed Freelancer
            </button>
        </Link>
        </>
    )
}

export default Main;