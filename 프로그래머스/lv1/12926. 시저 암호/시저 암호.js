function solution(s, n) {
    let answer = s.split("")
    let result = ""
    
    answer.forEach(data => {
        let target = data.charCodeAt(0)
        let start = 65;
        if(target >= 97) start = 97
        
        if(target !== 32) target = start + (target + n - start) % 26

        result += String.fromCodePoint(target);
    })
    
    return result;
}