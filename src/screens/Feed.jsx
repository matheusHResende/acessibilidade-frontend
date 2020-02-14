import React from 'react';

const dados ={
    id: 1,
    nome: 'Teste',
    email: 'test@email',
    usuario: 'teste',
    id_tipo_usuario: 3
}

const Feed = () => {
    // const dados = JSON.parse(localStorage.getItem('dados'));
    return (
        <ul>
            <li>id:{dados.id}</li>
            <li>nome:{dados.nome}</li>
            <li>email:{dados.email}</li>
            <li>usuario:{dados.usuario}</li>
            <li>tip_usuario:{dados.id_tipo_usuario}</li>
        </ul>
    )
}

export default Feed;
