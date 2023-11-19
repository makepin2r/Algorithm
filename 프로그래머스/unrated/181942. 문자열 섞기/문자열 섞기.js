function solution(str1, str2) {
    return [...str1].reduce((total, v, i) => total + v + str2[i], "");
}