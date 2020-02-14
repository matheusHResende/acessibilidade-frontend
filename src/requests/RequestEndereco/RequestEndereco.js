import cepBase from '../../lib/assets/const/ComplementoDeCEP';

export default async function RequestEndereco(cep){
    const response = await cepBase.get(`/${cep}/json`);
    return response
}