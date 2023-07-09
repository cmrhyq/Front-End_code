## 定义组件

### 函数式组件
```html
<div id="demo">

</div>
<script type="text/babel">
    function Demo() {
        console.log(this); //此处的this是undefined，因为Babel编译后开启了严格模式
        return <h2>简单组件</h2>;
    }
    ReactDOM.render(
        // demo(),
        <Demo/>,
        document.getElementById('demo')
    )
</script>
```
React执行了以上代码中的ReactDOM后，React开始解析组件，找到Demo组件，发现组件是用函数定义的，随后调用该函数，将返回的虚拟DOM转为真实DOM，最后呈现到页面中

### 类式组件