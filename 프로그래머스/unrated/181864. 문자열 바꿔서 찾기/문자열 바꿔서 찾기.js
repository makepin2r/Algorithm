function solution(myString, pat) {
    const target = [...pat].map(v => v === "A" ? "B" : "A").join(""); // 길이가 더 짧은 pat을 반전시켜준다.
    return +myString.includes(target);
}