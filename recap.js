const numbers = [1,20,400,-3,90,34,2,6,0,70]
function secondLargestNumber(arr){
    let largestNum = arr [0];
    let secondNumber = arr[0];

    for (let i =0 ;i<arr.length;i++){
        if (arr[i]>largestNum){
            secondNumber = largestNum;
            largestNum = arr[i];
        }
        if (arr[i]>secondNumber && arr[i]<largestNum){
            secondNumber = arr[i];
        }
    }
    return secondNumber;
}
console.log(secondLargestNumber(numbers));