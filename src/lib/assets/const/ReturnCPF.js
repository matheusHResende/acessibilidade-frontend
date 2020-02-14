export default function ReturnRG(cpf){
    const first = cpf.substring(0,3);
    const second = cpf.substring(3, 6);
    const tird = cpf.substring(6, 9);
    const last = cpf.substring(9, cpf.length);
    return `${first}.${second}.${tird}-${last}`
}