# Element 렌더링

> Element는 React의 가장 작은 단위이며 화면에 표시할 내용을 정의한다.



### Element 정의하기

- 컴포넌트 내에서 React Element를 다음과 같이 정의하고 렌더링할 수 있다.

```react
function App() {
  const element = <h2>Hello World!</h2>
  return (
    <div className="App">
      {element}
    </div>
  );
}
```



### 렌더링 된 Element 업데이트

- React Element는 불변객체이다.
  - Element를 생성한 이후에는 해당 Element의 자식이나 속성을 변경할 수 없다.
- React DOM은 해당 Element와 이전의 Element와 비교하고 원하는 DOM 상태로 만드는데 필요한 경우에만 DOM을 업데이트한다.
- 아래의 코드를 보면 초기에 count는 0을 나타내고 버튼을 클릭했을 때 count가 1씩 증가하는 코드이다.
  - 버튼을 클릭했을 때 개발자 도구를 이용하여 element를 보면 버튼을 클릭했을 때 `<p>`의 count만 변하는 것을 볼 수 있을 것이다.

```react
function App() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count+1);
  }
  return (
    <div className="App">
      <h2>Hello</h2>
      <p>{count}</p>
      <button onClick={handleClick}>Count++</button>
    </div>
  )
}
```

