import React from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Portfolio from '@/components/Portfolio'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'

const App: React.FC = () => {
    return (
        <>
            <Hero />
            <About />
            <Portfolio />
            <Experience />
            <Contact />
        </>
    )
}

export default App
