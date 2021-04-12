# 02. Object Basic

> 자바스크립트에서는 원시 타입을 제외한 모든 값이 객체다. 객체는 다양한 데이터를 담을 수 있으며 `key` : `value` 쌍으로 여러 개의 프로퍼티를 포함시킬 수 있다.



### 객체의 생성

객체는 `객체 리터럴`과 `생성자`로 생성할 수 있다. 

- 객체 리터럴 

```javascript
let user = {
  name = "kim",
  age = 30,
};

console.log(user.name) // kim이 출력된다.
```

- 생성자

```javascript
let user = new Object();
```



### 프로퍼티 추가와 삭제

- `점 표기법`으로 프로퍼티를 추가할 수 있다.

```javascript
user.phone = '010';
```

- 뿐만 아니라 `대괄호`를 통해서도 추가하고 읽을 수 있다. 대괄호를 사용할 때는 대괄호 안에 문자열을 입력하도록 한다.

```javascript
user['phone'] = '010';
```

- 프로퍼티를 삭제할 때는 `delete`를 사용한다.

```javascript
delete user.phone;
```



### in 연산자

`in` 연산자를 사용하여 특정 프로퍼티가 객체에 존재하는지 확인할 수 있다.

```javascript
console.log('name' in user); // true
console.log('country' in user); // false
```

`in`연산자는 해당 객체가 상속받은 모든 프로퍼티를 확인한다. 

따라서 다음과같이 생성하지않은 `toString`이라는 프로퍼티도 존재한다는 것을 확인할 수 있으며 이는 user 객체가 Object 객체를 상속받았기 때문이다.

```javascript
console.log('toString' in user); // true
```

또한 `for ... in`을 통해 객체의 모든 키를 탐색할 수 있다.

```javascript
for(key in user){
    console.log(key, user[key]);
}
```



---



### 객체 생성자

- 생성자를 사용하면 이름이 같은 메서드와 프로퍼티를 가진 객체를 여러개 생성할 수 있다.

- 생성자의 이름은 관례적으로 첫 글자를 대문자로 하는 `파스칼 표기법`을 사용한다. 
- `this`는 생성자로 생성된 각각의 인스턴스를 가리킨다. 인스턴스는 객체가 실체화된 user1, user2를 의미한다.

```javascript
function User(name, age){
    this.name = name;
    this.age = age;
}

let user1 = new User("kim", 25);
let user2 = new User("lee", 24);
```



### 메서드

- 객체 내에서 어떠한 기능을 할 수 있는 프로퍼티를 `메서드`라고 한다.

- 다음은 원의 좌표와 반지름을 입력받아 원의 넓이를 구해보자.

```javascript
function Circle(center, radius){
    this.center = center;
    this.radius = radius;
    this.area = function(){
        return Math.PI * this.radius * this.radius;
    };
}

let circle = new Circle({x:0, y:0}, 2.0);
console.log(circle.area()); // 메서드 호출
```

