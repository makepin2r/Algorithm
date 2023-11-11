function solution(a, b, c) {
    const set = new Set([a, b, c]);
    console.log(set)
    const setLength = set.size;
    return setLength === 1 ? (a + b + c) * (Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2)) * (Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3)) : setLength === 2 ? (a + b + c) * (Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2)) : (a + b + c)
}