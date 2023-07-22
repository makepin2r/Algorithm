function solution(a, d, included) {
    // 인덱스가 i일 때 i+1항은 a + i + d이므로 
    // true일 때 더해줌
    let answer = 0;
    for (let i = 0 ; i<included.length; ++i){
        included[i] && (answer += (a + i * d));
    }
    return answer;
}