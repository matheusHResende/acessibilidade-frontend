import React from 'react';
//pages
import FeedJobsCompany from './FeedJobsCompany';
//componentes
import SearchBarEmpresa from '../lib/components/SearchBarEmpresa';
import SideMenuCompany from '../lib/components/SideMenuCompany';
//style
import {  Header, Main } from '../lib/assets/style-components/Feed';

const FeedEmpresa = (props) => {

    return (
        <>
            <Header>
                <SearchBarEmpresa/>
            </Header>

            <Main>
                <SideMenuCompany/>
                <FeedJobsCompany/>
            </Main>
        </>
    );
};

export default FeedEmpresa;