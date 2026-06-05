import React from 'react';

function Hero() {
    return (
        <div className='container border-bottom py-5'>

            <div className='row justify-content-center text-center'>

                <div className='col-lg-8 col-12'>

                    <h1
                        className='fw-semibold mb-3'
                        style={{
                            fontSize: "clamp(2rem, 4vw, 2.8rem)",
                            color: "#222",
                        }}
                    >
                        Adix Products
                    </h1>

                    <h3
                        className='text-muted mb-4'
                        style={{
                            fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
                            fontWeight: "400",
                            lineHeight: "1.6",
                        }}
                    >
                        Sleek, modern, and intuitive trading platforms
                    </h3>

                    <p
                        className='mb-0'
                        style={{
                            fontSize: "1rem",
                        }}
                    >
                        Check out our{" "}

                        <a
                            href='/'
                            style={{
                                textDecoration: "none",
                                fontWeight: "500",
                            }}
                        >
                            investment offerings&nbsp;&nbsp;
                            <i
                                className="fa fa-long-arrow-right"
                                aria-hidden="true"
                            ></i>
                        </a>

                    </p>

                </div>

            </div>

        </div>
    );
}

export default Hero;