function solution(n) {
    var answer = 0;
    n = n.toString(3).split("").reverse().join("");;
    answer = parseInt(n,3)
    return answer;
}

console.log(solution(125))