function solution(n, m) {
    let min = Math.min(n, m);
    let max = Math.max(n, m);
    let answer = [];
    // 최대공약수
    for(let i = min; i >= 1; --i){
        if(min % i === 0 && max % i === 0){
            answer.push(i);
            break;
        }
    }
    // 최소공배수
    let num = max; // 최소공배수 기준수
    while(true){
        if(num % max === 0 && num % min === 0){
            answer.push(num);
            break;
        }
        ++num;
    }
    
    return answer;
}