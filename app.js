let number = "045451587";
let teudatStrNumber = Array.from(number);
 let charCod0 = "0".charCodeAt();

checkTeudatZhut(teudatStrNumber);

 function checkTeudatZhut(teudatStrNumber) {

    let numTZ = teudatStrNumber.map(function(symbol,index){
        let value = symbol.charCodeAt() - charCod0;
        if(index % 2 != 0){
            value *= 2;
            if(value > 9){
                value -= 9;
            }
        }
        return value;
    });
    
    let Sum = numTZ.reduce(function(sum, res){
        return sum + res;
    },0);

    let contrSum = Sum % 10 == 0 ? true : false;

    console.log("TZ number = ",number, "Valid = ",contrSum);

    return contrSum;
 }
/**************************************************************************/
