# Linked List

> **Linked List**는 **Array**와 다르게 동적으로 메모리의 크기를 조절할 수 있으며 삽입, 삭제를 할 때 편리하다. 그렇다면 어떤 구조로 되어있는지 알아보자.



### Node와 Link로 이루어진 자료구조

Node에는 데이터를 저장하고 Link는 Node 사이를 연결하는 선이다. Array와 다르게 연속적인 메모리를 사용하지 않으며 Node는 다음 Node를 Link로 연결할 뿐이다. 즉, Node의 주소는 랜덤하지만 각 Node는 다음 Node의 주소는 알고있기 때문에 열차처럼 연결이 될 수 있다.

이처럼 Linked List는 Node와 Link로 이루어져 있으며 맨 앞과 맨 뒤의 Node는 특별히 `Head Node`와 `End Node`로 부른다. 해당 노드에는 묵시적으로 데이터를 저장하지 않는다. `왜?`



### 삽입과 삭제가 편리한 Linked List

Array는 선언할 때 메모리의 크기를 정해야하고 중간에 크기를 늘릴 수 없다. 하지만 Linked List는 동적으로 메모리의 크기를 늘리고 줄일 수 있다. 이는 `삽입`과 `삭제`가 빈번하게 일어날 수 있다는 것이다. 그렇다면 삽입과 삭제가 일어나는 동작을 알아보자.

Linked List의 각 Node는 데이터와 다음 Node의 주소를 가리키고 있다. 중간에 데이터를 삽입한다고 하면 연관이 있는 Node들의 Node의 다음 주소를 변경하면 될 것이다. 또한 삭제도 Node의 다음 주소를 변경하기만 하면된다. 이러한 구조로 인해 Array는 삽입과 삭제를 할 때 `Big-O(N)`의 시간이 걸리지만 Linked List는 `Big-O(1)`의 시간이 걸린다.



### Linked List 구현하기

 Linked List를 C언어로 직접 구현하면서 이해해보자. 먼저 A->B->D 순으로 Linked List의 Data에 저장되어 있고 B와 D 사이에 C를 삽입해본다.

- Node 생성하기

`NODE`라는 구조체에는 알파벳을 넣을 데이터와 다음 Node를 가리킬 주소를 갖고있다. 또한 `head`, `end`를 선언하고 A, B, D를 넣을 Node인 `temp1`, `temp2`, `temp3`를 선언한다.

```c
typedef struct _NODE {
	char Data;
	struct _NODE *Next;
}NODE;

NODE *head, *end, *temp;
NODE *temp1, *temp2, *temp3;
```

- A->B->D로 초기화하기

이제 각각의 Node에 데이터를 넣고 연결을 한다.

```c
void Initialize() {
	NODE *ptr;
	head = (NODE*)malloc(sizeof(NODE));
	end = (NODE*)malloc(sizeof(NODE));

	temp1 = (NODE*)malloc(sizeof(NODE));
	temp1->Data = 'A';
	head->Next = temp1;
	temp1->Next = end;
	end->Next = end;
	ptr = temp1;

	temp2 = (NODE*)malloc(sizeof(NODE));
	temp2->Data = 'B';
	ptr->Next = temp2;
	temp2->Next = end;
	ptr = temp2;

	temp3 = (NODE*)malloc(sizeof(NODE));
	temp3->Data = 'D';
	ptr->Next = temp3;
	temp3->Next = end;
	ptr = temp3;
}
```

- B와 D 사이에 C를 넣기

반복문을 통해 C를 넣을 위치를 찾는다. 

그 다음 C를 넣을 위치를 찾은 뒤의 코드가 중요하다. `pt`r의 경우 C가 들어있는 Node이다. `indexptr`은 현재 D를 가리키고 B가 들어있는 노드이다. C가 들어있는 Node를 `indexptr`의 다음 Node로 연결을 하고 `indexptr`의 Next를 `ptr`연결해야 Link가 끊어지지않고 연결된다.

만약 `indexptr`을 `ptr`에 연결한다면 B->C가 되며, 더이상 D를 가리키는 Node가 사라지게 되어 연결이 끊어지게 된다.

```c
void InsertNode(NODE *ptr) {
	NODE *indexptr;

	for (indexptr = head; indexptr != end; indexptr = indexptr->Next) {
		if (indexptr->Next->Data > ptr->Data)
			break;
	}

	ptr->Next = indexptr->Next;
	indexptr->Next = ptr;
}
```



- B 삭제하기

먼저 반복문을 통해 삭제하고자 하는 데이터인 B가 포함된 Node를 찾는다. 그리고 삭제할 Node인 `deleteptr`에 넣는다. 여기서 `indexptr`의 Next가 삭제할 노드가 되어야한다.

왜냐하면 삭제할 노드 이전의 노드를 삭제할 노드의 다음 노드와 연결을 한 뒤에 삭제할 노드를 삭제해야 연결이 끊어지지 않기 때문이다.

```c
void DeleteNode(NODE *ptr) {
	NODE *indexptr;
	NODE *deleteptr;

	for (indexptr = head; indexptr != end; indexptr = indexptr->Next) {
		if (indexptr->Next->Data == ptr->Data) {
			deleteptr = indexptr->Next;
			break;
		}
			
	}
	indexptr->Next = indexptr->Next->Next;
	free(deleteptr);
}
```



---

### 정리

- Linked List는 중간에 데이터를 삽입, 삭제할 때 `Big-O(n)`의 시간이 걸린다.
- Linke List는 동적으로 크기를 조절할 수 있다.
- 삽입과 삭제를 구현할 때 Node가 끊어지지 않도록 유의한다.