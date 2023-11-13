function solution(n) {
    let answer = 0;
    if(n < 4) return 0;
    for(let i = 4; i <= n; ++i){
        for(let j = 2; j < i; ++j) {
            // 1과 자기 자신을 제외한 약수가 하나라도 있으면 합성수
            if(i % j === 0) {
                ++answer;
                break;
            }
        }
    }
    return answer;
}