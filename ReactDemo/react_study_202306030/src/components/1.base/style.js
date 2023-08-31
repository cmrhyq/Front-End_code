import React from "react";
import '../../resource/css/test.css'

export default class Style extends React.Component {
    render() {
        var background = {
            background: 'black',
            width: '200px',
            height: '20%',
            color: 'white'
        }
        return (
            <div>
                <div style={background}>
                    <h2>style</h2>
                </div>
                {/*
                    html属性：for 对应React属性：htmlFor
                    html属性：class 对应React属性：className
                    {},大括号代表大括号里面的内容是js，可以写js中的注释
                */}
                <div className='box'>
                    <h2>style</h2>
                </div>
                <div>
                    <div>
                        <label htmlFor='username'>Username: </label>
                        <input type='text' id='username'/>
                    </div>
                    <div>
                        <label htmlFor='password'>Password: </label>
                        <input type='password' id='password'/>
                    </div>
                </div>
            </div>
        )
    }
}