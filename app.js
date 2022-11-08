console.log("/*********************Task 1********************/");
let string = ["abc","lmn","cd",];
let newString = console.log(ulSurround(string));
function ulSurround(string) {
   
    let newString = string.map(function(elm,ind){
       return "<li>" + elm + "<li>";
    })
    newString.unshift("<ul>");
    newString.push("/ul");
    return newString;
}

console.log("/*********************Task 2********************/");

let strings = ["abc", "lmn","cd","abc","abc"];
let check = "abc";
console.log(count(strings, check));

function count(strings, check){
    let count = 0;
    strings.forEach(function(e) {
        if(check == e)
           count++;
});
    return count;
};

console.log("/*********************Task 3********************/");

let arS = [1,2,3,4,5,6,7];
let arD = [10,20,30,40,50,60,70];
arrayCopy(arS, 3, arD, 4, 3);
console.log("arD=",arD);

function arrayCopy(src, srcPos, dst, dstPos, length) {
    let cpy = src.slice(srcPos, srcPos+length);
    dst.splice(dstPos, 0, ...src.slice(srcPos, srcPos+length));
};

console.log("/*********************Task 4********************/");

let number = [1, 2, 3, 4, 5, 6, 7];
move(number, 2, 4);
console.log(number);

function move(number, index, position) {
    number.splice(index + position, 0, number.splice(index,1)[0]);
}