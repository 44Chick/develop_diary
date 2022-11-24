function solution(new_id) {
    var answer = '';
    answer = new_id.replace(/[^a-zA-Z0-9-_.]/g, '');
    answer = answer.toLowerCase();
    answer = answer.replace(/(\.)\1{1,}/g,'.');
    answer = answer.replace(/^\./g,'').replace(/\.$/g,'')
    answer = answer.slice(0,15);
    answer = answer.replace(/^\./g,'').replace(/\.$/g,'')
    if(answer.length === 0) answer = 'a';
    if(answer.length < 3) answer += answer[answer.length-1].repeat(3-answer.length)
    return answer;
}


const strings = "...!@BaT#*..y.abcdefghijklm"
console.log(solution(strings));