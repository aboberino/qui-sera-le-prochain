import { Navigate, Outlet, useLocation } from 'react-router-dom'

import { usePocket } from '../contexts/PocketContext'
import Header from './header'

export default function ProtectedRoute() {
    const { user } = usePocket()
    const location = useLocation()

    if (!user) {
        return <Navigate to={{ pathname: '/login' }} state={{ location }} replace />
    }

    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}
