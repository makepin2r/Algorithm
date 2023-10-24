function solution(n, k) {
    const answer = [];
    let v = k;
    while(v <= n){
        answer.push(v);
        v += k;
    }
    return answer;
}