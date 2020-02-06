import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/css/NotFound.css'
import arrowBack from '../assets/icons/arrowBack.svg'

const NotFound = () => (
    <div className="container">
    <h1>Página não encontrada!</h1>
    <Link to={'/'} tabIndex="0" className="button"><img src={arrowBack} alt="Voltar para o menu"/></Link>
    </div>
)
export default NotFound;