function solution(n) {
    return [...n.toString()].reduce((total, v) => total += +v, 0);
}