import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Login from '../components/Login.jsx'
import PageWrapper from '../components/PageWrapper.jsx'
const Loginpage = () => {
    return (
        <PageWrapper>
            <div className='max-h-screen'>
                <Navbar />
                <Login />
            </div>
        </PageWrapper>
    )
}

export default Loginpage
