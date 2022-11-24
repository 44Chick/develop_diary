function solution(star) {
    let answer = ''
    for (let i = 1; i <= star; i++) {
        for (let j = 0; j < star - i; j++) {
            answer += ' '
        }
        for (let j = 0; j < i * 2 - 1; j++) {
            answer += '*'
        }
        if (i < star) answer += '\n'
    }
    console.log(answer)
}
let star = 9;
solution(star)