import React from 'react';

import { Main, Title, Card } from '../assets/css/SelectUser';

const SelectUser = ({ onClick }) => {
    return(
        <Main>
            <Title>
                Por favor selecione um usuário
            </Title>

            <Card  
                id="deficiente" 
                onClick={e => onClick(e.target.id)}
                tabIndex={0}
            >
                Sou Deficiente
            </Card>
            
            <Card 
                id="empresa" 
                onClick={e => onClick(e.target.id)}
                tabIndex={0}
            >
                Sou Empresa 
            </Card>
            
            <Card 
                id="freelancer" 
                onClick={e => onClick(e.target.id)}
                tabIndex={0}
            >
                Sou Freelancer
            </Card>
        </Main>
    )
}

export default SelectUser;
