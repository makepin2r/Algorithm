function solution(num_list) {
    const answer = [];
    num_list.map((v) => answer.unshift(v));
    return answer;
}