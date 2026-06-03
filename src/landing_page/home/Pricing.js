import React from 'react';

function Pricing() {
    return (
        <div className='container py-5 my-4'>

            <div className='row align-items-center gy-5'>

                <div className='col-lg-5 col-12'>

                    <h1
                        className='fw-semibold mb-4'
                        style={{
                            fontSize: "clamp(2rem, 4vw, 2.8rem)",
                            color: "#222",
                        }}
                    >
                        Unbeatable pricing
                    </h1>

                    <p
                        className='text-muted mb-4'
                        style={{
                            lineHeight: "1.8",
                            fontSize: "1rem",
                        }}
                    >
                        We pioneered the concept of discount broking and price
                        transparency in India. Flat fees and no hidden charges.
                    </p>

                    <a
                        href='/pricingPage'
                        style={{
                            textDecoration: "none",
                            fontWeight: "500",
                            fontSize: "1rem",
                        }}
                    >
                        See Pricing&nbsp;&nbsp;
                        <i
                            className="fa fa-long-arrow-right"
                            aria-hidden="true"
                        ></i>
                    </a>

                </div>

                <div className='col-lg-7 col-12'>

                    <div className='row g-4 text-center'>

                        <div className='col-sm-6 col-12'>

                            <div
                                className='border h-100 d-flex flex-column justify-content-center align-items-center p-4'
                                style={{
                                    borderRadius: "14px",
                                    minHeight: "220px",
                                }}
                            >
                                <h1
                                    className='fw-bold mb-3'
                                    style={{
                                        fontSize: "clamp(2.5rem, 5vw, 4rem)",
                                        color: "#387ed1",
                                    }}
                                >
                                    ₹0
                                </h1>

                                <p
                                    className='text-muted mb-0'
                                    style={{
                                        lineHeight: "1.7",
                                    }}
                                >
                                    Free equity delivery and
                                    <br />
                                    direct mutual funds
                                </p>
                            </div>

                        </div>

                        <div className='col-sm-6 col-12'>

                            <div
                                className='border h-100 d-flex flex-column justify-content-center align-items-center p-4'
                                style={{
                                    borderRadius: "14px",
                                    minHeight: "220px",
                                }}
                            >
                                <h1
                                    className='fw-bold mb-3'
                                    style={{
                                        fontSize: "clamp(2.5rem, 5vw, 4rem)",
                                        color: "#387ed1",
                                    }}
                                >
                                    ₹20
                                </h1>

                                <p
                                    className='text-muted mb-0'
                                    style={{
                                        lineHeight: "1.7",
                                    }}
                                >
                                    Intraday and F&O
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Pricing;