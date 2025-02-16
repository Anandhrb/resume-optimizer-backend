import { useState } from "react";

function App() {
    const [message, setMessage] = useState("");

    const fetchBackend = async () => {
        const res = await fetch("http://127.0.0.1:5000/");
        const data = await res.text();
        setMessage(data);
    };

    return (
        <div>
            <h1>Resume Optimizer</h1>
            <button onClick={fetchBackend}>Check Server</button>
            <p>{message}</p>
        </div>
    );
}

export default App;
