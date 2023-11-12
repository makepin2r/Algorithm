function solution(s) {
    const sign = s.at(0).toString;
    return sign === NaN ? 
        sign === "+" ? +s.slice(1) 
        : +s.slice(1) * -1
        : +s;
}