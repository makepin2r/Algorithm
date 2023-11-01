function solution(my_string) {
    const answer = [];
    for(let i = 0; i < my_string.length; ++i){
        const target = my_string.at(i);
        if(Number(target) == target) answer.push(Number(target));
    }
    return answer.sort((a, b) => a - b);
}