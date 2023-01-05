function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = args.toString();
    console.log("Fn called with " + key);
    console.log(cache);
    if (args.length != 2) {
      return args.toString();
    } else if (cache.has(key)) {
      return cache.get(key);
    } else {
      cache.set(key, fn(...args));
      return cache.get(key);
    }
  };
}

function add(a, b) {
  return a + b;
}

function time(fn) {
  console.time();
  console.log(fn());
  console.timeEnd();
}

//Create a method called memoize such that:
const memoizeAdd = memoize(add);

//then calling…
time(() => memoizeAdd(100, 100)); //returns 200
time(() => memoizeAdd(500)); //returns 100
time(() => memoizeAdd(100, 200)); //returns 300
time(() => memoizeAdd(100, 100)); //returns 200 without computing
