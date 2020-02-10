import React, { useState, useEffect } from 'react';
//request
import ShowjobDetails from '../requests/common-request/ShowJobDetails';
//components
import SideMenuPcd from '../lib/components/SideMenuPcd';
import SearchBarPcd from '../lib/components/SearchBarPcd';
//style
import {  Header, Main } from '../lib/assets/style-components/Feed';

//teste
import jobdetail from '../requests/jobdetai.json';


const JobDetailPcd = (props) => {
    // const { id } = props.location.aboutProps;
    const [detail, setDetail] = useState({});

    useEffect(()=>{
        handleDetails();
    }, [])

    async function handleDetails() {
        const { titulo,  descricao} = await jobdetail.vagas;
        const { razao_social } = await jobdetail.vagas.Usuario_Empresa;
        const { pais, estado, cidade, bairro, logradouro, numero, complemento } = await jobdetail.vagas.Endereco;


        // const res = await ShowjobDetails(id);
        setDetail({name:titulo, description:descricao, company:razao_social, country:pais, state:estado, city:cidade, nbh:bairro, street:logradouro, number:numero, apt:complemento });
    };

    console.log(detail);

    return (
        <>
            <Header>
                <SearchBarPcd/>
            </Header>

            <Main>
                <SideMenuPcd/>

                {/* componentizar */}
                <div>
                    <header>
                        <h2>{detail.name}</h2>
                        <button>Candidatar</button>
                        <label htmlFor="">{detail.company}</label>
                    </header>
                    <main>
                        <label htmlFor="">Sobre </label>
                        <label htmlFor="">{detail.description}</label>
                        <label htmlFor="">Localidade</label>
                        <label htmlFor="">Rua: {detail.street}, nº {detail.number} - {detail.city}</label>
                        <label htmlFor="">{detail.city} - {detail.state}</label>
                    </main>
                </div>
                {/* componentizar */}

            </Main>
        </>
    );
};

export default JobDetailPcd;