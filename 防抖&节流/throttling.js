/**
 * 防抖
 * 作用：对在短时间内多次触发事件的回调函数，只执行最后一次，或者只在最开始时执行。
 * 用法：
 * function res(){
 *   console.log('触发事件');
 * }
 * window.addEventListener('resize',debounce(res,1000));
 *
 * @param fn 方法名
 * @param delay 过多久触发
 * @param rightAway rightAway 不传时 ，默认为非立即执行函数
 * @returns {(function(): void)|*}
 */
function debounce(fn, delay, rightAway = false) {
  //
  // 维护一个 timer
  let timer = null;
  return function () {
    // 获取函数的作用域和变量
    let context = this;
    let args = arguments;
    if (timer) clearTimeout(timer);
    if (rightAway) {
      var now = !timer;
      timer = setTimeout(() => {
        timer = null;
      }, delay);
      if (now) {
        fn.apply(context, args);
      }
    } else {
      timer = setTimeout(() => {
        fn.apply(context.args);
      }, delay);
    }
  }
}

/**
 * 节流 - 定时器实现
 * 作用：类似于防抖，不过节流是在一段时间之内只允许该函数执行一次
 * 用法：
 * function res(){
 * 	console.log('触发事件');
 * }
 * window.addEventListener('resize',throttleOnTimer(res,2000));
 *
 * @param fn 方法名
 * @param delay 过多久触发
 * @returns {(function(): void)|*}
 */
function throttleOnTimer(fn, delay) {
  var timer = null;
  return function () {
    let context = this;
    let args = arguments;
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(context, args);
        timer = null;
      }, delay);
    }
  };
}

/**
 * 节流 - 时间戳实现
 * 作用：类似于防抖，不过节流是在一段时间之内只允许该函数执行一次
 * 用法：
 * function res(){
 * 	console.log('触发事件');
 * }
 * window.addEventListener('resize',throttleOnTimestamp(res,2000));
 *
 * @param fn 方法名
 * @param delay 过多久触发
 * @returns {(function(): void)|*}
 */
function throttleOnTimestamp(fn, delay) {
  var p = Date.now();
  return function () {
    let context = this;
    let args = arguments;
    let n = Date.now();
    if (n - p >= delay) {
      fn.apply(context, args);
      p = Date.now();
    }
  };
}

