import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaClipboardList, FaSuitcase, FaChartLine, FaHandsHelping } from "react-icons/fa";


import { SideMenu, NavMenu,  OtherPages } from '../assets/style-components/SideMenu';

const SideMenuEmpresa = (props) => {
    return(
        <SideMenu>
            <div className="menu-wrap">
                <NavMenu role="navigation">
                    <OtherPages>
                        <li tabIndex="0"><Link to="/feedempresa"><FaHome/> Perfil </Link></li>
                        <li tabIndex="1"><Link to="/feedempresa"><FaClipboardList/> Controle de vagas </Link></li>
                        <li tabIndex="2"><Link to="/feedempresa"><FaChartLine/> Dashboard </Link></li>
                        <li tabIndex="3"><Link to="/feedempresa"><FaHandsHelping/> Freelancers </Link></li>
                    </OtherPages>
                </NavMenu>
            </div>
        </SideMenu>
    )
}

export default SideMenuEmpresa;