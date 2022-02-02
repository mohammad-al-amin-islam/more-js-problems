function woodCalculator(chairQuantity,tableQuatity,bedQuantity){
    const perChair = 3;
    const perTable = 10;
    const perBed = 50;

    //wood calculation
    const chairWoodQuantity = chairQuantity * perChair;
    const tableWoodQuantity = tableQuatity * perTable;
    const bedWoodQuantity = bedQuantity * perBed;

    //adding all wood quantity
    const totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;
    return totalWood;
}

const myNeedWood = woodCalculator(1,2,3);
console.log(myNeedWood);
