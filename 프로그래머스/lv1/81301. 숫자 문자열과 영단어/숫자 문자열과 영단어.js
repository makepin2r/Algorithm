function solution(s) {
    let answer = s;
    const words = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine"
    ]
    
    for(let i = 0 ; i < words.length; ++i){
        const reg = new RegExp(`${words[i]}`,'g')
        answer = answer.replace(reg, i)
    }
    
    return Number(answer);
}