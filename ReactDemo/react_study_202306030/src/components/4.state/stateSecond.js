import React from "react";
import "../../resource/css/state.css"

export default class StateSecond extends React.Component {
    constructor() {
        super()
        this.state = {
            text: "收藏",
            show: true
        }
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