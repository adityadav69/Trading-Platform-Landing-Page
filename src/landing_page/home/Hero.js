import React from 'react';
import { useNavigate } from 'react-router-dom';

function Hero() {
        const navigate = useNavigate();
    return (
        <div className='container py-5 my-4'>
            <div className='row justify-content-center text-center'>

                <div className='col-12'>
                    <img
                        className='img-fluid mb-5'
                        src='media/images/homeHero.png'
                        alt='Hero'
                        style={{
                            maxWidth: "100%",
                            height: "auto",
                        }}
                    />
                </div>

                <div className='col-lg-8 col-md-10 col-12'>
                    <h1
                        className='fw-semibold mb-3'
                        style={{
                            fontSize: "clamp(2rem, 5vw, 3.5rem)",
                            lineHeight: "1.2",
                            color: "#222",
                        }}
                    >
                        Invest in everything
                    </h1>

                    <p
                        className='mb-4 text-muted'
                        style={{
                            fontSize: "clamp(1rem, 2vw, 1.2rem)",
                        }}
                    >
                        Online platform to invest in stocks, derivatives, mutual funds and more
                    </p>

                    <button
                        className='btn btn-primary px-4 py-2'
                        onClick={() => navigate('/signup')}
                        style={{
                            minWidth: "220px",
                            fontSize: "18px",
                            borderRadius: "8px",
                        }}
                    >
                        Signup for free
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Hero;