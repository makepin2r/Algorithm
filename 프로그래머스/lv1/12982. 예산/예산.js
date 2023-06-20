function solution(d, budget) {
    let result = 0
    d.sort((a,b) => a-b); // 작은 수부터
    for(let i = 0; i < d.length; ++i){
        if(d[i] > budget) break;
        budget -= d[i]
        ++result;
    }
    
    return result;
}
