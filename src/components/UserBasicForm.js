import React, { useState, useEffect } from "react";

const UserBasic = ({onSubmit, userType}) => {
    const [nome, setNome] = useState('')
    useEffect(() =>{
        switch(userType){
        case 1:
            setNome('Nome Completo');
            break;
        case 2:
            setNome('Nome Fantasia');
            break;
        case 3:
            setNome('Nome Completo');
            break;
        default:
            setNome('Nome Completo');
        }
    },[userType]);

    return(
        <form>
            <label>{nome}</label>
            <input type="text" name="nome" />
            <label>Usuario</label>
            <input type="text" name="user"/>
            <label>Email</label>
            <input type="email" name="email" />
            <label>Senha</label>
            <input type="password" name="password" />
            <label>Confirmar Senha</label>
            <input type="password" name="repeat_password" />
        </form>
    )
}

export default UserBasic;
