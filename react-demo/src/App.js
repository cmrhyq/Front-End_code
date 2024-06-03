import React, {useState} from "react";
import Heading from "./components/state/Heading";


function App() {
    const [word, setWord] = React.useState("Eat")

    return (
        <div>
            <Heading message={word + " at Little lemon"}/>
            <button onClick={() => setWord("Drink")}>Click</button>
        </div>
    );
}

export default App;
