import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='login' element={<Login />} />
                <Route path='' element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}