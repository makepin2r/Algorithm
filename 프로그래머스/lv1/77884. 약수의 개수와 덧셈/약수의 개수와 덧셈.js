function solution(left, right) {
    let result = 0;
    for(let i = left; i <= right; ++i){
        result += (isMeasureOdd(i) ? i : -i)
        console.log(i, result, isMeasureOdd(i))
    }
    
    return result;
}

function isMeasureOdd(num) {
    let isOdd = false; // 0개에서 시작, 짝수이므로 false
    for(let i = 1; i < num; ++i){
        if(num % i === 0) isOdd = !isOdd;
    }
    return isOdd;
}