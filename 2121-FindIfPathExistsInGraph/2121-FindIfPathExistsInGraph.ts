// Last updated: 4/8/2026, 2:05:42 AM
function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
       const graph = new Map()
    // create our adjacency list
    edges.forEach(([a,b]) => {
        if (!graph.has(a)) {
            graph.set(a, [])
        }
        if (!graph.has(b)) {
            graph.set(b, [])
        }
        graph.get(a).push(b)
        graph.get(b).push(a)
    })
    // prevent revisiting nodes
    const visited = new Array(n)
    const queue = [source]
    while (queue.length > 0) {
        const node = queue.shift() // this is an O(n) operation here. if we used a real queue the dequeue method would be O(1)
        if (node === destination) {
            return true
        }
        visited[node] = true
        graph.get(node).forEach((neighbor) => {
            if (!visited[neighbor]) {
                queue.push(neighbor)
            }
        })
    }
    return false
};

const isPathExists = (n: number, edges: number[][], source: number, destination: number): boolean => {
    if (edges?.length === 0) return true
    
    const edgesMap = new Map()    
    const visited = []
    
    edges.map((item, index) => {
        if (edgesMap.get(item[0])) {            
            edgesMap.set(item[0], [...edgesMap.get(item[0]), item[1]])            
        } else {
            edgesMap.set(item[0], [item[1]])            
        }
    })
        
    
    let stack = edgesMap.get(source)
    let curNode = source
    
    while (stack?.length > 0) {                
        let tempCurNode = stack[0]        
        let tempStack = edgesMap.get(tempCurNode)
                        
        console.log('stack', stack)
        console.log('tempStack', tempStack)
        console.log('node', curNode)
        console.log('tempCurNode', tempCurNode)
        console.log('edges map', edgesMap)
        console.log('visited', visited)
    
        console.log('===============')
    
   
        if (stack[0] === destination) return true
        
        if (!visited.includes(stack[0])) {            
            visited.push(stack[0])            
            edgesMap.get(curNode).shift()            
        }        
        else {
             edgesMap.get(curNode).shift()
        }
            
        
        curNode = tempCurNode
        stack = tempStack                
    }    
    
    return false
} 


     // while (!tempStack && tempStack.) {                        
     //        tempCurNode = stack[0]                    
     //        tempStack = edgesMap.get(tempCurNode)  
     //        console.log('>>>>>>>>>>>>>>>>>>>>>>>>')
     //        console.log('stack', stack)
     //        console.log('tempStack', tempStack)
     //        console.log('node', curNode)
     //        console.log('tempCurNode', tempCurNode)
     //        console.log('edges map', edgesMap)
     //        console.log('visited', visited)
     //        if (!visited.includes(stack[0])) {            
     //            visited.push(stack[0])            
     //            edgesMap.get(curNode).shift()            
     //        }        
     //        else {
     //             edgesMap.get(curNode).shift()
     //        }            
     //    }                
        