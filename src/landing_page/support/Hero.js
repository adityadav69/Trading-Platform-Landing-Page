import React, { useState } from 'react';

function Hero() {

    const [showPopup, setShowPopup] = useState(false);

    const handleTicketClick = (e) => {
        e.preventDefault();

        setShowPopup(true);

        setTimeout(() => {
            setShowPopup(false);
        }, 3000);
    };

    return (
        <section
            className='container-fluid py-5 position-relative'
            id='supportHero'
            style={{
                backgroundColor: "#387ed1",
            }}
        >

            {showPopup && (
                <div
                    style={{
                        position: "fixed",
                        top: "20px",
                        right: "20px",
                        backgroundColor: "#222",
                        color: "white",
                        padding: "14px 20px",
                        borderRadius: "10px",
                        zIndex: "9999",
                        boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                        fontSize: "15px",
                    }}
                >
                    No ticket created
                </div>
            )}

            <div className='container'>

                <div
                    className='d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-5'
                    id='supportWrapper'
                >

                    <h4
                        className='mb-0 text-white'
                        style={{
                            fontSize: "1.7rem",
                        }}
                    >
                        Support Portal
                    </h4>

                    <a
                        href=''
                        onClick={handleTicketClick}
                        style={{
                            color: "white",
                            textDecoration: "none",
                            fontWeight: "500",
                            cursor: "pointer",
                        }}
                    >
                        Track tickets
                    </a>

                </div>

                <div className='row gy-5'>

                    <div className='col-lg-6 col-12'>

                        <h1
                            className='text-white mb-4'
                            style={{
                                fontSize: "clamp(2rem, 4vw, 2.5rem)",
                                lineHeight: "1.5",
                            }}
                        >
                            Search for an answer or browse help topics to create a ticket
                        </h1>

                        <input
                            placeholder='Eg: how do I activate F&O, why is my order getting rejected...'
                            id='inp'
                            className='w-100 border-0 px-4 py-3 rounded mb-4'
                            style={{
                                outline: "none",
                                fontSize: "1rem",
                            }}
                        />

                        <div
                            className='d-flex flex-wrap gap-3'
                            style={{
                                lineHeight: "2",
                            }}
                        >

                            <a
                                href=''
                                style={{
                                    color: "white",
                                    textDecoration: "none",
                                }}
                            >
                                Track opening account
                            </a>

                            <a
                                href=''
                                style={{
                                    color: "white",
                                    textDecoration: "none",
                                }}
                            >
                                Track segment activation
                            </a>

                            <a
                                href=''
                                style={{
                                    color: "white",
                                    textDecoration: "none",
                                }}
                            >
                                Intraday
                            </a>

                            <a
                                href=''
                                style={{
                                    color: "white",
                                    textDecoration: "none",
                                }}
                            >
                                Margins
                            </a>

                            <a
                                href=''
                                style={{
                                    color: "white",
                                    textDecoration: "none",
                                }}
                            >
                                Kite user Manual
                            </a>

                        </div>

                    </div>

                    <div className='col-lg-6 col-12'>

                        <div className='ps-lg-5'>

                            <h1
                                className='text-white mb-4'
                                style={{
                                    fontSize: "2rem",
                                }}
                            >
                                Featured
                            </h1>

                            <ol
                                className='text-white'
                                style={{
                                    lineHeight: "2",
                                    fontSize: "1rem",
                                }}
                            >
                                <li>
                                    Current Takeovers and Delisting - January 2024
                                </li>

                                <li>
                                    Latest Intraday leverages - MIS & CO
                                </li>
                            </ol>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Hero;