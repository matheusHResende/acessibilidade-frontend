import React, { useState, useEffect } from 'react';
import ListAllMyJobs from '../../requests/company/ListAllMyJobs';
import '../assets/css/ListJobsEmpresa.css';


const ListJobsDesactiveEmpresa = (props) => {
    const idCompany = props.props.id;
    const [myJobs, setMyJobs] = useState([]);

    useEffect(()=>{
        handleJobs();
    }, []);

    async function handleJobs() {
        const response =  await ListAllMyJobs(idCompany);
        
        const newResponse = response.filter(function (el){
            return el.ativo == false;
        });
        setMyJobs([...newResponse]);
    };

    return ( 
        <div className="empresa-jobs-content">
            <ul className="empresa-jobs-compiled">
                {myJobs.map(function(myJobs, id){
                    return(
                        <li className="empresa-jobs-opportunities" key={myJobs.id} id={`status-${myJobs.ativo}`}> 
                            <h2 className="empresa-jobs-name">{myJobs.titulo}</h2>
                            <label htmlFor="desc" className="empresa-opportunities-desc">Quantidade de vagas: {myJobs.quantidade_vagas}</label>
                            <label htmlFor="desc" className="empresa-opportunities-desc">Localidade: {myJobs.Endereco.cidade} - {myJobs.Endereco.estado} </label>
                            <button className="btn-change">Alterar</button>
                            <button className="btn-delete">Deletar</button>
                        </li>
                    )
                })
            }
            </ul>
        </div>
    )
};

export default ListJobsDesactiveEmpresa;