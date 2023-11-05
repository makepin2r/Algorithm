function solution(binomial) {
    const [first, operator, second] = binomial.split(" ");
    return operator === '+' ? +first + +second : operator === '-' ? +first - +second : +first * +second;
}