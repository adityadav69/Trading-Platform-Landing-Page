import React from 'react';

function Stats() {
    return (
        <div className='container py-5 my-4'>

            <div className='row align-items-center gy-5'>

                <div className='col-lg-6 col-12'>

                    <h1
                        className='fw-semibold mb-5'
                        style={{
                            fontSize: "clamp(2rem, 4vw, 2.8rem)",
                            color: "#222",
                        }}
                    >
                        Trust with confidence
                    </h1>

                    <div className='mb-4'>
                        <h2 className='fs-4 fw-semibold mb-3'>
                            Customer-first always
                        </h2>

                        <p
                            className='text-muted'
                            style={{
                                lineHeight: "1.8",
                                fontSize: "1rem",
                            }}
                        >
                            That's why 1.3+ crore customers trust Zerodha with
                            3.5+ lakh crores worth of equity investments.
                        </p>
                    </div>

                    <div className='mb-4'>
                        <h2 className='fs-4 fw-semibold mb-3'>
                            No spam or gimmicks
                        </h2>

                        <p
                            className='text-muted'
                            style={{
                                lineHeight: "1.8",
                                fontSize: "1rem",
                            }}
                        >
                            No gimmicks, spam, gamification, or annoying push
                            notifications. High quality apps that you use at
                            your pace, the way you like.
                        </p>
                    </div>

                    <div className='mb-4'>
                        <h2 className='fs-4 fw-semibold mb-3'>
                            The Zerodha universe
                        </h2>

                        <p
                            className='text-muted'
                            style={{
                                lineHeight: "1.8",
                                fontSize: "1rem",
                            }}
                        >
                            Not just an app, but a whole ecosystem. Our
                            investments in 30+ fintech startups offer you
                            tailored services specific to your needs.
                        </p>
                    </div>

                    <div>
                        <h2 className='fs-4 fw-semibold mb-3'>
                            Do better with money
                        </h2>

                        <p
                            className='text-muted'
                            style={{
                                lineHeight: "1.8",
                                fontSize: "1rem",
                            }}
                        >
                            With initiatives like Nudge and Kill Switch, we
                            don't just facilitate transactions, but actively
                            help you do better with your money.
                        </p>
                    </div>

                </div>

                <div className='col-lg-6 col-12 text-center'>

                    <img
                        className='img-fluid'
                        style={{
                            maxWidth: "90%",
                            height: "auto",
                        }}
                        src='media/images/ecosystem.png'
                        alt='Ecosystem'
                    />

                    <div
                        className='d-flex flex-column flex-md-row justify-content-center align-items-center gap-4 mt-4'
                    >
                        <a
                            href='/productsPage'
                            style={{
                                textDecoration: "none",
                                fontWeight: "500",
                            }}
                        >
                            Explore our products&nbsp;
                            <i
                                className="fa fa-long-arrow-right"
                                aria-hidden="true"
                            ></i>
                        </a>

                        <a
                            href='/productsPage'
                            style={{
                                textDecoration: "none",
                                fontWeight: "500",
                            }}
                        >
                            Try Kite Demo&nbsp;
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

export default Stats;