// Last updated: 4/8/2026, 2:06:38 AM
function fib(n: number): number {
    if(n>1){
        return fib(n-1) + fib(n - 2);
    }
    return n
};