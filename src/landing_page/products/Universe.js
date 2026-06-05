import React from 'react';

function Universe() {

    const partners = [
        {
            img: 'media/images/zerodhaFundhouse.png',
            width: "150px",
            desc: `Our asset management venture
            that is creating simple and transparent index
            funds to help you save for your goals.`,
        },

        {
            img: 'media/images/sensibullLogo.svg',
            width: "180px",
            desc: `Options trading platform that lets you
            create strategies, analyze positions, and examine
            data points like open interest, FII/DII, and more.`,
        },

        {
            img: 'media/images/zerodhaFundhouse.png',
            width: "150px",
            desc: `Our asset management venture
            that is creating simple and transparent index
            funds to help you save for your goals.`,
        },

        {
            img: 'media/images/streakLogo.png',
            width: "150px",
            desc: `Systematic trading platform
            that allows you to create and backtest
            strategies without coding.`,
        },

        {
            img: 'media/images/smallcaseLogo.png',
            width: "170px",
            desc: `Thematic investing platform
            that helps you invest in diversified
            baskets of stocks and ETFs.`,
        },

        {
            img: 'media/images/dittoLogo.png',
            width: "120px",
            desc: `Personalized advice on life
            and health insurance. No spam
            and no mis-selling.`,
        },
    ];

    return (
        <div className='container py-5 my-5 text-center'>

            <div className='row justify-content-center mb-5'>

                <div className='col-lg-8 col-12'>

                    <h1
                        className='fw-semibold mb-3'
                        style={{
                            fontSize: "clamp(2rem, 4vw, 2.5rem)",
                            color: "#222",
                        }}
                    >
                        The Adix Universe
                    </h1>

                    <p
                        className='text-muted'
                        style={{
                            lineHeight: "1.8",
                            fontSize: "1rem",
                        }}
                    >
                        Extend your trading and investment experience even
                        further with our partner platforms.
                    </p>

                </div>

            </div>

            <div className='row g-4 justify-content-center'>

                {partners.map((partner, index) => (

                    <div
                        className='col-lg-4 col-md-6 col-12'
                        key={index}
                    >

                        <div
                            className='h-100 p-4'
                            style={{
                                borderRadius: "14px",
                            }}
                        >

                            <img
                                src={partner.img}
                                alt='Partner'
                                className='img-fluid mb-4'
                                style={{
                                    width: partner.width,
                                    maxWidth: "100%",
                                    height: "auto",
                                }}
                            />

                            <p
                                className='text-muted mb-0'
                                style={{
                                    lineHeight: "1.8",
                                    fontSize: "15px",
                                }}
                            >
                                {partner.desc}
                            </p>

                        </div>

                    </div>

                ))}

            </div>

            <button
                className='btn btn-primary px-4 py-2 mt-5'
                style={{
                    minWidth: "220px",
                    fontSize: "18px",
                    borderRadius: "8px",
                }}
            >
                Signup for free
            </button>

        </div>
    );
}

export default Universe;