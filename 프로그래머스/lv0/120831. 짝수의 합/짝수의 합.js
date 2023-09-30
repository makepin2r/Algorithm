function solution(n) {
    let answer = 0;
    for(let i = (n % 2 === 0 ? n : n - 1); i > 0; i -=2)  {
        answer += i;
    }
    return answer;
}