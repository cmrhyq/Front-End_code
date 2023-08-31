import React from "react";

/**
 * 问：React的事件绑定和JS的事件绑定有什么区别
 * 答：React的事件绑定并不会绑定事件到每一个具体的元素上，而是采用事件代理的模式
 */
export default class EventThird extends React.Component {
    a = 100

    render() {
        return (
            <div>
                <input type='text'/>
                <button onClick={this.handleClick3}>Add4
                </button>
            </div>
        )
    }

    /*
        event事件对象
     */
    handleClick3 = (evt) => {
        console.log(this.a, evt)
    }
}