import React from "react";

export default class EventSecond extends React.Component {
    a = 100;

    render() {
        return (
            <div>
                <div>
                    <input type='text'/>
                    {/* 事件绑定方法1 */}
                    <button onClick={() => {
                        console.log("The value of number a is: ", this.a)
                    }}>Add1
                    </button>

                    {/*
                        事件绑定方法2
                        不加bind那么，handleClick1 方法中的 this 指向的就是 undefined。
                        加上 bind，并传 this ，那么 handleClick1 方法中的 this 才指向的是 EventSecond 这个类

                        call，改变this指向，自动执行函数
                        apply，改变this指向，自动执行函数
                        bind，该表this只想，手动加括号执行函数
                     */}
                    <button onClick={this.handleClick1.bind(this)}>Add2</button>

                    {/*
                        事件绑定方法3
                        handleClick2函数使用箭头函数，箭头函数的 this指向始终和外部作用域一致
                    */}
                    <button onClick={this.handleClick2}>Add3</button>

                    {/*
                        事件绑定方法4
                        onClick中使用箭头函数，箭头函数的 this指向始终和外部作用域一致
                    */}
                    <button onClick={() => {
                        this.handleClick3()
                    }}>Add4
                    </button>
                </div>
            </div>
        )
    }

    handleClick1() {
        console.log("The value of number a is: ", this.a)
    }

    handleClick2 = () => {
        console.log("The value of number a is: ", this.a)
    }

    handleClick3() {
        console.log("The value of number a is: ", this.a)
    }
}