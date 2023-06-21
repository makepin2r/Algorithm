function solution(my_str, n) {
    let answer = [];
    let i = 0;
    while(i < my_str.length){
        answer.push(my_str.slice(i, i+n));
        i += n;
        console.log(answer)
    }
    
    return answer;
}