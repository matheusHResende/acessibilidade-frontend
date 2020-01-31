import React from 'react';

import '../assets/css/SearchBar.css';



const SearchBarPcd = () => {

    return (
        <nav className="nav-bar" >
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <input aria-label="Pesquisar" id="search-input-pcd" type="search" placeholder="Digite um cargo, nome de empresa ou vaga para pesquisar..."/>
            <button aria-label="Executar pesquisa" id="search-button-pcd" type="submit"><i className="fa fa-search"></i></button>
        </nav>
    );
};

export default SearchBarPcd;