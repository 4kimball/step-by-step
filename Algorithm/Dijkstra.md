# Dijkstra

> **하나의 노드**에서 **다른 모든 노드**까지 이동하는데 드는 **최소 비용**을 구한다.



### :bulb: 개념

- 출발 노드에서 다른 모든 노드까지 이동하는데 드는 최소 비용을 구하는 알고리즘이다.
- A에서 D로 이동한다고 할 때 A --> D와 A -> B -> D 중 어떠한 것이 최소가 될지 `메모이제이션`을 하면서 구해나간다.
- A에서 출발한다고 했을 때 A와 인접한 노드인 B, C를 방문하고 비용을 기록한다. 이후 B와 C 중 적은 비용을 갖는 노드를 방문한다.
- 그리고 B와 인접한 노드가 D라고 할 때 A->B까지 이동할 때 든 비용과 B->D까지의 비용을 더해서 이미 기록해둔 비용과 비교하여 최솟값을 갱신한다.
  - 이 과정에서 C->D의 경로가 있을 수도 있고 역시 A->C, C->D의 비용을 합쳐서 최솟값을 찾는다.
- 다익스트라의 핵심은 어떠한 경로의 최단거리를 구할 때 **이전에 구한 최단 경로를 이용**하는 것이고, **기록해둔 비용을 계속해서 최솟값으로 갱신**해나가는 것이다.
- 다익스트라에서 `우선순위 큐`를 활용하면 쉽게 구현할 수 있다.

```python
# 먼저 각 노드로 가는 비용을 가장 큰 값으로 초기화한다.
dp = [INF] * (N+1)
```

```python
def dijkstra():
    hq = []
    # 0번 노드에서 출발을 한다고 가정하자.
    heapq.heappush(hq, (0, 0)) # 비용-노드
    while hq:
        # 출발 노드에서 cur_node까지의 비요응이 cur_weight가 된다.
        cur_weight, cur_node = heapq.heappop(hq)
		
        # 현재 기록해둔 비용보다 크다면 더 이상 볼 필요가 없다.
        if dp[cur_node] < cur_weight:
            continue
		
        # 현재 노드에서 다음 방문할 인접한 노드를 탐색한다.
        for next_node, weight in graph[cur_node]:
            # 출발->현재노드의 비용과 현재노드->다음노드의 비용을 더한다.
            next_weight = weight + cur_weight
            # 최솟값 비교를 진행하여
            if dp[next_node] > next_weight:
                # 최솟값을 갱신하고 
                dp[next_node] = next_weight
                # 다음 노드를 탐색하기위해 우선순위 큐에 넣는다.
                heapq.heappush(hq, (next_weight, next_node))
```

