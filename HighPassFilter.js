function highPass(arr, cutoff) {
    var filteredArr = [];
    for(i of arr){
        if(i > cutoff){
            filteredArr.push(i);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]
