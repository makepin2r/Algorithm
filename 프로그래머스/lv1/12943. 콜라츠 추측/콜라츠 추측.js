function solution(num) {
    let cnt = 0;
    while(num !== 1){
        if(num % 2 === 0) // 짝수
            num /= 2;
        else // 홀수
            num = num * 3 + 1;
        ++cnt;
        
        if(cnt >= 500) {
            return -1;
        }
            
    }
    return cnt;
}