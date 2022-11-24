function solution(s, n) {
    var answer = '';
    let arr = []
    for(let i = 0; i < s.length; i++){
        arr.push(s.charCodeAt(i));
        if(65 <= arr[i] && arr[i] <= 90) {
            arr[i] += n;
            if(arr[i] > 90) arr[i]-= 26;
        }else if(97 <= arr[i] && arr[i] <= 122) {
            arr[i] += n;
            if(arr[i] > 122) arr[i]-= 26;
        }
        answer += String.fromCharCode(arr[i])
    }
    return answer;
}

// const upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
// const lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','u','z']
// function solution(s,n){

// }


const s = "a B z"	
const n = 4

console.log(solution(s,n))
