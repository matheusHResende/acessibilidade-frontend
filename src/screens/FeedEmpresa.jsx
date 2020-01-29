import React from 'react';
//componentes

import SearchBarEmpresa from '../lib/components/SearchBarEmpresa';
import SideMenuEmpresa from '../lib/components/SideMenuEmpresa';
import ListJobsEmpresa from '../lib/components/ListJobsEmpresa';


//estilo
import '../lib/assets/css/Feed.css'


const FeedEmpresa = (props) => {
    return (
        <>
            <header>
                <SearchBarEmpresa/>
            </header>
            <main>
                <SideMenuEmpresa/>
                <ListJobsEmpresa/>
            </main>
        </>
    )
}

export default FeedEmpresa;