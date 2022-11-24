function solution(n, m) {
    var answer = [];
    const div = (a,b) => {
        return b === 0 ? a: div(b, a % b)
    }
    answer[0] = div(n,m)
    answer[1] = n*m / div(n,m)
    return answer
}

const a = 3
const b = 12




console.log(solution(a,b))