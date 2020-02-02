import React from 'react';
import '../assets/css/ListJobsEmpresa.css';
import ListJobsActiveEmpresa from './ListJobsActiveEmpresa';
import ListJobsDesactiveEmpresa from './ListJobsDesactiveEmpresa';


//https://api-acessibilidade.herokuapp.com/vagas/empresa/id-empresa

const ListJobsEmpresa = (props) => {
    const idEmpresa = props.id;


    return ( 
        <>
            <ListJobsActiveEmpresa props={idEmpresa}/>
            <ListJobsDesactiveEmpresa props={idEmpresa}/>
        </>
    );
};

export default ListJobsEmpresa;