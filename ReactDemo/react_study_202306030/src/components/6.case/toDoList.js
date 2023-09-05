import React, {Component} from 'react';

class ToDoList extends Component {
    ref = React.createRef()

    constructor() {
        super();
        this.state = {
            list: ['Alan', 'kevin', 'cmr']
        }
    }

    render() {
        return (
            <div>
                <div>
                    <input type='text' ref={this.ref}/>
                    <button onClick={this.handleClick}>Add
                    </button>
                </div>
                <div>
                    <ul>
                        {
                            this.state.list.map((item, index) => <li key={index}>{item}</li>)
                        }
                    </ul>
                </div>
            </div>
        );
    }

    handleClick = (event) => {
        var content = this.ref.current.value

        // 不建议，因为会直接修改状态，会造成不可预期的问题
        // this.data.list.push(content)
        // this.setState({
        //     list: this.data.list
        // })

        // 创建一个新的list，并赋值
        // 数组的深复制，可以用 ...{对象}  或者  {对象}.slice()
        // let newList = [...this.state.list]
        let newList = this.state.list.slice()
        newList.push(content)
        this.setState({
            list: newList
        })
        console.log(this.state.list)

    }
}

export default ToDoList