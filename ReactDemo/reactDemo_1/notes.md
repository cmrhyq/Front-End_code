## react安装：

### 安装：

React 可以直接下载使用，下载包中也提供了很多学习的实例。
本demo使用了 React 的版本为 16.4.0，可以在官网 https://reactjs.org/ 下载最新版。
你也可以直接使用 Staticfile CDN 的 React CDN 库，地址如下：

```html
<script src="https://cdn.staticfile.org/react/16.4.0/umd/react.development.js"></script>
<script src="https://cdn.staticfile.org/react-dom/16.4.0/umd/react-dom.development.js"></script>
<script src="https://cdn.staticfile.org/babel-standalone/6.26.0/babel.min.js"></script>
```

官方CDN地址：
```html
<script src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
```

其中
+ react.min.js - React 的核心库
+ react-dom.min.js - 提供与 DOM 相关的功能
+ babel.min.js - Babel 可以将 ES6 代码转为 ES5 代码,Babel 内嵌了对 JSX 的支持

### 示例代码：
```html
    <div id="demo1">

    </div>
    <script type="text/babel">
        ReactDOM.render(
            <span>demo1</span>,
            document.getElementById("demo1")
        );
    </script>
```
以上代码是将一个span标签加入到id为demo1的div中
    注意：
        1 插入的span标签不能添加style样式
        2 如果要使用 JSX，则 <script> 标签的 type 属性需要设置为 text/babel
        3 react中的class为className
        4 只能通过id来插入元素
