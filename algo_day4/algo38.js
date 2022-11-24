function solution(s) {
    var answer = '';
    s = s.split(' ');
    s = s.map(v => Number(v))
    s = s.sort((a,b) => a -b)
    answer += `${s[0]} ${s[s.length-1]}`
    return answer;
}

function solution(s) {
    var answer = '';
    s = s.split(' ');
        return Math.min(...s)+' '+Math.max(...s);
}


const s = "1 2 3 4";
console.log(solution(s))