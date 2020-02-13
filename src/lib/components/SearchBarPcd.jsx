import React from 'react';

import { SearchBar } from '../assets/style-components/SearchBar';
import { FaSearch } from "react-icons/fa";



const SearchBarPcd = () => {

    return (
        <>
            <SearchBar >
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <input aria-label="Pesquisar" id="search-input-pcd" type="search" placeholder="Digite um cargo, nome de empresa ou vaga para pesquisar..."/>
                <button aria-label="Executar pesquisa" id="search-button-pcd" type="submit"><FaSearch/> BUSCAR</button>
            </SearchBar>
        </>
    );
};

export default SearchBarPcd;