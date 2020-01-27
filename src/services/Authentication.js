export default function Authentication(){
    const token = !!localStorage.getItem('key');
    // const dados = !!localStorage.getItem('dados');
    return token ? true : localStorage.clear() &&  false;
}