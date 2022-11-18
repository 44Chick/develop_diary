<h1> JavaScript 기본</h1>


<h2> JavaScript 자료형
 
<h3> # 느승한 타입(loosely typed)의 동적 언어(dynamic language)</h3>
 
 자바스크립트는 느슨한 타입 언어 , 혹은 동적 타입 언어 라고 해서 변수의 타입을 미리 선언할 필요가 없다. 
  <br/>
 프로그램이 처리되는 과정에서 자동으로 파악되고, 변수의 타입들이 정해진다.
  <br/>
 이것은 바로 상화에 따라 변수들의 타입들은 바뀔수 있다는 것이다.

  ```js
/* JavaScript Example */
let a = 13; // Number (숫자)선언
let b = 'thirteen' // String (문자열) 선언
 a = '13' // String (문자열) 변함
 a = true // boolean (불) 으로 변함
```
 
### 형변환 예시
 
 ```js
console.log(10 + '5') // "105" - String
console.log(10 - '5') // 5 - Number 
```
 
 JavaScript 는 let 이라고 선언되었으나 let 타입이라는 뜻은 아니다.
  <br/>
참조하는 형식을 미리 선언하며 예상 하지 못한 변경을 막아준다고 생각 하면 된다.
|선언 타입|대입|재 선언|스코프|
|:---|:---:|:---:|:---:|
|var|○|○|함수|
|let|○|×|블록|
|const|×|×|블록|
 
 <br/>

변수를 생성할 때 마다 매번 타입을 써줄 필요가 없기 때문에 기본적으로는 편하고 빠르게 코드를 작성하기 좋다.
  <br/>
하지만 실행 도중에 변수에 예상치 못한 타입이 들어와 Type Error가 발생하는 경우가 생길 수 있다. 정적 언어와 달리 실행되는 시점에서 오류를 출력한다. 
  <br/>
 특히 프로젝트의 크기가 크거나 협업을 하는 과정에서 변수의 타입이 일치하지 않는 경우가 생길 수 있으므로 주의를 기울여야 한다.

 
 <h3># "==" 와 "===" 차이</h3>
  
```js
str == num // true
str === num // false

true == 1 // true
true === 1 //false
 ```
  
== 연산자는 두 피연산자의 값의 타입이 다를 경우 자동으로 일부 피연산자의 타입을 변환 후 값을 비교한다.
  <br/>
=== 연산자는 타입을 변환하지 않으므로 == 연산자에 비해 비교하는 방식이 엄격하다.

### # 특별한 자료

undefined : 해당 변수가 정의되지 않았으며, 비어있는 상태를 의미한다.  <br/>
null : 값자체가 없다는 의미가 아니라, 값이긴 한데 어떠한 유효한 값도 아니라는 것을 의미한다.  <br/>
NaN : number 타입이며, '숫자가 아님'을 의미하는 숫자. NaN인지 아닌지를 구분하기 위해서는 isNaN() 함수를 활용한다.  <br/>
Infinity : number 타입이며, '무한대'를 의미하는 숫자.  <br/>

| 값	|Boolean 문맥	|Number 문맥	|String 문맥|	typeof|
 |:---|:---:|:---:|:---:|:---:|
|undefined	|false|	NaN|	"undefined"|	"undefined"|
|null	|false|	0	|"null"|	"Object"|
|NaN|	false|	NaN	|"NaN"|	"number"|
|Infinity|	true	|Infinity|	"Infinity"|	"number"|
 
 
 
