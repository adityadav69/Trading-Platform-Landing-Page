import React from 'react';
import { useNavigate } from 'react-router-dom';

function OpenAccount() {

    const navigate = useNavigate();

    return (
        <div className='container py-5 my-4'>

            <div className='row justify-content-center text-center'>

                <div className='col-lg-8 col-md-10 col-12'>

                    <h1
                        className='fw-semibold mb-3'
                        style={{
                            fontSize: "clamp(2rem, 4vw, 3rem)",
                            color: "#222",
                            lineHeight: "1.3",
                        }}
                    >
                        Open a Adix account
                    </h1>

                    <p
                        className='text-muted mb-4'
                        style={{
                            fontSize: "1rem",
                            lineHeight: "1.8",
                        }}
                    >
                        Modern platforms and apps, ₹0 investments, and flat ₹20
                        intraday and F&O trades.
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

export default OpenAccount;