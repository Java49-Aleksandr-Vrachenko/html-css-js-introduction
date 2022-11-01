
function fromStringToNumber(string, base) {
    
             let result = 0;
             for (let i = 0; i < string.length; i++) {

                let code = string.charCodeAt(i) - 55;
                result = result * base + code;
             }
             return result;
        
}
console.log(fromStringToNumber("JAVA", 36));



function fromNumberToString(number, base) {
    number = Math.abs(number);
    let res = "";
    do {

        let digit = number % base;

        if (base == 36){
            let sym = String.fromCharCode(digit + 55);
            res = sym + res;
        }else{
            let sym = digit == 0 ? '0' : '1';
            res = sym + res;
        }
        
        number = Math.trunc(number / base);

     } while(number != 0);
    
     return res;
 
}
console.log(fromNumberToString(900550, 36));
