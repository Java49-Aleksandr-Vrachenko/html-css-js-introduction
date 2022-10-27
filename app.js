
function sumDigits(number) {
    if(number < 0) {
        number =- number;
    }
    let sum = 0;
    let res = 0;
    for(let i = 0;number > 0;i++) {
        res = number % 10;
        sum += res;
        number /= 10;
    }
    return sum;
}
console.log(sumDigits(-2222));

function sumDigits1(number) {
    if(number < 0){
        number =- number;
    }
    let res = String(number);
    let sum = 0;

    for(let i = 0; i < res.length; i++) {
         sum += Number(res[i]);
    }
    return sum;
}
console.log(sumDigits1(-2222));
