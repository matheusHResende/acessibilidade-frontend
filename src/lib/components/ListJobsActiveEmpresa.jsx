import React, { useState, useEffect } from 'react';
import ListAllMyJobs from '../../requests/Empresa/ListAllMyJobs';
import '../assets/css/ListJobsEmpresa.css';


const ListJobsActiveEmpresa = (props) => {
    const idEmpresa = props.id;

    const [myJobs, setMyJobs] = useState([]);

    useEffect(()=>{
        ListAllMyJobs(idEmpresa,(res) => {
            const newResponse = res.filter(function (el){
                return el.ativo == true;
            });
            setMyJobs([...newResponse]);
        })
    }, []);

    return ( 
        <div className="empresa-jobs-content">
            <ul className="empresa-jobs-compiled">
                {myJobs.map(function(myJobs, id){
                    return(
                        <li className="empresa-jobs-opportunities" key={myJobs.id} id={`status-${myJobs.ativo}`}> 
                            <h2 className="empresa-jobs-name">{myJobs.titulo}</h2>
                            <label htmlFor="desc" className="empresa-opportunities-desc">Quantidade de vagas: {myJobs.quantidade_vagas}</label>
                            <label htmlFor="desc" className="empresa-opportunities-desc">Localidade: {myJobs.Endereco.cidade} - {myJobs.Endereco.estado} </label>
                            <button className="btn-finish">Finalizar</button>
                            <button className="btn-change">Alterar</button>
                        </li>
                    )
                })
            }
            </ul>
        </div>
    )
};

export default ListJobsActiveEmpresa;