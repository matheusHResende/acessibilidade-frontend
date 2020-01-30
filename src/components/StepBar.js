import React, {useState, useEffect} from 'react';

import '../lib/assets/css/StepBar.css';

const StepBar = ({num}) => {
    const [progress, setProgress] = useState(0);
    console.log(num)
    useEffect(() => setProgress(num),[num]);

    switch(progress){
        case 1:
            document.getElementById("list-item-1").classList.add('active')
        break;
        case 2:
            document.getElementById("list-item-1").classList.add('active')
            document.getElementById("list-item-2").classList.add('active')
        break;
        case 3:
            document.getElementById("list-item-1").classList.add('active')
            document.getElementById("list-item-2").classList.add('active')
            document.getElementById("list-item-3").classList.add('active')
        break;
        case 4:
            document.getElementById("list-item-1").classList.add('active')
            document.getElementById("list-item-2").classList.add('active')
            document.getElementById("list-item-3").classList.add('active')
            document.getElementById("list-item-4").classList.add('active')
        break;
        default: 
    }

    return(
    <div className="container">
        <ul className="progressbar">
            <li className="list-item" id="list-item-1">Tipo de usuário</li>
            <li className="list-item" id="list-item-2">Informações básicas</li>
            <li className="list-item" id="list-item-3">informações pessoais</li>
            <li className="list-item" id="list-item-4">informações regionais</li>
        </ul>
    </div>
    )
}

export default StepBar;
