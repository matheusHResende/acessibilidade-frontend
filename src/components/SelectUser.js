import React from 'react';

import '../lib/assets/css/SelectUserCard.css'

const SelectUser = ({changeComponent}) => {

    function setForm(id){
        console.log(id)
        // changeComponent(id)
    }

    return(
        <main className="main-box">
            <button className="card" id="deficiente" onClick={e => setForm(e.target.id)}>
                <h1>Sou Deficiente</h1>
            </button>
            
            <button className="card" id="empresa" onClick={e => setForm(e.target.id)}>
                <h2>Sou Empresa</h2> 
            </button>
            
            <button className="card" id="freelancer" onClick={e => setForm(e.target.id)}>
                <h2>Sou Freelancer</h2>
            </button>
        </main>
    )
}

export default SelectUser;
