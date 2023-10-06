import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import Cote from './pages/cote'
import ProtectedRoute from './components/protected-route'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' index element={<Login />} />
                <Route element={<ProtectedRoute />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/cote' element={<Cote />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
