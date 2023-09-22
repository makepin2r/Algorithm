function solution(s) {
    return s.split(" ").map(v => v.charAt(0).toUpperCase() + v.slice(1, v.length).toLowerCase()).join(" ");
}