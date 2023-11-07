function solution(arr, intervals) {
    const answer = [];
    intervals.map(v => {
        for(let i = v[0]; i <= v[1]; ++i){
            answer.push(arr[i])
        }
    });
   return answer;
}