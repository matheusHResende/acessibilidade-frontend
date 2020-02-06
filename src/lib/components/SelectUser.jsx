import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/css/SelectUserCard.css'
import arrowBack from '../assets/icons/arrowBack.svg';

const SelectUser = ({ onClick }) => {
    return(
        <main className="main-box">
            <h1 className="title">Por favor selecione um usuário</h1>
            <button 
                type="button" 
                className="card" id="deficiente" 
                onClick={e => onClick(e.target.id)}
                tabIndex={0}
            >
                Sou Deficiente
            </button>
            
            <button 
                className="card" id="empresa" 
                onClick={e => 
                onClick(e.target.id)}
                tabIndex={0}
            >
                Sou Empresa 
            </button>
            
            <button 
                className="card" 
                id="freelancer" 
                onClick={e => onClick(e.target.id)}
                tabIndex={0}
            >
                Sou Freelancer
            </button>

            <Link to="/" className="backButton" tabIndex={0}>
                <img src={arrowBack} alt="Botão para voltar" tabIndex="0"/>
            </Link>
        </main>
    )
}

export default SelectUser;
