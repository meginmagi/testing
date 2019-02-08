function sum(a, b) {
    const result = Number(a) + Number(b);
    console.log(result);
    if(Number.isNaN(result)){
        throw new Error('ei lukuja');
    }
    return result;
}
module.exports = sum;