# 03. Function Basic



### 함수 정의하기

자바스크립트에서 함수를 생성하는 방법은 3가지가 있다.

- 함수 선언문
- 함수 표현식
- Function() 생성자 함수



#### 함수 선언문

함수 선언문으로 정의된 함수는 반드시 함수명이 정의되어 있어야 한다.

```javascript
function add(x, y){
    return x+y;
}
```



#### 함수 표현식

자바스크립트에서 함수도 하나의 값으로 취급이되며 변수에 할당할 수 있다.

아래처럼 이름이 없는 함수 형태를 `익명 함수`라고 한다.

```javascript
var add = function (x, y){
    return x+y;
};
```



#### Function() 생성자 함수

```javascript
var add = new Function('x', 'y', 'return x+y');
```



### 함수 호이스팅

>  함수를 어떤 방식으로 선언했느냐에 따라 동작 방식에 차이가 존재한다. 그 중 `호이스팅`에 대해 알아본다.

- 함수 선언문으로 정의했을 때, 먼저 함수를 호출하고 정의하는 것이 가능하다.
  - 함수 선언문 형태로 정의한 함수는 코드의 맨 처음 해석이되기 때문이다.

```javascript
add(2, 3); // 5

function add(x, y){
    return x+y;
}
```



- 함수 호이스팅으로 인해 코드가 복잡해질 수 있다.
- 하지만 함수 표현식으로 정의했을 때는 함수 호이스팅이 발생하지 않는다.
- 함수 호이스팅이 발생하는 원인은 `변수 생성`과 `초기화가` 분리되어서 발생하기 때문이다.

```javascript
add(2, 3); // uncaught type error

var add = function (x, y){
    return x+y;
};

add(2, 3) // 5
```



### 변수의 유효범위

> 변수에 유효범위가 있는 이유는 프로그램 내의 다른 부분에서 선언된 이름이 같은 변수와 충돌하지 않기 위해서이다.

- 전역 변수와 지역 변수

```javascript
var a = "global"; // 변수 a는 프로그램 전체에서 유효
function f(){
    var b = "local"; // 변수 b는 함수 f내에서만 유효
    console.log(a); // 함수 f내에서 변수 a에 접근이 가능
    return b;
}
f();
console.log(b); // b에 접근하지 못한다.
```



- 함수 내에서 변수 끌어올림
  - 함수 내에서 정의된 변수를 끌어올리고 저장된 데이터는 끌어올리지 않는다? => 따라서 첫 번째 a를 출력하면 undefined가 출력

```javascript
function f(){
    console.log(a); // undefined
    var a = "local";
    console.log(a); // local
}
```



### 함수의 장점

- 재사용이 용이하다.
- 프로그램 수정이 간단해진다.
- 가독성을 높여 코드를 쉽게 이해할 수 있다.