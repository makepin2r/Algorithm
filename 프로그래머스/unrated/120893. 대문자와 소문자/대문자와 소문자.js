function solution(my_string) {
    return my_string.split("").map(v => {
        const ascii = v.charCodeAt();
        return String.fromCharCode(ascii < 97 ? ascii + 32 : ascii - 32);
    }).join("");
}