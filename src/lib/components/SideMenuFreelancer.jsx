import React from 'react';


import '../assets/css/SideMenu.css';
import User_Circle from '../assets/icons/User_Circle.png';

const SideMenuFreelancer = (props) => {

    return(
        <aside className="side-bar" aria-label="Menu do Usuário">
            <img className="profile-pic" src={User_Circle} alt="Foto-de-perfil"/>
            <h2 className="user-name">Nome do usuário</h2>
            <span className="side-bar-description">

                <a  href="">Meu perfil</a>
                <a  href="">(?)</a>
                <a  href="">(?)</a>
                <a  href="">(?)</a>

            </span>
        </aside>

    )
}

export default SideMenuFreelancer;