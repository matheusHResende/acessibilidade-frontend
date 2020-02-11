import React, { useState, useEffect } from 'react';
//request
import ShowjobDetails from '../requests/common-request/ShowJobDetails';
//components
import SideMenuPcd from '../lib/components/SideMenuPcd';
import SearchBarPcd from '../lib/components/SearchBarPcd';
import DetailJobsPcd from '../lib/components/DetailJobsPcd';
//style
import {  Header, Main } from '../lib/assets/style-components/Feed';

const JobDetailPcd = (props) => {
    const { id } = props.location.aboutProps;
    const [detail, setDetail] = useState({});

    useEffect(()=>{
        handleDetails();
    }, [])

    async function handleDetails() {
        const response = await ShowjobDetails(id);
        const { titulo,  descricao} =  response.vagas;
        const { razao_social } =  response.vagas.Usuario_Empresa;
        const { pais, estado, cidade, bairro, logradouro, numero, complemento } =  response.vagas.Endereco;


        setDetail({name:titulo, description:descricao, company:razao_social, country:pais, state:estado, city:cidade, nbh:bairro, street:logradouro, number:numero, apt:complemento });
    };

    return (
        <>
            <Header>
                <SearchBarPcd/>
            </Header>

            <Main>
                <SideMenuPcd/>
                <DetailJobsPcd props={detail}/>
            </Main>
        </>
    );
};

export default JobDetailPcd;