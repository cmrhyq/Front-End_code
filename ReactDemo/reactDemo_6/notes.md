## 事件处理

React元素的事件处理和DOM元素类似，但也有不同：
+ React元素绑定属性采用驼峰命名法
+ 若采用JSX的语法需要传入一个参数作为事件处理函数，而不是字符串
+ React中不能使用返回false的方法来阻止默认行为，必须明确使用preventDefault
```html
<div id="demo">

</div>
<script type="text/babel">
    class Toggle extends React.Component {
        constructor(props) {
            super(props);
            this.state = {isToggleOn: true};
            this.handleClick = this.handleClick.bind(this);
        }

        handleClick() {
            this.setState(prevState => ({
                isToggleOn: !prevState.isToggleOn
            }));
        }

        render() {
            return (
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
            );
        }
    }

    ReactDOM.render(
        <Toggle/>,
        document.getElementById("demo")
    )
</script>
```

### 向事件处理程序传参
React通过bind方式向监听器传参，在类组件中定义的监听函数，事件对象e要排在所传递参数的后面。
```html
<div id="demo">

</div>
<script type="text/babel">
    class Proper extends React.Component{
        constructor(){
            super();
            this.state = {name:'Say Hi!'};
        }

        preventPop(name,e){
            e.preventDefault();
            alert(name);
        }

        render() {
            return (
                <div>
                    <p>Alan</p>
                    <a href="reactDemo.html" onClick={this.preventPop.bind(this,this.state.name)}>Click</a>
                </div>
            );
        }
    }

    ReactDOM.render(
        <Proper/>,
        document.getElementById("demo")
    )
</script>
```
React需要通过bind方法来绑定参数，第一个参数指向this，第二个参数才是事件函数接收到的参数：
```html
<button onClick={this.handleClick.bind(this,props0,props1)}></button>
<script type="text/babel">
    handleClick(props0,props1,event){
    
    }
</script>
```
事件：this.handleclick.bind(this，要传的参数)
函数：handleclick(传过来的参数，event)
