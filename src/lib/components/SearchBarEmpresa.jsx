import React from 'react';

import '../assets/css/SearchBar.css';


const SearchBarEmpresa = () => {

    return (
        <nav className="nav-bar" >
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <input aria-label="Pesquisar" id="search-input-empresa" type="search" placeholder="Digite o nome de uma empresa para pesquisar..."/>
            <button aria-label="Executar pesquisa" id="search-button-empresa" type="submit"><i className="fa fa-search"></i></button>
        </nav>
    );
};

export default SearchBarEmpresa;