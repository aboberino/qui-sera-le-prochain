import './index.css'
import '@radix-ui/themes/styles.css'
import './theme-config.css'
import 'remixicon/fonts/remixicon.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Theme } from '@radix-ui/themes'
import PocketBase from 'pocketbase'
import App from './app'
import { PocketProvider } from './contexts/PocketContext'



const queryClient = new QueryClient()
export const pb = new PocketBase(import.meta.env.VITE_POCKETBASE_URL)

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <Theme appearance='dark'>
                <PocketProvider>
                    <App />
                </PocketProvider> 
            </Theme>
        </QueryClientProvider>
    </React.StrictMode>
)
