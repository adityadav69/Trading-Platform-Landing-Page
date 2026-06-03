import React from 'react';

function Hero() {

    const pricingCards = [
        {
            img: 'media/images/pricingEquity.svg',
            title: 'Free equity delivery',
            desc: 'All equity delivery investments (NSE, BSE), are absolutely free — ₹0 brokerage.',
        },

        {
            img: 'media/images/other-trades.svg',
            title: 'Intraday and F&O trades',
            desc: 'Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.',
        },

        {
            img: 'media/images/pricingEquity.svg',
            title: 'Free direct MF',
            desc: 'All direct mutual fund investments are absolutely free — ₹0 commissions & DP charges.',
        },
    ];

    return (
        <div className='container py-5'>

            <div className='row justify-content-center text-center border-bottom pb-5 mb-5'>

                <div className='col-lg-8 col-12'>

                    <h1
                        className='fw-semibold mb-4'
                        style={{
                            fontSize: "clamp(2rem, 4vw, 3rem)",
                            color: "#222",
                        }}
                    >
                        Pricing
                    </h1>

                    <p
                        className='text-muted mb-0'
                        style={{
                            fontSize: "clamp(1rem, 2vw, 1.3rem)",
                            lineHeight: "1.7",
                        }}
                    >
                        Free equity investments and flat ₹20 intraday and F&O trades
                    </p>

                </div>

            </div>

            <div className='row g-4'>

                {pricingCards.map((card, index) => (

                    <div
                        className='col-lg-4 col-md-6 col-12'
                        key={index}
                    >

                        <div
                            className='text-center h-100 p-4'
                            style={{
                                borderRadius: "14px",
                            }}
                        >

                            <img
                                src={card.img}
                                alt='Pricing'
                                className='img-fluid mb-4'
                                style={{
                                    width: "180px",
                                    maxWidth: "70%",
                                    height: "auto",
                                }}
                            />

                            <h1
                                className='fw-semibold mb-3'
                                style={{
                                    fontSize: "1.8rem",
                                    color: "#222",
                                }}
                            >
                                {card.title}
                            </h1>

                            <p
                                className='text-muted mb-0'
                                style={{
                                    lineHeight: "1.8",
                                    fontSize: "1rem",
                                }}
                            >
                                {card.desc}
                            </p>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default Hero;