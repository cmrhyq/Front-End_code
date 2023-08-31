import React from "react";
import ReactDOM from 'react-dom/client'
// import EventFirst from "./components/eventFirst";
import EventSecond from "./components/eventSecond";

// ReactDom.render(
//     <EventFirst/>,
//     document.getElementById("root")
// )
// After, version > 17

// const container = document.getElementById('root');
// const root = createRoot(container);
// // createRoot(container!) // if you use TypeScript
// root.render(<EventSecond tab="home"/>);


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <EventSecond/>
    </React.StrictMode>
)
