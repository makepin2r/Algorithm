function solution(my_string, num1, num2) {
    return [...my_string].map((v, i) => i === num1 ? my_string.at(num2) : i === num2 ? my_string.at(num1) : v).join("");
}