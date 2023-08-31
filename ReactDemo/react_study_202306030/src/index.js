import React from "react";
// import ReactDom from "react-dom";
// import EventFirst from "./components/eventFirst";
import EventSecond from "./components/eventSecond";

// ReactDom.render(
//     <EventFirst/>,
//     document.getElementById("root")
// )
// After, version > 17
import {createRoot} from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);
// createRoot(container!) // if you use TypeScript
root.render(<EventSecond tab="home"/>);
