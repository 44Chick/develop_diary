function solution(s) {
    var answer = '';
    answer = s.split('').sort().reverse().join('')
    return answer;
}

const strings = "Zbcdefg"
console.log(solution(strings))