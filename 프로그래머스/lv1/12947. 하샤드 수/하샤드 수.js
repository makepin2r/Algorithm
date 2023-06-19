function solution(x) {
    let num = String(x).split("").reduce((acc, cur) => Number(acc) + Number(cur))
    return x % num === 0;
}