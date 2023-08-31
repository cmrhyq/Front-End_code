import React from "react";

class Table extends React.Component {
    render() {
        return (
            <div>
                <h2>Table</h2>
                <table>
                    <thead>
                    <tr>
                        <td>Cal</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            {10 + 20}
                        </td>
                        <td>{10 > 20?'a':'b'}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table