function solution(lottos, win_nums) {
    let answer = [];
    let min_n = lottos.filter( v => win_nums.includes(v)).length;
    let max_n = lottos.filter(n => n === 0 ).length + min_n;
    answer[0] =  max_n < 2 ? 6 : 7 - max_n;
    answer[1] =  min_n < 2 ? 6 : 7 - min_n;
    return answer;
}

const lottos = [44, 1, 0, 0, 31, 25]
const win_num = [31, 10, 45, 1, 6, 19]
console.log(solution(lottos, win_num))