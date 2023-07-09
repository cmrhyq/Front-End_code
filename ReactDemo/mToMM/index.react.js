class Proper extends React.Component {
    constructor() {
        super();

        this.metter = {
            value: ""
        }
        
        this.state = {
            meter: "",
            millimeter: ""
        }
    }

    convert(meter) {
        document.getElementById("result").style.display = "block"
        this.setState({
            meter: meter.target.value,
            millimeter: meter.target.value * 1000
        })
    }

    render() {
        return <div className="layui-container">
            <div className="layui-card">
                <div className="layui-card-header">Amount</div>
                <div className="layui-card-body">
                    <td>
                        <div className="layui-input-block">
                            <label className="layui-form-label">From</label>
                            <input type="text" name="title" onChange={this.convert.bind(this)} required lay-verify="required"
                                   placeholder="请输入米"
                                   autoComplete="off" className="layui-input"/>
                        </div>
                    </td>
                    <td>
                        <div className="layui-input-block">
                            <label className="layui-form-label">To</label>
                            <input type="text" name="title" value={this.state.millimeter} required lay-verify="required"
                                   autoComplete="off" className="layui-input"/>
                        </div>
                    </td>
                    <div className="layui-input-block">
                        <p id="result">{this.state.meter}米等于{this.state.millimeter}</p>
                    </div>
                </div>
            </div>
            <br/>
        </div>
    }
}

ReactDOM.render(
    <Proper/>,
    document.getElementById('wrapper')
)
