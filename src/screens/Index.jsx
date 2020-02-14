import React from 'react';

import { Main, Header, Logo, Login, FirstSection, Hr, ButtonGroup, Card, HeaderButtonGroup } from '../lib/assets/css/IndexPage';

const Index = ({ history }) => {

    return(
        <Main>
            <Header>
                <Logo/>
                <HeaderButtonGroup>
                    <Login onClick={ () => history.push('/login') } >
                        Entrar
                    </Login>
                    
                    <Login onClick={ () => history.push('/cadastrar') } >
                        Cadastrar
                    </Login>
                </HeaderButtonGroup>
            </Header>

            <FirstSection>
                <p>
                    Conectamos pessoas com deficiência à empregadores e prestadores de serviços.
                </p>
            </FirstSection>

            <Hr />

            <ButtonGroup >
                <Card onClick={ () => history.push('/cadastrar') } >
                    <h2>Sou pessoa com deficiência</h2>
                    <p>Procuro um emprego ou um profissional que possa me ajudar a qualificar ou a cuidade de mim.</p>
                </Card>

                <Card onClick={ () => history.push('/cadastrar') } >
                    <h2>Sou profissional</h2>
                    <p>Procuro por pessoas com deficiência ou empresas que precisem de minha ajuda.</p>
                </Card>
                
                <Card onClick={ () => history.push('/cadastrar') } >
                    <h2>Sou empresa</h2>
                    <p>Procuro por profissionais com deficiência ou profissionais que possam me ajudar a integrar e qualificar pessoas com deficiência em minha empresa.</p>
                </Card>
            </ButtonGroup>
        </Main>
    )
}

export default Index;