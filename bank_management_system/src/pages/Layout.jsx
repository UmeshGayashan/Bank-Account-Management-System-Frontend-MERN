import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import mainLogo from'../assets/Bank Account Management system.png';
function Layout() {
  return (
    <main className='container'>
        <Navbar/>
        <img src={mainLogo} class="img-fluid" alt="fireSpot"></img>
        <Outlet/>
        <p>EG/2020/4112 - Perera H.L.D.U.G</p>
    </main>
  )
}

export default Layout