import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import CreatePage from "./views/CreatePage";
import Dashboard from "./views/Dashboard";
import EditPage from "./views/EditPage";

function App() {
    return (
        <div className="m-3">
            <h1 className='text-center'>Favorite Authors</h1>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/authors/new" element={<CreatePage />} />
                <Route path="/authors/:id" element={<EditPage />} />
            </Routes>
        </div>
    );
}

export default App;
