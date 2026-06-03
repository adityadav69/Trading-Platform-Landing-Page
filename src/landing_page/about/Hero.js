import React from 'react';

function Hero() {
    return (
        <div className='container py-5 my-4'>

            <div className='row justify-content-center text-center mb-5'>

                <div className='col-lg-10 col-12'>

                    <h1
                        className='fw-semibold mb-2'
                        style={{
                            fontSize: "25px",
                            lineHeight: "1.5",
                            color: "#222",
                        }}
                    >
                        We pioneered the discount broking model in India.
                    </h1>

                    <h1
                        className='fw-semibold'
                        style={{
                            fontSize: "25px",
                            lineHeight: "1.5",
                            color: "#222",
                        }}
                    >
                        Now, we are breaking ground with our technology.
                    </h1>

                </div>

            </div>

            <div
                className='row border-top pt-5 text-muted'
                style={{
                    fontSize: "17px",
                    lineHeight: "1.8",
                }}
            >

                <div className='col-lg-6 col-12 mb-4 mb-lg-0'>

                    <p>
                        We kick-started operations on the 15th of August, 2010
                        with the goal of breaking all barriers that traders and
                        investors face in India in terms of cost, support, and
                        technology. We named the company Zerodha, a combination
                        of Zero and "Rodha", the Sanskrit word for barrier.
                    </p>

                    <p>
                        Today, our disruptive pricing models and in-house
                        technology have made us the biggest stock broker in India.
                    </p>

                    <p>
                        Over 1.6+ crore clients place billions of orders every year
                        through our powerful ecosystem of investment platforms,
                        contributing over 15% of all Indian retail trading volumes.
                    </p>

                </div>

                <div className='col-lg-6 col-12'>

                    <p>
                        In addition, we run a number of popular open online
                        educational and community initiatives to empower retail
                        traders and investors.
                    </p>

                    <p>
                        <a
                            href='/'
                            style={{
                                textDecoration: "none",
                            }}
                        >
                            Rainmatter
                        </a>
                        , our fintech fund and incubator, has invested in several
                        fintech startups with the goal of growing the Indian
                        capital markets.
                    </p>

                    <p>
                        And yet, we are always up to something new every day.
                        Catch up on the latest updates on our{" "}
                        <a
                            style={{ textDecoration: "none" }}
                            href='/'
                        >
                            blog
                        </a>{" "}
                        or see what the media is{" "}
                        <a
                            style={{ textDecoration: "none" }}
                            href='/'
                        >
                            saying about us
                        </a>{" "}
                        or learn more about our business and product{" "}
                        <a
                            style={{ textDecoration: "none" }}
                            href='/'
                        >
                            philosophies
                        </a>.
                    </p>

                </div>

            </div>

            <style>{`
                @media (max-width: 768px) {

                    h1 {
                        font-size: 20px !important;
                        line-height: 1.4 !important;
                    }

                    .row.text-muted {
                        font-size: 15px !important;
                        line-height: 1.7 !important;
                    }
                }
            `}</style>

        </div>
    );
}

export default Hero;