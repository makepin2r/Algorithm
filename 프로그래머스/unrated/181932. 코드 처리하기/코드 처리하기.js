function solution(code) {
    let ret = '';
    let mode = 0;
    
    for(let i = 0; i < code.length; ++i){
        if(code[i] === "1"){
            mode = mode^1; // XOR 연산자로 토글
            continue; // "1" 문자 자체는 패스
        }
        // mode === 0 일 때 짝수 인덱스 문자 추가  
        // mode === 1 일 때 홀수 인덱스 문자 추가
        // 인덱스의 나머지값과 mode가 일치할 때의 문자만 추가해줌
        (i % 2 === mode) && (ret += code[i]);
    }
    
    return ret.length === 0 ? "EMPTY" : ret;
}