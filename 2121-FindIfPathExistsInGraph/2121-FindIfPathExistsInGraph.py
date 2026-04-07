# Last updated: 4/8/2026, 2:05:46 AM
class Solution:
    def validPath(self, n: int, edges: List[List[int]], start: int, end: int) -> bool:
        G = defaultdict(list[int])
        for s,e in edges:
            G[s].append(e)
            G[e].append(s)        
        seen = set()
        q = deque([start])
        while q:
            c = q.popleft()
            if c == end:
                return True
            if c in seen:
                continue
            seen.add(c)
            for i in G[c]:
                q.append(i)
        return False