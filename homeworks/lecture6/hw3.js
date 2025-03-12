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
  let timeoutId
  return () => {
    if(timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(func, delay)
  }
}

function logMessage() {
  console.log("Task executed!");
}

const debouncedLogMessage = debounce(logMessage, 2000);

// Triggering the debounced function multiple times
debouncedLogMessage(); // Will not execute immediately
debouncedLogMessage(); // Cancels the previous call and resets the 2-second timer
debouncedLogMessage(); // Cancels the previous call and resets the 2-second timer

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
  let lastCall = 0;
  return function (...args) {
    const now = new Date();
    if (now - lastCall >= delay) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}

//When calling func.apply(this, args) inside a wrapper function (like in throttle),
//this depends on how the wrapper function itself is called
const obj = {
  message: "Throttled Function Called!",
  logMessage() {
    console.log(this.message, new Date().toLocaleTimeString());
  }
};


const throttledLog = throttle(obj.logMessage.bind(obj), 2000);


setInterval(() => {
  throttledLog(); // Throttled function will only run once every 2 seconds
  //obj.throttledLog()
}, 500); // 500ms interval between calls
