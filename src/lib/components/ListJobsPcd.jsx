import React from 'react';

import '../assets/css/ListJobsPcd.css';


const ListJobsPcd = () => {

    return(
        <div className="pcd-jobs-content">
            <ul className="pcd-jobs-compiled">
                <li className="pcd-jobs"> 
                    <h2 className="pcd-jobs-opportunities">Nome da Vaga</h2>
                    <label htmlFor="description" className="enterprise-name">Nome da empresa</label>
                    <label htmlFor="description" className="opportunities-description">(?)Vagas:2</label>
                    <label htmlFor="description" className="opportunities-description">(?)Localidade:Belo Horizonte</label>
                    <button className="btn-see-more">Ver mais</button>
                    <button className="btn-apply">Aplicar</button>

                </li>

            </ul>
        </div>
    );
};

export default ListJobsPcd;