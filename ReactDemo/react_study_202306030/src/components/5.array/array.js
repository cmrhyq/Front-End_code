import React, {Component} from 'react';

export default class Array extends Component {
    constructor() {
        super();
        this.state = {
            list: [
                {
                    id: 1,
                    content: "Alan"
                },
                {
                    id: 2,
                    content: "kevin"
                },
                {
                    id: 3,
                    content: "chen"
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.list.map((item, index) => <li key={index}>{item.content}</li>)
                    }
                </ul>
            </div>
        );
    }
}