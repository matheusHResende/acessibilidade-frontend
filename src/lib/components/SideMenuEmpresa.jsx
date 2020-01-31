import React from 'react';
import {Link} from 'react-router-dom';


import '../assets/css/SideMenu.css';
import User_Circle from '../assets/icons/User_Circle.png';

const SideMenuEmpresa = (props) => {

    return(
        <aside className="side-bar" aria-label="Menu do Usuário">
            <img className="profile-pic" src={User_Circle} alt="Foto-de-perfil"/>
            <h2 className="user-name">Nome do usuário</h2>
            <span className="side-bar-description">

                <Link to="/feedempresa">Meu perfil</Link>
                <Link to="/feedempresa">Controle de vagas</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/feedempresa">Freelancers</Link>

            </span>
        </aside>

    )
}

export default SideMenuEmpresa;