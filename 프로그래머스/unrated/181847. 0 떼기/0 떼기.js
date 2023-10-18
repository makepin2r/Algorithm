function solution(n_str) {
    let targetIdx = 0;
    for(let i = 0; i < n_str.length; ++i){
        if(n_str.at(i) !== '0') {
            targetIdx = i; break;
        }
    }
    return n_str.slice(targetIdx);
}