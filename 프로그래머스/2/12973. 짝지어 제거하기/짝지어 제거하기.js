function solution(s)
{
    let temp = [];
    for(let v of s){
        if(temp.length > 0 && temp.at(-1) === v) {
            temp.pop();
        } else temp.push(v);
    }
    return temp.length === 0 ? 1 : 0;
}