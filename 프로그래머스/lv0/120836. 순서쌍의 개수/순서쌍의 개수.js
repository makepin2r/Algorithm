function solution(n) {
    let count = 0;
    for(let i = 1; i < Math.sqrt(n); ++i) { n % i === 0 && count++; }
    count = count * 2 + (Math.sqrt(n) === ~~(Math.sqrt(n)) ? 1 : 0);
    return count;
}