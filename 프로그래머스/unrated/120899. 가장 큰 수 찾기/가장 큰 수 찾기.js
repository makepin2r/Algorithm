function solution(array) {
    return array.reduce((result, v, i) => v > result[0] ? [v, i] : result, [0,0]);
}