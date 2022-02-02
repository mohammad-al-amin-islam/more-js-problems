function reverseString(letter){
    let tempString = '';
    for(let element of letter){
        tempString = element + tempString;
    }
    return tempString;
}
const result = reverseString('Hello , how are you?');
console.log(result);
