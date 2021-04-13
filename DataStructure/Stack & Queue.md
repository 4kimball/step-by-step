# Stack & Queue

> 스택과 큐를 연결 리스트를 구현하면서 특징과 동작원리를 이해한다.



`Array`, `Linked List`는 데이터를 삽입하고 삭제하는 동작이 복잡하다. `Linked List`는 데이터를 삽입할 때 기존의 노드에서 삽입할 위치를 검색하고 링크를 연결시켜야한다.

이때 데이터를 좀 더 쉽게 삽입, 삭제할 수 있도록 고안된 자료구조가 **stack**과 **queue**다. 이 둘은 기본적으로 어떠한 규칙에 의해 `push`와 `pop`이라는 기능이 있다.

### Stack

스택은 `Last In First Out (후입선출)`의 특징을 갖는다. 여러 개의 접시를 설거지할 때 옆에 접시를 쌓아올리다가 맨 위에서부터 꺼내어 행구는 작업을 한다. 이처럼 스택은 데이터를 위에서부터 쌓아올리고 빼낼 때도 위에서부터 순서대로 빼내는 자료구조로 약속하였다.

그렇다면 스택을 연결 리스트로 구현하여 어떻게 동작하는지 살펴보자.

- 먼저, 스택에 대한 구조체를 정의한다.
  - 데이터와 다음 노드를 가리키는 포인터가 포함된 노드를 생성하였다.

```c
typedef struct _NODE {
	int data;
	struct _NODE *Next;
}NODE;
```

- 실제로 스택에 데이터를 넣기 전에 비어있는 스택을 만들어준다.
  - 스택의 처음과 끝을 나타내는 `head`, `tail`을 생성해주었으며 현재 `head`는 `tail`의 주소를 가리키고있으며 `tail`은 자기자신을 가리키고 있다.
  - `head`의 Next는 항상 스택의 맨 위를 가리키고 있다.

```c
NODE *head, *tail;
void InitStack() {
	head = (NODE*)malloc(sizeof(NODE));
	tail = (NODE*)malloc(sizeof(NODE));

	head->Next = tail;
	tail->Next = tail;
}
```

- 스택에 데이터를 `push`한다.
  - 먼저 스택에 `num`을 넣으려고 한다. `num`을 담을 `new_node`라는 새로운 노드의 메모리 공간을 확보하며 해당 `data`에 `num`을 저장한다.
  - 이제 원래 `head`가 가리키고 있는 주소를 `new_node`가 가리키게하며 `head`는 `new_node`를 가리키도록 한다.
  - 위의 과정은 `head`가 계속해서 스택의 맨 위에 있는 데이터를 가리키도록 유지한다.

```c
NODE *new_node;
void Push(int num) {
	new_node = (NODE*)malloc(sizeof(NODE));
	new_node->data = num;
	new_node->Next = head->Next;
	head->Next = new_node;
}
```

- 데이터를 넣었다면 스택에서 `pop`을 해보자.
  - 삭제할 데이터를 `pop_data`에 저장한다. `head`는 항상 맨 위의 노드를 가리키고 있기 때문에 `head->Next->data`를 저장한다.
  - 삭제할 노드를 저장했다면 `head`가 가리키고 있는 노드를 변경해야하며, 이는 `head->Next->Next`가 된다.
  - `head`의 다음 노드는 삭제를 하고 다음-다음 노드를 다시 가리킨다.

```c
int Pop() {
	int pop_data;
	pop_data = head->Next->data;
	head->Next = head->Next->Next;

	return pop_data;
}
```



---



### Queue

큐는 `First In First Out (선입선출)`의 특징을 갖는다. 어느 인기있는 식당에서 점심을 먹기위해 줄을 서고 있는 손님들로 표현할 수 있다. 먼저 온 손님이 먼저 들어가는 것처럼 큐도 먼저 `push`된 데이터가 먼저 `pop`된다.

그렇다면 큐를 연결 리스트로 구현하여 어떻게 동작하는지 살펴보자.

- 사용할 구조체는 스택과 동일하며, 비어있는 큐를 먼저 생성한다.
  - 스택과 다르게 맨 앞과 맨 뒤에있는 노드가 서로를 가리키고있다.
  - `front`는 맨 앞에 있는 노드를 가리킬 것이고 `rear`은 새로 추가된 노드를 가리킬 것이다.

```c
NODE *front, *rear;
void InitQueue() {
	front = (NODE*)malloc(sizeof(NODE));
	rear = (NODE*)malloc(sizeof(NODE));
	
	front->Next = rear;
	rear->Next = front;
}
```

- 큐에 데이터를 `push`해보자.
  - `push`할 때는 각 노드들의 연결상태를 유지하기 위해 큐가 비어있는 경우와 비어있지 않은 경우를 고려한다.
  - 큐가 비어있는 경우 `front`와 `rear`의 Next가 모두 추가된 노드를 가리키도록 한다.
  - 큐에 데이터가 존재하는 경우에는 기존에 `rear`의 Next였던 노드의 Next를 `new_node`를 가리키게하여 추가된 노드가 마지막에 위치하도록 한다. (rear->Next->Next)
  - 또한 `new_node`(추가된 노드)가 `rear`와 서로 가리키도록 한다.
  - 연결 리스트는 무작위의 주소공간에서 노드들이 흩어져있기 때문에 각각의 주소를 가리키는 것(연결되어있는 상태)를 신경써야한다.
  - 그렇기 때문에 `rear`를 계속해서 맨 마지막 노드를 가리키도록 하여 추가된 노드를 어디에 위치시킬지 판단할 수 있다.

```c
void Push(int num) {
	new_node = (NODE*)malloc(sizeof(NODE));
	new_node->data = num;
	
	// 큐가 비어있는 경우
	if (front->Next == rear) {
		front->Next = new_node;
		new_node->Next = rear;
		rear->Next = new_node;
	}
	// 큐에 데이터가 존재하는 경우
	else {
		rear->Next->Next = new_node;
		new_node->Next = rear;
		rear->Next = new_node;
	}
}
```

- 큐에서 맨 앞에있는 데이터를 `pop`한다.
  - 먼저 큐가 비어있는 상태를 처리한다.
  - 큐가 비어있지 않는다면 `front`의 Next 노드의 `data`를 `pop_data`에 저장한다.
  - 그리고 다시 `front->Next`는 `front->Next->Next`로 변경하여 `pop`한 노드와의 연결을 끊는다.

```c
int Pop() {
	int pop_data;


	if (front->Next == rear) {
		cout << "Queue Empty" << endl;
		return NULL;
	}

	pop_data = front->Next->data;
	front->Next = front->Next->Next;

	return pop_data;
}
```

