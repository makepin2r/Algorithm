function solution(s) {
    let arr = s.split(" ");
    arr = arr.map(item => Number(item));
    return Math.min(...arr) + " " + Math.max(...arr);
}