console.log("/*********************Task 1********************/");
let numbers = [1, 2, 3, 4, 5];

function minMax(numbers) {
      return numbers.reduce((previousValue, currentValue) => {
            if(currentValue < previousValue[0]) {
                  previousValue[0] = currentValue;
            }
            if(currentValue > previousValue[1]) {
                  previousValue[1] = currentValue;
            }
            return previousValue;
      
      }, [numbers[0], numbers[0]]);
}
console.log(`Input: [${numbers}], Output: [${minMax(numbers)}]`)


console.log("/*********************Task 2********************/");

let strings = ["abc", "old_abc", "lmn", "123", "old_lmn"];
let prefix = "old_";

function deleteWithPrefix(strings, prefix) {
   return strings.filter(s => !s.startsWith(prefix));  
}
console.log(`Input: [${strings}], Prefix: ${prefix}, Output: [${deleteWithPrefix(strings,prefix)}]`);

console.log("/*********************Task 3********************/");

let number = [1,6,3,8,5,2,7,4];

function getSortedEvenOdd(number) {
    return number.slice().sort((a, b) => {
            return a % 2 == 0 && a < b ? -1 : b % 2 == 0 ? 1 : b - a;
      })
}
console.log(`Input: [${number}], Output: [${getSortedEvenOdd(number)}]`);