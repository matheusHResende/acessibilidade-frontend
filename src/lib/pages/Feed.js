import React from 'react';

const Feed = () => {
    const dados = JSON.parse(localStorage.getItem('dados'));
    return (
        <ul>
            <li>id:{dados.id}</li>
            <li>nome:{dados.nome}</li>
            <li>nome:{dados.email}</li>
            <li>nome:{dados.usuario}</li>
            <li>nome:{dados.id_tipo_usuario}</li>
        </ul>
    )
}

export default Feed;