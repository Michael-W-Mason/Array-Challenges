function betterThanAverage(arr) {
    var sum = 0;
    for(let i of arr){
        sum += i;
    }
    let avg = sum / arr.length;
    var count = 0
    for(let i of arr){
        i > avg ? count++ : count;
    }
    // count how many values are greated than the average
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4
