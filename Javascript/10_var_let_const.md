# var, let, const

> var, let, const 키워드의 특징을 알아본다.



### var

- 변수를 중복으로 선언할 수 있다.

```javascript
var x = 1;
console.log(x); // 1

var x = 10;
console.log(x); // 10
```

- 함수 코드의 블록만 지역 스코프로 인정한다.
  - 즉, if, for, while 문 등에서 선언한 변수는 지역 변수로서 동작하지 않는다.

```javascript
for(var i=0; i<5; i++) {
}
console.log(i); // 5
```

- `호이스팅` : 변수를 선언하면 스코프의 맨 위로 올려진다. 따라서 선언 전에 참조할 수 있다.

```javascript
a = 10;
console.log(a); // 10
var a;
```



### let

- 변수를 중복으로 선언할 수 없다.

```javascript
let a = 10;
let a = 20; // SyntaxError: Identifier 'a' has already been declared
console.log(a);
```

- 함수 코드의 블록뿐만 아니라 모든 코드 블록에서 지역 스코프를 갖는다.

```javascript
for(let i=0; i<5; i++){
}
console.log(i); // ReferenceError: i is not defined
```

- `var`은 선언 단계와 초기화 단계가 한 번에 진행되지만 `let`은 선언단계와 초기화 단계가 분리되어 진행된다.
  - 선언 단계가 실행된 후 초기화 단계는 변수 선언문에 도착했을 때 실행된다.
  - 스코프의 시작 지점부터 초기화 시작 시점까지 변수를 참조할 수 없는 구간을 **일시적 사각지대**라고 부른다.

```javascript
console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x;
```

- 하지만 `let`이 변수 호이스팅이 발생하지 않는 것은 아니며 발생하지 않는 것처럼 동작하는 것이다.



### const

- 선언과 동시에 초기화해야 한다.

```javascript
const A; // SyntaxError: Missing initializer in const declaration
const B = 10;
```

- 재할당을 할 수 없다.

```javascript
const A = 20;
A = 30; // TypeError: Assignment to constant variable.
```

- 상수를 사용할 때 `const`와 함께 사용하며 변수이름을 대문자로 설정한다.
- `const`로 선언한 객체의 속성도 변경할 수 없다.