/**
 * implement debounce function
 * explain: `func` will be called after `delay` ms. if `func` is called again before `delay` ms, the timer will be reset
 * @example
 * // after 1s, print 'hello'
 * // However, if `printHello` is called again before 1s, the timer will be reset
 * const printHello = () => console.log('hello')
 * const debouncedFn = debounce(printHello, 1000)
 * debouncedFn()
 * debouncedFn() // timer reset to 1s
 *
 * @param {function} func
 * @param {number} delay
 * @returns {function}
 */
function debounce(func, delay) {
  // your code here
  let timerId;

  return function (...args) {
    // clear the previous timer if `debouncedFn` is called again before `delay`
    clearTimeout(timerId);

    // Set a new timer to call `func` after `delay`
    timerId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}
const printHello = () => console.log('hello');

const debouncedFn = debounce(printHello, 1000);

debouncedFn(); // starts a 1-second timer
debouncedFn(); // timer resets
debouncedFn(); // timer resets again

/**
 * implement throttle function
 * explain: `func` will be called every `delay` ms. if `func` is called again before `delay` ms, the call will be ignored
 * @example
 * // after 1s, print 'hello'
 * // However, if `printHello` is called again before 1s, the call will be ignored
 * const printHello = () => console.log('hello')
 * const throttledFn = throttle(printHello, 1000)
 * throttledFn()
 * throttledFn() // ignored
 *
 * @param {function} func
 * @param {number} delay
 * @returns {function}
 */
function throttle(func, delay) {
  // your code here
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    }
  };
}
const printHello1 = () => console.log('hello');

const throttledFn = throttle(printHello1, 1000);

throttledFn(); // hello
throttledFn(); // Ignored (called before 1s)
setTimeout(throttledFn, 1100); // hello after 1.1s
setTimeout(throttledFn, 1500); // Ignored (called too soon)
setTimeout(throttledFn, 2100); // hello again after 2.1s