function solution(strings, n) {
    // let answer = [];
    // for(let i = 0; i < strings.length; i++){
    // }
    strings.sort((a, b) => {
        let sorts = 0;
        if(a[n] > b[n]) sorts = 1;
        else if(a[n] < b[n]) sorts =  -1;
        else{
            if(a > b) sorts = 1;
            else if(a < b) sorts = -1;
        }
        return sorts 
    })

    return strings;
}

const n = 1;
const strings = ["sun", "bed", "car"]
console.log(solution(strings, n))