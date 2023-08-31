import React from "react";

export default class EventFirst extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <input type='text'/>
                    {/* 事件绑定方法1 */}
                    {/*<button onClick={() => {*/}
                    {/*    console.log("text")*/}
                    {/*}}>Add*/}
                    {/*</button>*/}

                    {/* 事件绑定方法2 */}
                    {/*<button onClick={this.handleClick1}>Add</button>*/}

                    {/* 事件绑定方法3 */}
                    <button onClick={this.handleClick2}>Add</button>
                </div>
            </div>
        )
    }

    // handleClick1() {
    //     console.log("text")
    // }

    handleClick2 = () => {
        console.log("text")
    }
}