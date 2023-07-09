## 组件

### 普通组件
```html
    <div id="demo">

    </div>
```
```js
        function SayHi(prams) {
            return <h2 style={{color:'#96b97d'}}>Hi!!!</h2>;
        }
        const element = <SayHi />;
        ReactDOM.render(
            element,
            document.getElementById("demo")
        )
```
除了以上的方式，还可以通过this的方式实现
```html
    <div id="demo">

    </div>
```
```js
        function SayHi(prams) {
            return <span style={{color: '#96b97d'}}>Hi {prams.name}</span>
        }

        const element = <SayHi name="Alan"/>

        ReactDOM.render(
            element,
            document.getElementById("demo")
        )
```
+ 上方的例子中的name属性是通过prams.name来获取
+ const element = <SayHi name="Alan"/> 为自定义的组件
+ 在html中元素名都是以小写字母开头，但是在React中自定义的类名都是以大写字母开头的
+ 在添加属性时， class 属性需要写成 className ，for 属性需要写成 htmlFor

### 复合组件
```html
        <div id="demo">
    
        </div>
        <script src="http://pv.sohu.com/cityjson?ie=utf-8"></script>
```
```js
        function Name(props) {
            return <div>您当前ip：{props.ip}</div>;
        }
        function Url(props) {
            return <div>您当前城市代码：{props.id}</div>;
        }
        function Nickname(props) {
            return <div>您当前所在城市：{props.name}</div>;
        }
        function App() {
            return (
                <div>
                    <Name ip={returnCitySN.cip} />
                    <Url id={returnCitySN.cid} />
                    <Nickname name={returnCitySN.cname} />
                </div>
            );
        }
        ReactDOM.render(
            <App />,
            document.getElementById('demo')
        );
```
+ 以上的示例代码的功能为获取当前的ip、城市代码和城市名并通过React组件进行显示
+ 定义三个组件将搜狐接口获取的信息传入
+ 然后进行调用