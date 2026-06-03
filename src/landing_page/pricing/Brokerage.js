import React from 'react';

function Brokerage() {
    return (
        <div className='container py-5'>

            <div className='row g-5'>

                <div className='col-lg-8 col-12'>

                    <h4 className='text-center mb-4'>
                        <a
                            style={{ textDecoration: "none" }}
                            href='/'
                        >
                            Brokerage Calculator
                        </a>
                    </h4>

                    <ul
                        className='text-muted'
                        style={{
                            textAlign: "left",
                            lineHeight: "2.2",
                            fontSize: "1rem",
                        }}
                    >
                        <li>
                            Call & Trade and RMS auto-squareoff: Additional charge of ₹50 + GST per order
                        </li>

                        <li>
                            Digital contract notes will be sent via e-mail
                        </li>

                        <li>
                            Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.
                        </li>

                        <li>
                            For NRI accounts (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower)
                        </li>

                        <li>
                            For NRI accounts (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower)
                        </li>

                        <li>
                            If the account is debit balance, any order placed will be charged ₹40 per executed order instead of ₹20
                        </li>
                    </ul>

                </div>

                <div className='col-lg-4 col-12'>

                    <h4 className='text-center mb-4'>
                        <a
                            style={{ textDecoration: "none" }}
                            href='/'
                        >
                            List of Charges
                        </a>
                    </h4>

                    <ul
                        className='text-muted'
                        style={{
                            lineHeight: "2.2",
                            fontSize: "1rem",
                        }}
                    >
                        <li>Account opening: ₹0</li>
                        <li>Equity delivery: ₹0</li>
                        <li>Intraday trading: ₹20/order</li>
                        <li>F&O trading: ₹20/order</li>
                        <li>AMC charges: ₹300/year</li>
                        <li>DP charges: ₹13.5 per sell transaction</li>
                    </ul>

                </div>

            </div>

        </div>
    );
}

export default Brokerage;