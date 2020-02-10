import React from 'react';
import { Job, Name, Description, Enterprise, Button } from '../assets/style-components/ListJobs';
const ListJobs = (props) => {

    const jobsDetails = {
        id: props.props.id,
        name: props.props.titulo,
        enterprise: props.props.Usuario_Empresa.razao_social,
        amount: props.props.quantidade_vagas,
        location: `${props.props.Endereco.cidade} - ${props.props.Endereco.estado}`
    };
    console.log(jobsDetails.amount)
    return(
        <>
            <Job key={jobsDetails.id}>
                <Name> {jobsDetails.name} </Name>
                <Enterprise> {jobsDetails.enterprise} </Enterprise>
                <Description> Quantidade de vagas: {jobsDetails.amount} </Description>
                <Description> Localidade: {jobsDetails.location} </Description>
                <Button> Ver Mais </Button>
            </Job>
        </>
    );
};

export default ListJobs; 