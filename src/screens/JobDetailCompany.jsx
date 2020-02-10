import React from 'react';

//componentes
import SearchBarEmpresa from '../lib/components/SearchBarEmpresa';
import SideMenuCompany from '../lib/components/SideMenuCompany';
//style
import {  Header, Main } from '../lib/assets/style-components/Feed';

const JobDetailCompany = (props) => {

    return (
        <>
            <Header>
                <SearchBarEmpresa/>
            </Header>

            <Main>
                <SideMenuCompany/>
            </Main>
        </>
    );
};

export default JobDetailCompany;