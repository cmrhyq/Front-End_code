import React from "react";
import ReactDOM from 'react-dom/client'
import Ref from "./components/3.ref/ref";

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
        <Ref/>
    </React.StrictMode>
)
