function solution(t, p) {
    let count = 0;
    for(let i = 0; i <= t.length - p.length; ++i){
        Number(t.substr(i, p.length)) <= Number(p) && ++count;
    }
    return count;
}