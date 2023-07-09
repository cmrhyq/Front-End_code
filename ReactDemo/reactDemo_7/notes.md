## 虚拟DOM创建的两种方式

### 使用JSX创建
```html
<div id="demo">

</div>
<script type="text/babel">
    const element = <p>Hi Alan</p>
    ReactDOM.render(
        element,
        document.getElementById('demo')
    )
</script>
</body>
</html>
<script src="https://cdn.staticfile.org/react/16.4.0/umd/react.development.js"></script>
<script src="https://cdn.staticfile.org/react-dom/16.4.0/umd/react-dom.development.js"></script>
<script src="https://cdn.staticfile.org/babel-standalone/6.26.0/babel.min.js"></script>
```

### 使用JS创建
```html
<div id="demo">

</div>
<script src="https://cdn.staticfile.org/react/16.4.0/umd/react.development.js"></script>
<script src="https://cdn.staticfile.org/react-dom/16.4.0/umd/react-dom.development.js"></script>
<script type="text/javascript">
    const element = React.createElement('p',{id:'title'},'Hi Alan');
    ReactDOM.render(
        element,
        document.getElementById('demo')
    )
</script>
```

### JSX语法规则
+ 定义虚拟DOM时不要写引号
+ 标签中混入js表达式时要用{}
+ 样式的类名指定要用className
+ 内联样式要用style={{key,'value'}}
+ 虚拟DOM中只能有一个根标签
+ 标签必须闭合