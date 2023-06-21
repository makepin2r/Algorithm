function solution(N, stages) {
    let sortStage = [...stages].sort((a,b) => a-b);
    let users = stages.length; // 도전중인 플레이어 수 계산용
    let answer = new Map();
    for(let i = 1; i <= N; ++i){
        answer.set(i, 0); // map 초기화
    }
    stages.forEach(v => {
        // 마지막 스테이지 클리어한 데이터 제외
        if(v <= N) answer.set(v, answer.get(v) + 1) // 여기가 이상허다
    })

    for(let [k,v] of answer){
        let temp = v
        answer.set(k, v/users) // 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
        users -= temp;
    }
    return [...new Map([...answer.entries()].sort((a, b) => b[1] - a[1])).keys()];
}