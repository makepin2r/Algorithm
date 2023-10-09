function solution(s){
    if(s.at(0) === ')' || s.at(-1) === '(') return false;
    let cnt = 0;
    for(let i = 0; i < s.length; ++i){
        if(s.at(i) === '(') ++cnt; // 괄호 열기. ++카운트
        else {
            if(cnt === 0) return false; // 열린 괄호가 없는데 닫는 괄호가 나올 경우 false
            else --cnt; // 괄호 닫기. --카운트
        }
    }
    return cnt === 0 ? true : false; // 문자열이 끝났는데 열린 괄호가 다 닫히지 않았을 경우 false
}