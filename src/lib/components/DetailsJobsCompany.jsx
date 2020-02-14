import React from 'react';
import { Link } from 'react-router-dom';

//style
import { FaPen } from "react-icons/fa";
import {  JobDetail, HeadDetail, Button, Details } from '../assets/style-components/JobDetail';


const DetailJobsPcd = ({ name, company, description, street, city, number, nbh, state }) => {
        // const { name, company, description, street, city, number, nbh, state } = props.props;
    return(
        <>
            <JobDetail>
                <HeadDetail>
                    <h2 tabIndex='0'>{name}</h2>
                    <Button tabIndex='8' arial-label='Candidatar-se'><FaPen/> Alterar</Button>
                    <label tabIndex='1'>{company}</label>
                </HeadDetail>
                <Details>
                    <h3 tabIndex='2'>Descrição</h3>
                    <label tabIndex='3'><p>Sobre</p> </label>
                    <label tabIndex='4'>{description}</label>
                    <label tabIndex='5'><p>Localização</p></label>
                    <label tabIndex='6'>{street}, nº {number} - {nbh}</label>
                    <label tabIndex='7'>{city} - {state}</label>
                </Details>
            </JobDetail>
        </>
    );
};

export default DetailJobsPcd; 