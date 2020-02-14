import React from 'react';
import { Link } from 'react-router-dom';
import { Job, Name, Description, Enterprise, Button } from '../assets/style-components/ListJobs';
const ListJobs = (props) => {

    console.log(props);
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
                <Description><p> Quantidade de vagas: </p>{jobsDetails.amount} </Description>
                <Description><p> Localidade: </p>{jobsDetails.location} </Description>
                <Link to={{pathname: '/jobdetailpcd', aboutProps: { id:jobsDetails.id}}}  ><Button>Ver Mais</Button> </Link> 
            </Job>
        </>
    );
};

export default ListJobs; 