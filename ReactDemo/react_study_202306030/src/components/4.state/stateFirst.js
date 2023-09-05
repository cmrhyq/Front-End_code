import React from "react";
import "../../resource/css/state.css"

/**
 * 状态是组件描述某种显示情况的数据，由组件自己设置和更改，也就是说由组件自己维护<br/>
 * 使用状态的目的就是为了在不同的状态下使用组件的显示不同
 */
export default class StateFirst extends React.Component {
    state = {
        text: "收藏",
        show: true
    }

    render() {
        return (
            <div className="main">
                <button onClick={() => {
                    this.setState({
                        show: !this.state.show
                    })
                }}>{this.state.show ? "💖 收藏" : "💛 取消"}</button>
            </div>
        )
    }
}