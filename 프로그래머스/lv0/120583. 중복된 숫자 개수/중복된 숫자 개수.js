function solution(array, n) {
    return array.reduce((total, v) => total + (v === n ? 1 : 0), 0);
}