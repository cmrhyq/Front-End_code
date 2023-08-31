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
                     */}
                    <button onClick={this.handleClick1.bind(this)}>Add2</button>
                </div>
            </div>
        )
    }

    handleClick1() {
        console.log("The value of number a is: ", this.a)
    }
}