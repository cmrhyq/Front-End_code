import React from "react";
import ReactDOM from 'react-dom/client'
import 'tdesign-react/es/style/index.css';
import ToDoList from "./components/6.case/toDoList";

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
        <ToDoList/>
    </React.StrictMode>
)
