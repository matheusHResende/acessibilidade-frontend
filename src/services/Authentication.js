export default function Authentication(){
    const token = !!localStorage.getItem('key');
    
    if(token){
        const dados = JSON.parse(localStorage.getItem('dados'))
        const { id_tipo_usuario } = dados
        return true && id_tipo_usuario
    }else{
        return localStorage.clear() &&  false
    }
}