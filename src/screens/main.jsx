import React from 'react';
import {Link} from 'react-router-dom';

const Main = () => {
    return(
        <>
        <Link to="/login" >
            <button>
                Login
            </button>
        </Link>

        <Link to="/cadastrar">
            <button>
                Cadastrar
            </button>
        </Link>
        </>
    )
}

export default Main;