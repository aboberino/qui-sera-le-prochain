import './index.css'
import './theme-config.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { MantineProvider } from '@mantine/core'
import PocketBase from 'pocketbase'
import App from './app'
import { PocketProvider } from './contexts/PocketContext'
import fontMonaSans from '/Mona-Sans.woff2'


const queryClient = new QueryClient()
export const pb = new PocketBase(import.meta.env.VITE_POCKETBASE_URL)

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{
                    colorScheme: 'dark',
                    primaryColor: 'indigo',
                    fontFamily: fontMonaSans
                }}
            >
                <PocketProvider>
                    <App />
                </PocketProvider>
            </MantineProvider>
        </QueryClientProvider>
    </React.StrictMode>
)
