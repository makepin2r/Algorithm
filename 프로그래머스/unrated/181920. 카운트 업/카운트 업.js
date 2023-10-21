function solution(start_num, end_num) {
    const answer = [start_num];
    for(let i = start_num + 1; i <= end_num; ++i){
        answer.push(i);
    }
    return answer;
}