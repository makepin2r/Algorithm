function solution(numbers, n) {
    return numbers.reduce((total, v) => total + (total <= n ? v : 0), 0);
}