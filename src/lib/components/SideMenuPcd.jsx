import React from 'react';
import {Link} from 'react-router-dom';


import '../assets/css/SideMenu.css';
import User_Circle from '../assets/icons/User_Circle.png';

const SideMenuPcd = (props) => {

    return(
        <aside className="side-bar" aria-label="Menu do Usuário">
            <img className="profile-pic" src={User_Circle} alt="Foto-de-perfil"/>
            <h2 className="user-name">Olá, Nome do usuário</h2>
            <span className="side-bar-description">
                
            <Link to="/feedpcd">Meu perfil</Link>
            <Link to="/feedpcd">Meu currículo</Link>
            <Link to="/feedpcd">Minhas candidaturas</Link>
            <Link to="/feedpcd">Vagas</Link>
            </span>
        </aside>

    )
}

export default SideMenuPcd;