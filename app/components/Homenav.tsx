import React, {useState, useEffect} from 'react';
import {Link} from "react-router";
import {FiUpload} from "react-icons/fi"; // Upload icon

const Homenav = () => {


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

            <div className={'flex flex-row items-center gap-5'}>
                <Link to="/" className="secondary-button w-fit flex items-center gap-2">
                    Home
                </Link>

                <Link to="/upload" className="primary-button w-fit flex items-center gap-2">
                    New Resume
                </Link>
            </div>
        </nav>
    );
};

export default Homenav;
