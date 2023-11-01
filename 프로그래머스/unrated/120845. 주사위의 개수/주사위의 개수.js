function solution(box, n) {
    var answer = 0;
    return box.map(v => Math.trunc(v / n)).reduce((total, v) => total * v, 1);
}