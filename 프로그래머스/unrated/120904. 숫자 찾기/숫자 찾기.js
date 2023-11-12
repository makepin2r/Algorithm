function solution(num, k) {
    const target = num.toString().split("").indexOf(k.toString());
    return target !== -1 ? target + 1 : target;
}