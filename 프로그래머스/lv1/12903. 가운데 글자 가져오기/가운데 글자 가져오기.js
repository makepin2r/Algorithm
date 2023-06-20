function solution(s) {
    const target = Math.floor(s.length / 2);
    return s.slice((s.length % 2 === 1? target : target - 1), target+1);
}