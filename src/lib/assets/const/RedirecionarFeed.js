export default function RedirecionarFeed({ history, response } ){
    const id = response.data.user.id_tipo_usuario
    
    switch(id){
        case 1:
            history.push('/feedpcd')
            break;
        case 2:
            history.push('/feedempresa')
            break;
        case 3:
            history.push('/feedfreelancer')
            break;
        default:
    }
}