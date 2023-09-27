function solution(n) {
    const oneCount = n.toString(2).split('1').length - 1;
    let num = n + 1;
    while(true){
        if(num.toString(2).split('1').length - 1 === oneCount) return num;
        ++num;
    }
}