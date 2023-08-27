import React from "react";
import Table from "./table";
import Functional from "./functional";
import Style from "./Style";

const TabBar = () => {
    return <div>
        <h2>tab bar</h2>
    </div>
}

export default class Nested extends React.Component {
    render() {
        return (
            <div>
                <h1>Level one</h1>
                <Table/>
                <Functional/>
                <TabBar/>
                <Style/>
            </div>
        )
    }
}