function solution(s) {
    let [convertCnt, zeroCnt] = [0, 0];
    while(s !== '1'){
        const replaced = s.toString().replace(/0/g, "");
        zeroCnt += s.length - replaced.length;
        s = replaced.length.toString(2);
        ++convertCnt;
    }
    return [convertCnt, zeroCnt];
}