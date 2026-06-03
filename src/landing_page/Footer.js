import React from "react";

function Footer() {

    const linkStyle = {
        color: "#444",
        textDecoration: "none",
        display: "inline-block",
        marginBottom: "10px",
        transition: "0.3s",
    };

    return (
        <footer
            className="border-top py-5"
            style={{ backgroundColor: "rgb(250, 250, 250)" }}
        >
            <div className="container">

                <div className="row gy-5">

                    <div className="col-lg-3 col-md-6 col-12">

                        <img
                            src="media/images/logo.svg"
                            alt="Logo"
                            className="img-fluid mb-4"
                            style={{ maxWidth: "160px" }}
                        />

                        <p
                            className="text-muted"
                            style={{
                                lineHeight: "1.8",
                                fontSize: "14px",
                            }}
                        >
                            © 2010 - 2024, Not Zerodha Broking Ltd.
                            All rights reserved.
                        </p>

                    </div>

                    <div className="col-lg-3 col-md-6 col-12">

                        <h5 className="mb-4 fw-semibold">Company</h5>

                        <a style={linkStyle} href="/AboutPage">About</a><br />
                        <a style={linkStyle} href="ProductsPage">Products</a><br />
                        <a style={linkStyle} href="/PricingPage">Pricing</a><br />
                        <a style={linkStyle} href="/">Referral programme</a><br />
                        <a style={linkStyle} href="/">Careers</a><br />
                        <a style={linkStyle} href="/">Zerodha.tech</a><br />
                        <a style={linkStyle} href="/">Press & media</a><br />
                        <a style={linkStyle} href="/">Zerodha cares (CSR)</a>

                    </div>

                    <div className="col-lg-3 col-md-6 col-12">

                        <h5 className="mb-4 fw-semibold">Support</h5>

                        <a style={linkStyle} href="/">Contact</a><br />
                        <a style={linkStyle} href="/">Support portal</a><br />
                        <a style={linkStyle} href="/">Z-Connect blog</a><br />
                        <a style={linkStyle} href="/">List of charges</a><br />
                        <a style={linkStyle} href="/">Downloads & resources</a>

                    </div>

                    <div className="col-lg-3 col-md-6 col-12">

                        <h5 className="mb-4 fw-semibold">Account</h5>

                        <a style={linkStyle} href="/">Open an account</a><br />
                        <a style={linkStyle} href="/">Fund transfer</a><br />
                        <a style={linkStyle} href="/">60 day challenge</a>

                    </div>

                </div>

                <div
                    className="mt-5 pt-4 border-top text-muted"
                    style={{
                        fontSize: "14px",
                        lineHeight: "1.9",
                    }}
                >

                    <p>
                        Zerodha Broking Ltd.: Member of NSE & BSE – SEBI Registration no.:
                        INZ000031633 CDSL: Depository services through Zerodha Securities
                        Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
                        through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
                        no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
                        #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
                        J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.
                    </p>

                    <p>
                        Procedure to file a complaint on SEBI SCORES:
                        Register on SCORES portal. Mandatory details for filing complaints:
                        Name, PAN, Address, Mobile Number, E-mail ID.
                    </p>

                    <p>
                        Investments in securities market are subject to market risks;
                        read all related documents carefully before investing.
                    </p>

                    <p>
                        Prevent unauthorised transactions in your account.
                        Update your mobile numbers/email IDs with your stock brokers.
                        Receive transaction information directly from Exchange on your
                        mobile/email at the end of the day.
                    </p>

                    <div
                        className="d-flex flex-wrap justify-content-center gap-3 mt-4"
                    >
                        <a style={linkStyle} href="/">NSE</a>
                        <a style={linkStyle} href="/">BSE</a>
                        <a style={linkStyle} href="/">MCX</a>
                        <a style={linkStyle} href="/">Terms & conditions</a>
                        <a style={linkStyle} href="/">Policies & procedures</a>
                        <a style={linkStyle} href="/">Privacy policy</a>
                        <a style={linkStyle} href="/">Disclosure</a>
                        <a style={linkStyle} href="/">Investor attention</a>
                        <a style={linkStyle} href="/">Investor charter</a>
                    </div>

                </div>

            </div>
        </footer>
    );
}

export default Footer;