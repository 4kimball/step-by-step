# 이진탐색 - LIS

LIS는 최장 증가 부분수열을 의미한다.

이전에 동적계획법을 통해 LIS를 구해보았다. 동적계획법은 O(N^2)의 시간복잡도를 가졌지만 이진탐색으로 LIS를 구할 경우 O(N logN) 으로 좀 더 빠르게 구할 수 있다.



### :bulb: 이진탐색으로 접근하기

LIS를 구하기위해 이진탐색을 활용할 수 있다. 기본적으로 LIS가 되는 부분수열을 다음과 같이 만들어가게 된다.

- 어떠한 수열 numbers가 있을 때 가장 첫 번째 숫자를 lis라는 배열에 저장한다.
- 이제 1번 인덱스부터 마지막 인덱스까지 순차 탐색을 진행한다.
- lis의 마지막 숫자와 현재 탐색 대상의 숫자를 비교한다.
- 만약 현재 탐색 대상 숫자가 크다면 lis 뒤에 대입한다.
- 하지만 현재 탐색 대상 숫자가 작다면 lis 내에서 어떤 자리에 들어갈지 이진탐색을 활용해 찾는다.
- 이진 탐색을 통해 lis 중 어떤 자리에 넣을지 찾았다면 해당 숫자를 그 자리에 대입한다.
- 위의 과정을 반복하면 lis에는 LIS가 남게된다.
- 코드로 확인하면 다음과 같다.

```python
numbers = [1, 5, 2, 4, 7, 3, 9] # 정렬되어있지 않은 수열
N = len(numbers)
lis = []
lis.append(numbers[0]) # numbers의 첫 번째 숫자를 대입하고 시작

for i in range(1, N):
    if lis[-1] < numbers[i]:
        lis.append(numbers[i]) # i번째 수가 크다면 lis에 추가한다.
    else:
        # else의 경우 이진탐색으로 i번째 수를 넣을 자리를 찾는다.
        # 현재 lis는 정렬된 상태이기 때문에 이진탐색이 가능하다.
        # 따라서 lis의 첫 번째 인덱스와 마지막 인덱스, 비교할 숫자를 전달한다.    
        j = binary_search(0, len(lis)-1, numbers[i])
        lis[j] = numbers[i] # 자리를 변경한다.
```

```python
def binary_search(left, right, target):
    while left < right:
        mid = (left + right) // 2
        if lis[mid] < target:
            left = mid + 1
        else:
            right = mid
     return right
```

