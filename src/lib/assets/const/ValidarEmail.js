export default function ValidarEmail(email){
    const usuario = email.substring(0, email.indexOf("@"));
    const dominio = email.substring(email.indexOf("@")+1, email);

    if(
        (usuario.length >=1) &&
        (dominio.length >=3) && 
        (usuario.search("@")=== -1) && 
        (dominio.search("@")=== -1) &&
        (usuario.search(" ")=== -1) && 
        (dominio.search(" ")=== -1) &&
        (dominio.search(".")!== -1) &&      
        (dominio.indexOf(".") >=1)&& 
        (dominio.lastIndexOf(".") < dominio.length - 1)
    ){
        return true
    }else{
        return false
    }
}