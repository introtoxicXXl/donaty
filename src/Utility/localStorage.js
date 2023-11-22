const getItem = () => {
    const getDonate = localStorage.getItem('donate');
    if (getDonate) {
        return JSON.parse(getDonate);
    }
    return [];
}
const saveDonate = donate => {
    const donateStringified = JSON.stringify(donate);
    localStorage.setItem('donate', donateStringified);
}
const addToLs = id => {
    const donate = getItem();
    const exists = donate.find(donateId => donateId === id);
    if(!exists){
        donate.push(id);
        saveDonate(donate);
    }
}
export { addToLs, getItem }