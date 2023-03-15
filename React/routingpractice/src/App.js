import "./App.css";
import { useParams } from "react-router-dom";
import { Link, Routes, Route } from "react-router-dom";

const Home = (props) => {
    return <h1>Welcome to the website!</h1>;
};

const Input = (props) => {
    const { input } = useParams();

    if (isNaN(+input)) {
        return <h1>Your word is {input}!</h1>;
    } else {
        return <h1>Your number is {input}!</h1>;
    }
};

const InputMod = (props) => {
    const { input, color, background } = useParams();
    return <h1 style={{ color: color, background: background }}>Your word is {input}!</h1>;
};

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/:input" element={<Input />} />
                <Route
                    path="/:input/:color/:background"
                    element={<InputMod />}
                />
            </Routes>
        </div>
    );
}

export default App;
