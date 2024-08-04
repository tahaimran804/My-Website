import React from "react"
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-black bg-gradient">
                <div className="container">
                    <NavLink className="navbar-brand fs-2 text-light" to="/">Taha Imran</NavLink>
                    <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="material-symbols-outlined fs-1">
                            menu_open
                        </span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav pr-2 ml-auto mb-2 mb-lg-0 gap-3 fs-5">
                            <li className="nav-item">
                                <NavLink className="nav-link active text-light" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-light" to="/Service">Services</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link text-light" to="About">About</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link text-light" to="Contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;