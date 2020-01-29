import React from 'react';

import '../assets/css/ListJobsEmpresa.css';


const ListJobsEmpresa = () => {

    return ( 
        <div className="empresa-jobs-content">
            <ul className="empresa-jobs-compiled">
                <li className="empresa-jobs-opportunities">            
                        <h2 className="empresa-jobs-name">Vaga de repositos</h2>
                        <label htmlFor="desc" className="empresa-opportunities-desc">(?)Candidatos:2</label>
                        <label htmlFor="desc" className="empresa-opportunities-desc">(?)Tempo de divulgação: 1 mês</label>
                        <button className="btn-finish">Finalizar</button>
                        <button className="btn-change">Alterar</button>
                        <button className="btn-delete">Deletar</button>
                </li>
            </ul>
        </div>
    )
};

export default ListJobsEmpresa;