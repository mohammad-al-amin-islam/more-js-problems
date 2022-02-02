const names =['habul','babul', 'cabul', 'dabul' ,'ebul','habul','babul', 'cabul', 'labul'];


function removeDuplicate(names){
    const unique = [];

    /* for(let i= 0;i<names.length;i++){
        if (unique.indexOf(names[i]) == -1){
            unique.push(names[i]);
        }
    }
    return unique; */


    //using for of loops
    for(const value of names){
        if (unique.indexOf(value) == -1){
            unique.push(value);
        }
    }
    return unique;
}

const result = removeDuplicate(names);
console.log(result);