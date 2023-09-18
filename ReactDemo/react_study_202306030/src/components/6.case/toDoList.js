import React, {Component} from 'react';
import '../../resource/css/toDoList.css'

class ToDoList extends Component {
    ref = React.createRef()

    constructor() {
        super();
        this.state = {
            list: []
        }
    }

    render() {
        return (
            <div className='main'>
                <div className='input-box'>
                    <input type='text' className='common-input' ref={this.ref}/>
                    <button className='common-button' onClick={this.addContent}>Add</button>
                </div>
                <div className='content-box'>
                    {/*<ul>*/}
                    {/*    {*/}
                    {/*        this.state.list.map((item, index) => <li key={index}>{item}</li>)*/}
                    {/*    }*/}
                    {/*</ul>*/}
                    <table>
                        <thead>
                        <tr>
                            <th>
                                Id
                            </th>
                            <th>
                                Content
                            </th>
                            <th>
                                Operate
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.list.map((item, index) =>
                                <tr key={index}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        {item}
                                    </td>
                                    <td>
                                        <button className='common-button' id={item.id}
                                                onClick={this.deleteContent}>Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

    addContent = (event) => {
        try {
            let content = this.ref.current.value
            if (content.trim() !== '') {
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
            } else {
                console.log("The input content is empty")
            }
            this.ref.current.value = ''
        } catch (e) {
            console.log(e)
        }
    }

    deleteContent = (event) => {

    }
}

export default ToDoList