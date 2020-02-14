import React from 'react';

import { SearchBar } from '../assets/style-components/SearchBar';
import { FaSearch } from "react-icons/fa";



const SearchBarEmpresa = () => {

    return (
        <SearchBar >
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <input aria-label="Pesquisar" id="search-input-empresa" type="search" placeholder="Digite o nome de uma empresa para pesquisar..."/>
            <button aria-label="Executar pesquisa" id="search-button-empresa" type="submit"><FaSearch/></button>
        </SearchBar>
    );
};

export default SearchBarEmpresa;