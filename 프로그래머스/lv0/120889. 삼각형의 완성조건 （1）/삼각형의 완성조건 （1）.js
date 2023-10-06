function solution(sides) {
    sides.sort((a, b) => b - a)
    return sides.at(0) < sides.at(1) + sides.at(2) ? 1 : 2;
}