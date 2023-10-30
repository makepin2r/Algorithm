function solution(cipher, code) {
    return [...cipher].map((v, i) => (i + 1) % code === 0 ? v : "").join("");
}