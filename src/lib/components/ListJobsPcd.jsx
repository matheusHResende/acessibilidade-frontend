import React, { useState, useEffect } from 'react';
import ListAllJobs from '../../requests/pcd/ListAllJobs';
import '../assets/css/ListJobsPcd.css';



const ListJobsPcd = (props) => {
    const [idJob, setidVaga] = useState('');
    const [jobs, setJobs] = useState([]);

    useEffect(()=>{
        const response = await ListAllJobs(idJob);
        
        const newResponse = response.filter(function (el){
            return el.ativo == true;
        });
        setJobs([...newResponse]);
    }, []);


    return(
        <div className="pcd-jobs-content">
            <ul className="pcd-jobs-compiled">
                {jobs.map(function(jobs, id){
                    return(
                        <li className="pcd-jobs" key={jobs.id}> 
                            <h2 className="pcd-jobs-opportunities">{jobs.titulo}</h2>
                            <label htmlFor="description" className="enterprise-name">{jobs.Usuario_Empresa.razao_social}</label>
                            <label htmlFor="description" className="opportunities-description">Quantidade de vagas: {jobs.quantidade_vagas}</label>
                            <label htmlFor="description" className="opportunities-description">Localidade: {jobs.Endereco.cidade} - {jobs.Endereco.estado}</label>
                            <button className="btn-see-more">Ver mais</button>
                            <button className="btn-apply">Aplicar</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default ListJobsPcd; 