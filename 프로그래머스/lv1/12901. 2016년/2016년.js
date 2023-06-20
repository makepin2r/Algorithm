function solution(a, b) {
    const days = ['FRI','SAT','SUN','MON','TUE','WED','THU'];
    const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let i = b-1;
    month.map((val, idx) => {if(idx < (a-1)) {i += month[idx]} });
    //const i = ((31 + 30) * Math.floor((a - 1) / 2) + 31 * ((a - 1) % dddddd2) + b - 1 + ((a > 2 && a < 9) ? -1 : 0)) % 7;
    return days[i % 7];
}