function solution(n) {
    var answer = 0;
    for (let j = 1; j <= Math.sqrt(n); j++) {
        if (n % j === 0) {
            answer += j + n/j;
            console.log(answer)
            if(j === Math.sqrt(n)) answer -= j
        }
    }
    return answer;
}

const l = 12;
console.log(solution(l))

// console.log(Math.sqrt(4)%1)