import React from 'react';
//pages
import FeedJobsPcd from './FeedJobsPcd';
//components
import SideMenuPcd from '../lib/components/SideMenuPcd';
import SearchBarPcd from '../lib/components/SearchBarPcd';
//style
import {  Header, Main } from '../lib/assets/style-components/Feed';

const FeedPcd = (props) => {

    return (
        <>
            <Header>
                <SearchBarPcd/>
            </Header>

            <Main>
                <SideMenuPcd/>
                <FeedJobsPcd/>
            </Main>
        </>
    );
};

export default FeedPcd;