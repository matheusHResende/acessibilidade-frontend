export default function ReturnRG(rg){
    const first = rg.substring(0,2);
    const second = rg.substring(2, 5);
    const tird = rg.substring(5, 8);
    const last = rg.substring(8, rg.length);
    return `${first}.${second}.${tird}-${last}`
}