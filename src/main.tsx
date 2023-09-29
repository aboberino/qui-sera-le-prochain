import './index.css'
import '@radix-ui/themes/styles.css'
import './theme-config.css'
import 'remixicon/fonts/remixicon.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Theme, ThemePanel } from '@radix-ui/themes'
import PocketBase from 'pocketbase'
import Home from './pages/home'
import Login from './pages/login'

const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/login', element: <Login /> }
])

const queryClient = new QueryClient()
export const pb = new PocketBase(import.meta.env.VITE_POCKETBASE_URL)

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <Theme appearance='dark'>
                <RouterProvider router={router} />
                {/* <ThemePanel /> */}
            </Theme>
        </QueryClientProvider>
    </React.StrictMode>
)
