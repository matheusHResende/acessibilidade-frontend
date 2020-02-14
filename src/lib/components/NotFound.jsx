import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Text, BackButton } from '../assets/css/NotFound'

const NotFound = () => (
    <Container>
        <Text>
            Página não encontrada!
        </Text>

        <Link to={'/'} tabIndex="0">
            <BackButton alt="Voltar para o menu">
                <i className="material-icons">
                    arrow_back
                </i>
            </BackButton>
        </Link>
    </Container>
)
export default NotFound;