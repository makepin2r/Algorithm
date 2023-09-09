function solution(a, b) {
    return String(a)+b >= String(b)+a ? Number(String(a)+b) : Number(String(b)+a);
}