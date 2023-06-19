function solution(strings, n) {
    let temp = strings.map((data) => data[n] + data).sort().map((data) => data.substr(1))
    return temp
}