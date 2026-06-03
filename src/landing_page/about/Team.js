import React from 'react';

function Team() {
    return (
        <div className='container py-5 mb-5'>

            <div className='row justify-content-center text-center mb-5'>

                <div className='col-12'>
                    <h1
                        className='fw-semibold'
                        style={{
                            fontSize: "25px",
                            color: "#222",
                        }}
                    >
                        People
                    </h1>
                </div>

            </div>

            <div
                className='row align-items-center gy-5 text-muted'
                style={{
                    fontSize: "17px",
                    lineHeight: "1.8",
                }}
            >

                <div className='col-lg-5 col-12 text-center'>

                    <img
                        style={{
                            borderRadius: "50%",
                            width: "260px",
                            height: "260px",
                            objectFit: "cover",
                            maxWidth: "100%",
                        }}
                        src='media/images/nithinKamath.jpg'
                        alt='Founder'
                    />

                    <h4
                        style={{
                            marginTop: "24px",
                            color: "#222",
                        }}
                    >
                        Aditya Yadav
                    </h4>

                    <h6>Founder, CEO</h6>

                </div>

                <div className='col-lg-7 col-12'>

                    <p>
                        Nithin bootstrapped and founded Zerodha in 2010 to
                        overcome the hurdles he faced during his decade long
                        stint as a trader. Today, Zerodha has changed the
                        landscape of the Indian broking industry.
                    </p>

                    <p>
                        He is a member of the SEBI Secondary Market Advisory
                        Committee (SMAC) and the Market Data Advisory Committee
                        (MDAC).
                    </p>

                    <p>
                        Playing basketball is his zen.
                    </p>

                    <p>

                        <a
                            style={{ textDecoration: "none" }}
                            href=''
                        >
                            Connect on Homepage
                        </a>

                        {" / "}

                        <a
                            style={{ textDecoration: "none" }}
                            href=''
                        >
                            TradingQnA
                        </a>

                        {" / "}

                        <a
                            style={{ textDecoration: "none" }}
                            href=''
                        >
                            Twitter
                        </a>

                    </p>

                </div>

            </div>

            <style>{`
                @media (max-width: 768px) {

                    .text-muted {
                        font-size: 15px !important;
                        line-height: 1.7 !important;
                    }

                    h1 {
                        font-size: 22px !important;
                    }

                    h4 {
                        font-size: 22px !important;
                    }

                    h6 {
                        font-size: 15px !important;
                    }
                }
            `}</style>

        </div>
    );
}

export default Team;