export default function Authentication(){
    const token = !!localStorage.getItem('key');
    return token ? true : false;
}