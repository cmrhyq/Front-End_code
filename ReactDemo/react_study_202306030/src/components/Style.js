import React from "react";

export default class Style extends React.Component {
    render() {
        var background = {
            background: 'black',
            width: '200px',
            height: '20%',
            color: 'white'
        }
        return (
            <div style={background}>
                <h2>style</h2>
            </div>
        )
    }
}