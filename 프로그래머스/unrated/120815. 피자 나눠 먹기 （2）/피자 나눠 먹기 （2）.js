function solution(n) {
    return getPizzaCnt(n, 1);
}

// 유클리드 호제법
const getPizzaCnt = (n, cnt) => (cnt * 6) % n ? getPizzaCnt(n, cnt + 1) : cnt;