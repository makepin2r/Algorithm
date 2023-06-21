function solution(N, stages) {
    let users = stages.length; // 도전중인 플레이어 수 계산용
    let answer = new Map();
    
    // map 초기화
    for(let i = 1; i <= N; ++i){
        answer.set(i, 0); 
    }
    
    // 도전중인 플레이어 수 
    stages.forEach(v => {
        if(v <= N) // 마지막 스테이지 클리어한 데이터는 제외
            answer.set(v, answer.get(v) + 1)
    })

    // 실패율 계산
    for(let [k,v] of answer){
        let temp = v
        answer.set(k, v/users) 
        users -= temp;
    }
    
    // 실패율 높은 순으로 내림차순 정렬
    return [...new Map([...answer.entries()].sort((a, b) => b[1] - a[1])).keys()];
}