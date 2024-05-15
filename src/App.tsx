import { BrowserRouter } from 'react-router-dom'

import { Routes } from './routes'
import { Footer, Navbar } from './components'
import { Suspense } from 'react'

export default function App() {
    return (
        <>
            <Suspense fallback={<>Loading...</>}>
                <BrowserRouter>
                    <Navbar />
                    <main className='container'>
                        <Routes />
                    </main>
                    <Footer />
                </BrowserRouter>
            </Suspense>
        </>
    )
}
