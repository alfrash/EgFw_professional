// O(2^n)
const fib = (n) =>{
    if (n <= 2) return 1;
    return fib(n -1) + fib(n - 2)
};
console.log(fib(4));

// O(n)
const foo = (n) =>{
    if (n <= 1) return;
    foo(n - 1);
};
// O(n/2) == O(n)
const bar = (n) =>{
    if (n <= 1) return;
    bar(n - 2);
};

