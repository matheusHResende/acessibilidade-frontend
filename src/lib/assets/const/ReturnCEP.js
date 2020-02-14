export default function ReturnCEP(cep){
    const inicio = cep.substring(0, 5);
    const fim = cep.substring(5, cep.length);
    return {
        cep,
        mask: `${inicio}-${fim}`
        }
}