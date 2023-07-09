## react元素渲染

元素是构成React的最小单位，用于描述屏幕上输出的内容
### 元素渲染
```html
<div id="demo"></div>
```
```Javascript
const element = <h1>Say Hi</h1>;
ReactDOM.render(
    element,
    document.getElementById('demo')
);
```
在此 div 中的所有内容都将由 React DOM 来管理。开发时一般只会定义一个根节点。但如果你是在一个已有的项目当中引入 React 的话，你可能会需要在不同的部分单独定义 React 根节点。要将React元素渲染到根DOM节点中，我们通过把它们都传递给 ReactDOM.render() 的方法来将其渲染到页面上。
### 更新元素渲染
```html
<div id="demo"></div>
```
```JavaScript
function time() {
  const element = (
    <div>
      <h2>Say Hi</h2>
      <h3>现在是 {new Date().toLocaleTimeString()}.</h3>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('demo')
  );
}
setInterval(time, 1000);
```
元素都是不可变的，在react中更新界面唯一的办法则是创建一个新的元素然后传入ReactDOM.render()中。上面代码中是先创建一个元素，给元素中插入当前的时间，然后在通过setInterval() 方法，每秒钟调用一次 ReactDOM.render()。
### 元素渲染-封装
```html
<div id="demo"></div>
```
```JavaScript
function Clock(parms) {
    return(
        <div>
            <h2>Say hi!Alan</h2>
            <h3>Now Time is {parms.date.toLocaleTimeString()}</h3>
        </div>
    )
}
function time() {
    ReactDOM.render(
        <Clock date={new Date()} />,
        document.getElementById("demo")
    )
}
setInterval(time, 1000)
```
