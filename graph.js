class Graph{
    constructor(){
        this.adjacencyList = {}  
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
          this.adjacencyList[vertex]=[];
        }
    }
    addEdge(v1, v2){
            this.adjacencyList[v1].push(v2);
            this.adjacencyList[v2].push(v1);
    }
    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((v)=>{
            v!==vertex2;

        });
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((v)=>{
            v!==vertex1;
        });
    }
    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
         const adjacencyVertex = this.adjacencyList[vertex].pop();
         this.removeEdge(vertex, adjacencyVertex);
        }
        delete this.adjacencyList[vertex];
    }
}
let g = new Graph();
g.addVertex("India");
g.addVertex("China");
g.addVertex("Afganistan");
g.addVertex("Russia");
console.log(g);
g.addEdge("India", "China");
g.addEdge("Afganistan", "Russia");
console.log(g);
g.removeEdge("India", "China");
console.log(g);
g.removeVertex("China");
console.log(g);






