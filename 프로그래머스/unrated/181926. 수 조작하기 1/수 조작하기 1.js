function solution(n, control) {
    var answer = n;
    const o = {
        "w" : 1,
        "s" : -1,
        "d" : 10,
        "a" : -10,
    }

    control.split('').forEach(e => answer += o[e])
    return answer;
}