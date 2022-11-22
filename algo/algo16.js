function solution(numbers) {
    let temp = []
    for (let i = 0; i + 1 < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++)
            temp.push(numbers[i] + numbers[j]);
    }
    set = new Set(temp);
    let answer = Array.from(set).sort();
    answer.sort((a, b) => a - b)
    return answer;
}
const a = [2, 1, 3, 4, 1]
console.log(solution(a))