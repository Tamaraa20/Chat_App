import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import { createRoot } from 'react-dom/client';
import About from './components/About/About';
import Home from './components/Home/Home';

const root = createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/auth" element={<App/>} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>
);




