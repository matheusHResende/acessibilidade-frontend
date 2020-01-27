import React from 'react';
import {Link} from 'react-router-dom';

import '../lib/assets/css/NotFound.css'
import arrowBack from '../lib/assets/images/arrowBack.svg'

const NotFound = () => (
    <>
    <h1>Página não encontrada!</h1>
    <Link to={'/'} tabIndex="0" className="button"><img src={arrowBack} alt="Voltar para o menu"/></Link>
    </>
)
export default NotFound;