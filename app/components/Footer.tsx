import React from 'react';
import {MdArrowOutward} from "react-icons/md";
import {FaBehance, FaGithub, FaInstagram, FaLinkedin, FaMailBulk} from "react-icons/fa";

const Footer = () => {
    return (
        <footer
            className="footer bg-[var(--color-dark-200)]/60 border-t-1 border-dark-500/60 backdrop-blur-sm text-white relative z-10">
            <div className="flex flex-row gap-4">
                <p>&copy; Copyright {new Date().getFullYear()} Aditya Satuluri</p>
                <a className={'underline'} href={'https://puter.com/settings'} target={'_blank'}>Check usage</a>
            </div>
            <div className="flex flex-row gap-4">
                <a
                    className="links"
                    href="https://www.linkedin.com/in/aditya-satuluri-a250a31a0/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin className="h-5 w-5 glow"/>
                </a>
                <a
                    className="links"
                    href="https://www.behance.net/adityasatuluri"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaBehance className="h-5 w-5 glow"/>
                </a>

                <a
                    className="links"
                    href="https://www.instagram.com/aditya.satuluri/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaInstagram className="h-5 w-5 glow"/>
                </a>
                <a
                    className="links"
                    href="https://www.github.com/adityasatuluri"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub className="h-5 w-5 glow"/>
                </a>
                <a
                    className="links"
                    href="mailto:s.aditya.in@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaMailBulk className="h-5 w-5 glow"/>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
