import React from 'react';
//componentes
import SearchBarFreelancer from '../lib/components/SearchBarFreelancer';
import SideMenuFreelancer from '../lib/components/SideMenuFreelancer';


//estilo
import '../lib/assets/css/Feed.css'

const FeedPcd = (props) => {

    return (
        <>
            <header>
                <SearchBarFreelancer/>
            </header>
            <main>
                <SideMenuFreelancer/>
            </main>
        </>
    );
};

export default FeedPcd;