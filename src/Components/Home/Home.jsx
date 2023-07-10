import React, { useEffect } from 'react'

import HomeStyle from './Home.module.css';
import { Link } from 'react-router-dom';

export default function Home() {

    // Function will execute on click of button
    const DownloadCV = () => {
        // using Java Script method to get PDF file
        fetch('Projet Portfolio - Partie 1.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Projet Portfolio - Partie 1.pdf';
                alink.click();
            })
        })
    }

    const pdfUrl = process.env.PUBLIC_URL + '/Projet Portfolio - Partie 1.pdf';


    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
    }, []); // Empty dependency array ensures the effect runs only once after the initial render

    return (
        <>
            <header className="py-5 mt-5">
                <div className="container px-5 pb-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-xxl-5">
                            {/* <!-- Header text content--> */}
                            <div className="text-center">
                                <h2 className="text-4xl font-bold mb-4">Software Developer</h2>
                                <p className="text-lg text-gray-800 mb-6">
                                    I specialize in building innovative software solutions to meet your needs. With expertise in various programming languages and frameworks, I can create web and mobile applications tailored to your requirements.
                                </p>
                                 
                                 
                            </div>



                        </div>
                        <div className="col-xxl-7">
                            {/* <!-- Header profile picture--> */}
                            <div className="d-flex justify-content-center mt-5 mt-xxl-0">

                                {/* <!-- TIP: For best results, use a photo with a transparent background like the demo example below--> */}
                                {/* <!-- Watch a tutorial on how to do this on YouTube (link)--> */}
                                <img
                                    className={`${HomeStyle['profile-img']} rounded-circle shadow`}
                                    src={process.env.PUBLIC_URL + '/Images/profile.png'}
                                    alt="..."
                                    style={{ height: '300px', width: '300px' }}
                                />




                            </div>
                        </div>
                    </div>
                </div>
            </header >
        </>
    )
}


