import React, {Component} from 'react';
import '../../resource/css/toDoList.css'
import {IndexedDBHelper} from "../../resource/js/indexedDb";

class IndexedDb extends Component {
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
                                        {item.id}
                                    </td>
                                    <td>
                                        {item.name}
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

    /**
     *在组件加载完成后执行你的方法
     */
    componentDidMount() {
        this.queryData();
    }

    updateContent = (event) => {
        let that = this;
        IndexedDBHelper.updateData('user', {id: 2, name: "aaa"}).then((response) => {
            console.log(response)
            that.queryData()
        }).catch(function (error) {
            console.error(error);
        })
    }

    addContent = (event) => {
        try {
            let that = this;
            let content = this.ref.current.value
            if (content.trim() !== '') {
                IndexedDBHelper.addData('user', {name: content}).then((response) => {
                    that.queryData()
                }).catch(function (error) {
                    console.error(error);
                });
            } else {
                console.log("The input content is empty")
            }
            this.ref.current.value = ''
        } catch (e) {
            console.log(e)
        }
    }

    deleteContent = (event) => {
        let id = event.target.id;
        let that = this;
        let object = 'user';
        IndexedDBHelper.deleteDataById(object, id).then((response) => {
            console.log(response)
            that.queryData()
        }).catch((error) => {
            console.log(error)
        })
    }

    queryData = (event) => {
        let that = this;
        let object = 'user';
        // 跟踪组件是否已挂载
        let isMounted = true;
        IndexedDBHelper.openDB(object, 'name', false).then((response) => {
            IndexedDBHelper.getAllData(object).then((response) => {
                // 检查组件是否任然挂载
                if (isMounted) {
                    if (response) {
                        that.setState({
                            list: response
                        })
                    }
                }
            }).catch((error) => {
                console.error(error);
            })
        }).catch((error) => {
            console.error(error);
        });

        // 添加 componentWillUnmount 函数，在组件卸载时将标志设置为false，以访潜在的内存泄漏
        return () => {
            isMounted = false;
        }
    }
}

export default IndexedDb