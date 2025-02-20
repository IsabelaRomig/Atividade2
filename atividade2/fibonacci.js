const fib = (n) => {
  let a = 0, b = 1, r = [a, b];
  while (a + b <= n) r.push(a + b), a = b, b = r[r.length - 1];
  return r;
}

console.log(fib(10));