# 01. Data Type

> 자바스크립트에서 데이터 타입은 **원시 타입(primitive data type)**과 **객체 타입(object type)**이 존재한다.



## 원시 타입

> 기본적으로 원시 타입의 값은 변경 불가능한 값이며 값에 의한 전달이다.



### 1. 숫자 : number

- 자바스크립트는 C 또는 Java와 같이 `int`, `login`, `float`, `double`과 같은 숫자 타입이 존재하지 않으며 하나의 숫자타입만 존재한다.
- 모든 숫자 타입은 64비트 부동소수점으로 표현하고 -(2^53-1)와 2^53-1사이의 값을 표현할 수 있다.
  - **부동 소수점**은 실수를 컴퓨터에서 근사하여 표현할 때 소수점의 위치를 고정시키지않고 위치를 따로 적어 유효숫자를 나타내는 가수와 소수점의 위치를 나타내는 지수로 나누어 표현한다.
- 그렇기 때문에 모든 연산이 실수의 연산이 되어 실수가 출력된다.
- 프로그램에 직접 작성할 수 있는 상수 값을 리터럴이라고 하며 숫자를 표현하는 리터럴에는 정수 리터럴과 부동소수점 리터럴이 있다.
- 정수 리터럴

```javascript
var dec = 5; // 10진수: 5
var hex = 0x1f; // 16진수: 31
var oct = 0o52; // 8진수: 42
var bin = 0b10; // 2진수: 2

console.log(dec, hex, oct, bin);
```

- 부동소수점 리터럴

```javascript
var x = 3.14; // 3.14
var y = 6.02e23; // 6.02x10^23
var z = 1.16E-35 // 1.16x10^-35

console.log(x, y, z);
```

- 위와같은 일반적인 숫자대신 `Infinity`, `-Infinity`, `NaN`과 같은 **특수 숫자 값**을 표현할 수 있다.

```javascript
console.log(1 / 0) // 어떠한 정수든 0으로 나누면 무한대가 되며 Infinity가 출력된다.

console.log('1' / 0) // 숫자가 아닌 자료형으로 수학연산을 하면 NaN이 출력된다.
```



### 2. 문자형 : string

- 문자열은 작은 따옴표, 큰 따옴표, 벡틱으로 표현할 수 있다.

```javascript
var name = 'name'
var age = "age"

console.log(typeof(name)) // string이 출력된다.
console.log('hello')
```

- 문자열 중간에 변수나 표현식을 삽입하여 출력하기 위해서는 `백틱`과 `${}` 을 사용한다.
- 작은 따옴표나 큰 따옴표는 중간에 변수나 표현식을 삽입할 수 없다.

```javascript
var age = 25
console.log(`나의 나이는 ${age}`) // 나의 나이는 25가 출력된다.
```

- 자바스크립트를 HTML 요소에 끼워 넣을 때는 자바스크립트 프로그램을 문자열로 작성한다.
  - 이때 HTML 코드는 큰 따옴표, 자바스크립트 코드는 작은 따옴표를 사용하여 구분하는 것이 좋다.

```html
<input type="button" value="Click" onclick="alert('HELLO')">
```



### 3. 불린형 : boolean

- 참과 거짓을 나타내는 `true`와 `false`가 포함된다.
- 빈 문자열, `null`, `undefined`, `0`은 기본적으로 `false`로 판단한다.

```javascript
if(null) console.log("true");
else console.log("false");
// null은 false이기 때문에 if문의 조건에서 false가 되어 else문이 출력된다.
```



### 4. undefined

- 선언은 되었고 아직 값을 할당하지 않은 변수에 접근하거나 존재하지 않는 객체 프로퍼티에 접근할 경우 `undefined`가 반환된다.
- 변수를 선언하여 메모리를 할당했을 때 **쓰레기 값**을 넣어 빈상태로 두지않고 자바스크립트 엔진이 `undefined`로 초기화한다.



### 5. null

- `null`은 개발자가 의도적으로 변수에 값이 없다는 것을 표시할 때 사용한다.





## 객체 타입

- 자바스크립트에서 원시 타입을 제외한 모든 값은 객체 타입이다. 
- 객체는 `key:value` 형태의 프로퍼티들을 저장하는 컨테이너로서 `해시`와 유사하다.
- 또한 객체는 참조에 의한 전달 방식으로 전달된다.
- 다음은 객체를 생성하는 두 가지 방식이다.

```javascript
// 객체 리터럴로 생성하기
var foo = {
    name:"kim",
    age:30,
};

// 객체 생성자로 생성하기
var foo = new Object();
```

