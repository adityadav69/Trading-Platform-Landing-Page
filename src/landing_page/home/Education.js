import React from 'react';

function Education() {
    return (
        <div className='container py-5 my-4'>

            <div className='row align-items-center gy-5'>

                <div className='col-lg-6 col-12 text-center'>

                    <img
                        src='media/images/education.svg'
                        alt='Education'
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
                            color: "#222",
                            lineHeight: "1.3",
                        }}
                    >
                        Free and open market education
                    </h1>

                    <div className='mb-5'>

                        <p
                            className='text-muted mb-3'
                            style={{
                                lineHeight: "1.8",
                                fontSize: "1rem",
                            }}
                        >
                            Varsity, the largest online stock market education
                            book in the world covering everything from the basics
                            to advanced trading.
                        </p>

                        <a
                            href='/aboutPage'
                            style={{
                                textDecoration: "none",
                                fontWeight: "500",
                                fontSize: "1rem",
                            }}
                        >
                            Varsity&nbsp;&nbsp;
                            <i
                                className="fa fa-long-arrow-right"
                                aria-hidden="true"
                            ></i>
                        </a>

                    </div>

                    <div>

                        <p
                            className='text-muted mb-3'
                            style={{
                                lineHeight: "1.8",
                                fontSize: "1rem",
                            }}
                        >
                            TradingQ&A, the most active trading and investment
                            community in India for all your market related
                            queries.
                        </p>

                        <a
                            href='/aboutPage'
                            style={{
                                textDecoration: "none",
                                fontWeight: "500",
                                fontSize: "1rem",
                            }}
                        >
                            TradingQ&A&nbsp;&nbsp;
                            <i
                                className="fa fa-long-arrow-right"
                                aria-hidden="true"
                            ></i>
                        </a>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Education;