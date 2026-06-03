import React from 'react';

function Awards() {
    return (
        <div className='container py-5 my-4'>
            <div className='row align-items-center gy-5'>

                <div className='col-lg-6 col-12 text-center'>
                    <img
                        src='media/images/largestBroker.svg'
                        alt='Largest Broker'
                        className='img-fluid'
                        style={{
                            maxWidth: "100%",
                            height: "auto",
                        }}
                    />
                </div>

                <div className='col-lg-6 col-12'>

                    <h1
                        className='fw-semibold mb-4'
                        style={{
                            fontSize: "clamp(2rem, 4vw, 2.8rem)",
                            lineHeight: "1.3",
                            color: "#222",
                        }}
                    >
                        Largest stock broker in India
                    </h1>

                    <p
                        className='text-muted mb-4'
                        style={{
                            fontSize: "1.05rem",
                            lineHeight: "1.8",
                        }}
                    >
                        2+ million Zerodha clients contribute to over 15% of all retail order
                        volumes in India daily by trading and investing in:
                    </p>

                    <div className='row mb-4'>

                        <div className='col-sm-6 col-12'>
                            <ul className='ps-3'>
                                <li><p>Futures and Options</p></li>
                                <li><p>Commodity derivatives</p></li>
                                <li><p>Currency derivatives</p></li>
                            </ul>
                        </div>

                        <div className='col-sm-6 col-12'>
                            <ul className='ps-3'>
                                <li><p>Stocks and IPOs</p></li>
                                <li><p>Direct mutual funds</p></li>
                                <li><p>Bonds and Govt. Securities</p></li>
                            </ul>
                        </div>

                    </div>

                    <div className='text-center text-lg-start'>
                        <img
                            src='media/images/pressLogos.png'
                            alt='Press Logos'
                            className='img-fluid'
                            style={{
                                maxWidth: "90%",
                            }}
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Awards;