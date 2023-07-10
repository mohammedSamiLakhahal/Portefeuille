// Importing necessary styles and components


import React from 'react';
import FooterStyle from './Footer.module.css';

export default function Footer() {
    return (
        <>
            {/* Horizontal line separator */}
            <hr className={`${FooterStyle['horizental-line']}`} />

            {/* Footer section */}
            <footer className={`${FooterStyle['footer']}`}>
                <div className={`${FooterStyle['footer-content']}`}>
                    {/* Footer title */}
                    <h3>Lakhahal Mohammed Sami</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, nesciunt autem non iste soluta temporibus mollitia numquam. In, nemo sed?</p> {/* Footer description */}

                    {/* Social media icons */}
                    <ul className={`${FooterStyle['socials']}`}>
                        
                        <li>
                            {/* GitHub link */}
                            <a href="https://github.com" target='_blank'><i className="fa-brands fa-github"></i></a>
                        </li>
                        <li>
                            {/* LinkedIn link */}
                            <a href="https://www.linkedin.com/" target='_blank'><i className="fa-brands fa-linkedin"></i></a>
                        </li>
                        <li>
                            {/* Twitter link */}
                            <a href="https://twitter.com/" target='_blank'><i className="fa-brands fa-twitter"></i></a>
                        </li>
                    </ul>
                </div>

                {/* Footer bottom section */}
                <div className={`${FooterStyle['footer-bottom']}`}>
                    <p>
                        {/* Copyright information */}
                        Copyright &copy;2023 Lakhahal Mohammed Sami. Designed by <span>Lakhahal Mohammed Sami</span>
                    </p>
                </div>
            </footer>
        </>
    );
}
