# 프로토타입

> 부모 객체를 **프로토타입**이라고 하며 자바스크립트는 프로토타입 기반의 객체지향 언어이다.



### :bulb: Intro

C++과 JAVA는 객체 생성을 위해 클래스를 정의하고 클래스를 상속받아 사용된다. 자바스크립트에서도 상속을 받아 사용할 수 있다. 자바스크립트의 모든 객체는 자신의 부모 역할을 하는 객체와 연결되어 있는데 이를 **프로토타입**이라고 한다.



### 생성자 안에 메서드를 정의할 때의 문제

생성자 안에서 **this**뒤에 프로퍼티 또는 메서드를 정의하면 모든 인스턴스들이 똑같이 갖고있는 프로퍼티와 메서드가 된다. 하지만 **이것은 메모리를 많이 소비한다는 문제**가 발생한다.

- 아래는 원을 나타내는 객체를 통해 2개의 인스턴스를 생성한 코드이다.
  - `c1`과 `c2`라는 2개의 인스턴스를 만들었을 때 모두 `area`라는 메서드를 갖게된다. 즉, 인스턴스 개수만큼 메서드가 생성된다.

```javascript
function Circle(center, radius) {
  this.center = center;
  this.radius = radius;
  this.area = function() {
    return Math.PI * this.radius * this.radius;
  };
}

let c1 = new Circle({x: 1, y:2}, 3);
let c2 = new Circle({x:0.5, y:0.5}, 5);

console.log(c1.area())
```



- 위의 코드처럼 **메모리를 많이 소비하는 문제**를 해결하기위해 **프로토타입 객체에 메서드를 정의**하는 방법이 있다.
- 자바스크립트에서 함수도 객체이므로 기본적으로 **prototype**이라는 프로퍼티를 갖고있다. 따라서 위의 코드를 아래와 같이 수정할 수 있다.
  - 어떠한 객체에서 특정 프로퍼티를 사용하려고 할 때 객체에 정의되어있지 않으면 prototype 객체를 검사한다.
  - 아래의 코드를 통해 인스턴스마다 메서드를 생성하지 않아도 되기때문에 메모리를 절약할 수 있다.
  - prototype 객체는 읽기만 가능하고 수정이 불가능하다.

```javascript
function Circle(center, radius) {
  this.center = center;
  this.radius = radius;
}

// Circle의 prototype에 메서드 추가
Circle.prototype.area = function() {
  return Math.PI * this.radius * this.radius;
}

let c1 = new Circle({x: 1, y:2}, 3);
let c2 = new Circle({x:0.5, y:0.5}, 5);

console.log(c1.area())
```



### 프로토타입 상속

- **상속**은 특정 객체가 다른 객체로부터 속성과 기능을 물려받는 것을 의미한다.
- C++과 JAVA는 클래스를 통해 상속을 할 수 있지만 자바스크립트는 객체를 상속한다.
- 상속을 하면 **코드를 재사용**하고 **확장성**이 높다는 장점이 존재한다.



### [[Prototype]]

- 