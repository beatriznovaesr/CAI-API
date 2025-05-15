import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Paises from "./pages/page";
import Detalhes from "./pages/details"

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Paises />} />
                <Route path="/pais/:nome" element={<Detalhes />} />
            </Routes>
        </Router>
    );
}

export default App
