function solution(numbers) {
    numbers.sort((a, b) => a - b);

    // 가장 작은 두 수의 곱과 가장 큰 두 수의 곱 중 더 큰 값을 찾기
    const n = numbers.length;

    return Math.max(numbers[0] * numbers[1], numbers[n - 1] * numbers[n - 2]);
}
