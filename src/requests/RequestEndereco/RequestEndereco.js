import cepBase from '../../lib/assets/const/ComplementoDeCEP';

export default async function RequestEndereco(cep){
    try{
        const response = await cepBase.get(`/${cep}/json`);
        return response
    }catch(error){
        console.log(error)
    }
}