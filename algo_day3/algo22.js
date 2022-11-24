const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

function solution(s) {
    console.log(s)
    numbers.forEach((v, i) =>{
        console.log(v,i)
        s = s.replaceAll(v,i)
    })
    return Number(s)
}
const strings = "one4seveneight"

console.log(solution(strings))
// const test = strings.replace('one', 1)
// console.log(test)
