// Last updated: 4/22/2026, 11:58:12 PM
1/**
2 * @param {number} capacity
3 */
4var LRUCache = function(capacity) {
5    this.capacity = capacity
6    this.map = new Map()
7
8    this.head = {key: null, value: null, prev: null, next: null}
9    this.tail = {key: null, value: null, prev: null, next: null}
10    this.head.next = this.tail
11    this.tail.prev = this.head
12};
13
14const _remove = (node) => {
15    node.prev.next = node.next
16    node.next.prev = node.prev
17}
18
19const _insertForward = (head, node) => {
20    node.next = head.next
21    node.prev = head
22    head.next.prev = node
23    head.next = node
24}
25
26/** 
27 * @param {number} key
28 * @return {number}
29 */
30LRUCache.prototype.get = function(key) {
31    if (!this.map.has(key)) return -1
32
33    const node = this.map.get(key)
34    _remove(node)
35    _insertForward(this.head, node)
36    return node.value
37};
38
39/** 
40 * @param {number} key 
41 * @param {number} value
42 * @return {void}
43 */
44LRUCache.prototype.put = function(key, value) {
45    if(this.map.has(key)){
46        const node = this.map.get(key)
47        _remove(node)
48    } else if (this.map.size === this.capacity) {
49        const lru = this.tail.prev
50        _remove(lru)
51        this.map.delete(lru.key)
52    }
53    const node = { key, value, prev: null, next: null };
54    _insertForward(this.head, node);
55    this.map.set(key, node);
56};
57
58/** 
59 * Your LRUCache object will be instantiated and called as such:
60 * var obj = new LRUCache(capacity)
61 * var param_1 = obj.get(key)
62 * obj.put(key,value)
63 */
64 