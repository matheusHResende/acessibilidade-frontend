import React from 'react';
//componentes
import ListJobsPcd from '../lib/components/ListJobsPcd';
import SearchBarPcd from '../lib/components/SearchBarPcd';
import SideMenuPcd from '../lib/components/SideMenuPcd';


//estilo
import '../lib/assets/css/Feed.css';

const FeedPcd = (props) => {

    return (
        <>
            <header>
                <SearchBarPcd/>
            </header>
            <main>
                <SideMenuPcd/>
                <ListJobsPcd/>
            </main>
        </>
    );
};

export default FeedPcd;