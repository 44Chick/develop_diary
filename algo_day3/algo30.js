function solution(n) {
    for(let i = 2; i < n; i++){
        if(n % i === 1) return i
    }
}

const num = 10;

console.log(solution(num))