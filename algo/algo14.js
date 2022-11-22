function solution(sizes) {
    var answer = 0;
    let arr_min =[], arr_max=[];
    for(v of sizes){
        arr_min.push(Math.min(...v));
        arr_max.push(Math.max(...v));
    }
    answer = Math.max(...arr_max) * Math.max(...arr_min);
    return answer;
}

console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]]))