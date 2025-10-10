import React, {useState, useEffect} from 'react';
import {Link} from "react-router";
import {FiUpload} from "react-icons/fi";
import {usePuterStore} from "~/lib/puter";
import {CiLogout} from "react-icons/ci"; // Upload icon

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const {auth} = usePuterStore();

    useEffect(() => {
        // Run only on client side
        const checkScreenSize = () => setIsMobile(window.innerWidth < 600);
        checkScreenSize(); // initial check
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    useEffect(() => {

    }, [auth.isAuthenticated]);

    return (
        <nav className="navbar flex justify-between items-center px-4 py-3">
            <Link to="/">
                <p
                    className="text-2xl font-bold text-gradient shadow-2xl font-sans"
                    style={{textShadow: '0 0 20px rgba(255, 255, 255, 0.3)'}}
                >
                    ATSuite
                </p>
            </Link>

            <div className={'flex flex-row gap-5'}>
                <button className="secondary-button w-fit flex items-center gap-2" onClick={auth.signOut}>
                    {isMobile ? <CiLogout size={22}/> : "Logout"}
                </button>
                <Link to="/upload" className="primary-button w-fit flex items-center gap-2">
                    {isMobile ? <FiUpload size={22}/> : "Upload Resume"}
                </Link>

            </div>
        </nav>
    );
};

export default Navbar;
