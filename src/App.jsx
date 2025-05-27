import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './site/page/Home'

export default function App() {
return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
    </BrowserRouter>
)
}
