function solution(answers) {
    let answer = []
    let scores = [0, 0, 0];
    const s1 = [1,2,3,4,5]
    const s2 = [2,1,2,3,2,4,2,5]
    const s3 = [3,3,1,1,2,2,4,4,5,5]
    
    for(let i = 0; i < answers.length; ++i){
        if(answers[i] === s1[i%(s1.length)]) scores[0] += 1;
        if(answers[i] === s2[i%(s2.length)]) scores[1] += 1;
        if(answers[i] === s3[i%(s3.length)]) scores[2] += 1;
    }

    const max = Math.max(...scores);

    for(let i = 0; i < scores.length; ++i){
        if (max === scores[i]) answer.push(i+1)
    }
    
    return answer
}