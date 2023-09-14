function solution(myString) {
    const small = "abcdefghijklmnopqrstuvwxyz";
    const capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = myString;
    for(let i = 0; i < 26; ++i) {
        myString = result;
        const regex = new RegExp(`[${small[i]}]`, 'gi');
        result = myString.replace(regex, capital[i]);
    }
    return myString;
}