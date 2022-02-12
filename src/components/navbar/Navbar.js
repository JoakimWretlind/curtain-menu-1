import { useState } from 'react'
import Models from '../../pages/Models'
import { Nav, NavUL, NavLink } from './nav.style'

const Navbar = () => {
    const [menu, setMenu] = useState(false)
    return (
        <>
            <Nav>
                <NavUL>
                    <NavLink to="/">home</NavLink>
                    <NavLink
                        to="/models"
                        onClick={() => setMenu(menu)}
                    >models</NavLink>
                </NavUL>
            </Nav>
        </>
    )
}

export default Navbar