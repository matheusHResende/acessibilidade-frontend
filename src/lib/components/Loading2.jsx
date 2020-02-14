import React from 'react';

import { Loader, Main } from '../assets/css/Loading';
import EsqueciSenha from '../../requests/EsqueciSenha';

const Loading2 = ({ usuario, responseGet }) => {
    setTimeout(async () => {
        const response = await EsqueciSenha(usuario)
        responseGet( response )
    }, 10)
    return(
        <Main>
            <Loader></Loader>
        </Main>
    )
}

export default Loading2;