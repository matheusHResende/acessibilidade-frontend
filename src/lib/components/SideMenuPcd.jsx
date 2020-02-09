import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaClipboardList, FaSuitcase } from "react-icons/fa";

import { SideMenu, NavMenu,  OtherPages } from '../assets/style-components/SideMenu';

const SideMenuPcd = (props) => {
    return(
        <SideMenu>
            <div className="menu-wrap">
                <NavMenu role="navigation">
                    <OtherPages>
                        <li tabIndex="0"><Link to="/"><FaHome/> Perfil </Link></li>
                        <li tabIndex="1"><Link to="/feedpcd"><FaSuitcase/> Vagas </Link></li>
                        <li tabIndex="2"><Link to="/feedpcd"><FaClipboardList/> Vagas candidatadas </Link></li>
                    </OtherPages>
                </NavMenu>
            </div>
        </SideMenu>
    )
}

export default SideMenuPcd;