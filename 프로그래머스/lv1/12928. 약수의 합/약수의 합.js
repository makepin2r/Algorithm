function solution(n) {
    var answer = 0;
    for(let i = 1; i <= Math.floor(Math.sqrt(n)); ++i){
        if(n % i === 0){
            answer += i;
            answer += (n / i === i ? 0 : n / i) 
            
            console.log(i)
        }
    }
    return answer;
}