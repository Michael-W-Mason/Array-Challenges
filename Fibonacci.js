function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    // your code here
    for(let i = 0; i < n - 2; i++){
        let j = i + 1;
        let fib = fibArr[i] + fibArr[j];
        fibArr.push(fib);
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
