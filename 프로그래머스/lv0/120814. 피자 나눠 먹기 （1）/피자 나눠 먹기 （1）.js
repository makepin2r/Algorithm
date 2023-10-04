function solution(n) {
    return Math.trunc(n / 7) + (n % 7 > 0 ? 1 : 0);
}