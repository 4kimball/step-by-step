# Components and Props

> React의 컴포넌트는 Javascript의 함수와 유사하다. 컴포넌트는 props를 입력받아 화면에 어떻게 표시되는지를 기술하는 React Element를 반환한다.



### 컴포넌트 정의하기

- 함수 컴포넌트
  - props를 인자로 전달받는 함수를 생성하여 컴포넌트를 생성할 수 있다.

```react
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

- 클래스 컴포넌트
  - `ES6`의 class를 통해 컴포넌트를 생성할 수 있다.

```react
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```



### props

- 컴포넌트에 데이터, 함수 등을 단일 객체로 전달할 수 있으며 이 객체를 props라고 한다.
- 최상위 컴포넌트인 `App`에서 하위 컴포넌트인 `Hello`에 `name`을 전달해보자.
- `/src/components/`라는 폴더를 생성하여 컴포넌트를 정의하도록 한다.
- `Hello` 컴포넌트는 다음과 같다.
  - 상위 컴포넌트인 `App`에서 name을 전달받는다. 
  - name을 `<p>`에 Hello와 함께 출력한다.

```react
import React from 'react'

const Hello = ({name}) => {
  return (
    <div className="Hello">
      <h2>Hello Component</h2>
      <p>Hello {name}</p>
    </div>
  )
}

export default Hello;
```

- `App` 컴포넌트에서는 name에 문자열로 이름을 전달한다.
  - `name`은 전달받는 하위 컴포넌트에서 사용될 이름이며 `{}`안의 변수는 현재 전달하는 컴포넌트에서 사용하는 이름이다.

```react
import './App.css';
import React, {useState} from 'react'
import Hello from './components/Hello'
function App() {
  
  return (
    <div className="App">
      <h1>App Component</h1>
      <Hello name={'kim'}/>
      <Hello name={'lee'}/>
      <Hello name={'park'}/>
    </div>
  )
}

export default App;

```

- 모든 컴포넌트는 props를 수정하지 않아야하며 수정은 전달한 상위 컴포넌트에서 이루어지도록 한다. 이를 통해 컴포넌트의 관계가 깊어지더라도 상태관리를 쉽게할 수 있도록 할 수 있다.