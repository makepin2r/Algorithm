function solution(number) {
    return number.toString().split("").reduce((total, v) => total + +v, 0) % 9;
}