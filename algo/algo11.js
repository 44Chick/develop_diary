function solution(num) {
    var answer = 0;
    while(num !=1 || answer > 500){
        num % 2 === 0 ? num /= 2 : num = num * 3 + 1;
        answer++;
    }
    return num === 1 ? answer : -1 ;
}

function solution(num) {
    var answer = 0;
    let i;
    for(i = 0; i < 500; i++){
        if( num === 1) break;
        num % 2 === 0 ? num /= 2 : num = num * 3 + 1;
    }
    answer = i < 500 ? i : -1 ;
    return answer;
}