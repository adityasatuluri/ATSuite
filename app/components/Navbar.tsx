import React from 'react';
import {Link} from "react-router";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                <p className="text-2xl font-bold text-gradient shadow-2xl font-sans" style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.3)' }}>ATSuite</p>
            </Link>
            <Link to="/upload" className="primary-button w-fit">
                Upload Resume
            </Link>
        </nav>
    );
};

export default Navbar;
