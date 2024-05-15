import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './styles/navbar.css'
import navlinks from './navlinks'

export default function Navbar() {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen)
    }

    return (
        <div className='navbar'>
            <div className='brand-container'>
                <NavLink to='/' >
                    <h3 className='brand'>
                        ECOYAAN
                    </h3>
                </NavLink>
                <div className='menu-icon' onClick={toggleSidebar}>
                    &#9776;
                </div>
            </div>
            <div className={`nav-container ${sidebarOpen ? 'open' : ''}`}>
                <ul className='nav'>
                    {
                        navlinks.map(item => (
                            <NavLink 
                                to={item.path} 
                                key={item.path} 
                                className={({ isActive }) => isActive ? 'active': ''}
                                onClick={toggleSidebar} // Close the sidebar on link click
                            >
                                <li className='nav-item'>
                                    { item.name }
                                </li>
                            </NavLink>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
