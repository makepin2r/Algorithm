function solution(n) {
    let answer = 0;
    while(n > 0) {
        answer += (n % 2 === 0 ? n**2 : n);
        n -= 2;
    }
    return answer;
}