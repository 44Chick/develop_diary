# 스코프

스코프(Scope, 유효범위)는 자바스크립트를 포함한 모든 프로그래밍 언어의 기본적인 개념으로 확실한 이해가 필요하다. 먼저 아래 예제의 실행 결과에 대해 생각해보자.


```js
var x = 'global';

function foo () {
  var x = 'function scope';
  console.log(x);
}

foo(); // 'function scope'
console.log(x); // 'global'
```
