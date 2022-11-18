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

### TDZ
TDZ ( Temporal Dead Zone )는 해석하면 "일시적 사각지대" 이다.

```js
console.log(b) // TDZ
let b = 2; // 선언, 초기화
console.log(b)
```
### 함수선언문 과 함수표현식

함수선언문 은 호이스팅이 이루어지지만, 함수표현식은 이루어지지않는다.

```js
func() // "It's declarative function."

// 선언적 함수 (함수 선언)
function func() {
    console.log('It\'s declarative function.')
}
```
```js
func() // ReferenceError: Cannot access 'func' before initialization

// 익명 함수 (함수 표현식)
const func = function(){
    console.log('It\'s Anonymous function')
};
```
<br/><br/>
# 컨택스트(context)

### 실행 컨택스트(Execution Context)
실행 가능한 코드가 실행되기 위해 필요한 환경.
```js
var x = 'xxx';

function foo () {
  var y = 'yyy';

  function bar () {
    var z = 'zzz';
    console.log(x + y + z);
  }
  bar();
}
foo();
```
위 코드를 실행하면 아래와 같이 실행 컨텍스트 스택(Stack)이 생성하고 소멸한다. <br/>
현재 실행 중인 컨텍스트에서 이 컨텍스트와 관련없는 코드(예를 들어 다른 함수)가 실행되면 새로운 컨텍스트가 생성된다.  <br/>
이 컨텍스트는 스택에 쌓이게 되고 컨트롤(제어권)이 이동한다. <br/>
(Call Stack) <br/>


![ec_1](https://user-images.githubusercontent.com/49892292/202713023-01eb43c7-a84d-4790-b857-f53d27e5d9d0.png)

1. 컨트롤이 실행 가능한 코드로 이동하면 논리적 스택 구조를 가지는 새로운 실행 컨텍스트 스택이 생성된다. 스택은 LIFO(Last In First Out, 후입 선출)의 구조를 가지는 나열 구조이다.

2. 전역 코드(Global code)로 컨트롤이 진입하면 전역 실행 컨텍스트가 생성되고 실행 컨텍스트 스택에 쌓인다. 전역 실행 컨텍스트는 애플리케이션이 종료될 때까지 유지된다.

3. 함수를 호출하면 해당 함수의 실행 컨텍스트가 생성되며 직전에 실행된 코드 블록의 실행 컨텍스트 위에 쌓인다.

4. 함수 실행이 끝나면 해당 함수의 실행 컨텍스트를 파기하고 직전의 실행 컨텍스트에 컨트롤을 반환한다.
<br/>

### 실행객체
실행 컨텍스트는 실행 가능한 코드를 형상화하고 구분하는 추상적인 개념이지만 물리적으로는 객체의 형태를 가지며 3가지 프로퍼티를 소유한다.

#### Variable Object (VO / 변수객체)
실행 컨텍스트가 생성되면 자바스크립트 엔진은 실행에 필요한 여러 정보들(변수, 매개변수, 인수 정보, 함수 선언)을 담을 객체.<br/><br/>
>전역 컨텍스트의 경우<br/>
Variable Object는 유일하며 최상위에 위치하고 모든 전역 변수, 전역 함수 등을 포함하는 전역 객체(Global Object / GO)를 가리킨다.<br/>
전역 객체는 전역에 선언된 전역 변수와 전역 함수를 프로퍼티로 소유한다.<br/><br/>
>함수 컨텍스트의 경우<br/>
Variable Object는 Activation Object(AO / 활성 객체)를 가리키며 매개변수와 인수들의 정보를 배열의 형태로 담고 있는 객체인 arguments object가 추가된다.

#### Scope Chain

