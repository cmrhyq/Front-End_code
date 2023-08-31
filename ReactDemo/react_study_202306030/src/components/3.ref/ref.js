import React from "react";

export default class Ref extends React.Component {
    ref = React.createRef()

    render() {
        return (
            <div>
                <div>
                    <input type='text' ref={this.ref}/>
                    <button onClick={() => {
                        console.log(this.ref.current.value)
                    }}>Add
                    </button>
                </div>
            </div>
        )
    }
}