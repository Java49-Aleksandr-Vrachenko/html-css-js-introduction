const str1 = "yellow";
const str2 = "Wolley";

function isAnagram(str1, str2) {
    if (str1.length == str2.length) {
        let res1 = str1.toLowerCase().split('').sort().join('');
        let res2 = str2.toLowerCase().split('').sort().join('');
        if(res1 === res2){
            return true;
        }else{
            return false;
        }
    } else {
        return false;
    }
}
console.log(`str2: ${str2}  is an anagram of the str1: ${str1} ${isAnagram(str1, str2)}`);