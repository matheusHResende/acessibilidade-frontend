import React from 'react';
import '../assets/css/ListJobsEmpresa.css';
import ListJobsActiveEmpresa from './ListJobsActiveEmpresa';
import ListJobsDesactiveEmpresa from './ListJobsDesactiveEmpresa';


//https://api-acessibilidade.herokuapp.com/vagas/empresa/id-empresa

const ListJobsEmpresa = (props) => {
    const idCompany = props.id;


    return ( 
        <>
            <ListJobsActiveEmpresa props={idCompany}/>
            <ListJobsDesactiveEmpresa props={idCompany}/>
        </>
    );
};

export default ListJobsEmpresa;