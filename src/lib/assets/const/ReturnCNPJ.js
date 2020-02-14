export default function ReturnCNPJ(cnpj){
    const first = cnpj.substring(0,2);
    const second = cnpj.substring(2, 5);
    const tird = cnpj.substring(5, 8);
    const afterBar = cnpj.substring(8, 12);
    const last = cnpj.substring(12, cnpj.length);
    return `${first}.${second}.${tird}/${afterBar}-${last}`
}