# 스코프

스코프는 참조 대상 식별자(identifier, 변수, 함수의 이름과 같이 어떤 대상을 다른 대상과 구분하여 식별할 수 있는 유일한 이름)를 찾아내기 위한 규칙이다. <br/>
```js
var x = 'global';

function foo () {
  var x = 'function scope';
  console.log(x);
}

foo(); // 'function scope'
console.log(x); // 'global'
```
변수는 전역 또는 코드 블록(if, for, while, try/catch 등)이나 함수 내에 선언하며 코드 블록이나 함수는 중첩될 수 있다.  <br/>
식별자는 자신이 어디에서 선언됐는지에 의해 자신이 유효한(다른 코드가 자신을 참조할 수 있는) 범위를 갖는다. <br/>


자바스크립트에서 스코프를 구분해보면 2가지로 나눌 수 있다.

>전역 스코프 (Global scope)<br/>
코드 어디에서든지 참조할 수 있다.<br/><br/>
지역 스코프 (Local scope or Function-level scope)<br/>
함수 코드 블록이 만든 스코프로 함수 자신과 하위 함수에서만 참조할 수 있다.<br/>

<br/>
모든 변수는 스코프를 갖는다. 변수의 관점에서 스코프를 구분하면 다음과 같이 2가지로 나눌 수 있다.
<br/><br/>

>전역 변수 (Global variable)<br/>
전역에서 선언된 변수이며 어디에든 참조할 수 있다.<br/><br/>
지역 변수 (Local variable)<br/>
지역(함수) 내에서 선언된 변수이며 그 지역과 그 지역의 하부 지역에서만 참조할 수 있다.<br/>


### 지역 스코프 종류
>블록 레벨 스코프(block-level scope)<br/>
블록 레벨 스코프란 코드 블록({…})내에서 유효한 스코프를 의미한다.<br/>
ex) const, let

>함수 레벨 스코프(function-level scope)<br/>
함수 레벨 스코프란 함수 코드 블록 내에서 선언된 변수는 함수 코드 블록 내에서만 유효하고 함수 외부에서는 유효하지 않다.<br/>
ex) var
```js
var x = 0;
{
  var x = 1;
  console.log(x); // 1
}
console.log(x);   // 1

let y = 0;
{
  let y = 1;
  console.log(y); // 1
}
console.log(y);   // 0
```
<br/>
<br/>

# 호이스팅

JavaScript는 위에서 부터 아래로 한줄씩 준차적으로 실행된다. <br/>
이지만 그전에 소스코드 평가 과정에서 선언적 코드들을 실행한다. <br/>
(변수도 사용 가능하지만 초기화를하지 않으면 var 인경우 undefined가들어가며 , let,const는 error가 뜰것이다) <br/>

```js
catName("Tama");

function catName(name) {
  console.log("My cat name is", name);
}
// 출력 : My cat name is tama

console.log(a); // undefined
var a; // 선언
a = 6; // 초기화

console.log(b) // ReferenceError
let b;
b = 2;
```
<br/>













