function solution(n) {
    let answer = 0;
    let prime = new Array(n);
    for(let i = 0; i <= n; i++) prime[i] = true;
    prime[0] = false; prime[1] = false;
    for(let i = 2; i*i <= n; i++){
        if(prime[i] === true){
            for(let j = i * 2; j<= n; j+=i)
                prime[j] = false;
        }
    }
    for(let i = 0; i <= n; i++) {
        if(prime[i] === true) {
            answer++
        }
    }
    return answer;
}



const num = 5;
console.log(solution(num))


// function solution(n) {
//     let answer = n - 1;
//     for(let i = 2; i <= n; i++){        
//         for(let j = 2; j <= Math.sqrt(i); j++){
//             if(i % j === 0) {
//                 answer--;
//                 break;
//             }
//         }
//     }
//     return answer;
// }