import React,{useState, useEffect} from 'react';

import '../lib/assets/css/SelectUserCard.css'

const SelectUser = ({onClick}) => {
    const [id, setId] = useState('')

    useEffect(() =>{
        onClick(id)
    },[id])

    return(
        <main className="main-box">
            <button type="button" className="card" id="deficiente" onClick={e => setId(e.target.id)}>
                <h1>Sou Deficiente</h1>
            </button>
            
            <button className="card" id="empresa" onClick={e => setId(e.target.id)}>
                <h2>Sou Empresa</h2> 
            </button>
            
            <button className="card" id="freelancer" onClick={e => setId(e.target.id)}>
                <h2>Sou Freelancer</h2>
            </button>
        </main>
    )
}

export default SelectUser;
