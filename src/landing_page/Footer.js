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
                            src="media/images/logo.png"
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
                            © 2010 - 2024, Not Adix Broking Ltd.
                            All rights reserved.
                        </p>

                    </div>

                    <div className="col-lg-3 col-md-6 col-12">

                        <h5 className="mb-4 fw-semibold">Company</h5>

                        <a style={linkStyle} href="/AboutPage">About</a><br />
                        <a style={linkStyle} href="ProductsPage">Products</a><br />
                        <a style={linkStyle} href="/PricingPage">Pricing</a><br />
                        <a style={linkStyle} href="/homepage">Referral programme</a><br />
                        <a style={linkStyle} href="/homepage">Careers</a><br />
                        <a style={linkStyle} href="/homepage">Adix.tech</a><br />
                        <a style={linkStyle} href="/homepage">Press & media</a><br />
                        <a style={linkStyle} href="/homepage">Adix cares (CSR)</a>

                    </div>

                    <div className="col-lg-3 col-md-6 col-12">

                        <h5 className="mb-4 fw-semibold">Support</h5>

                        <a style={linkStyle} href="/homepage">Contact</a><br />
                        <a style={linkStyle} href="/homepage">Support portal</a><br />
                        <a style={linkStyle} href="/homepage">Z-Connect blog</a><br />
                        <a style={linkStyle} href="/homepage">List of charges</a><br />
                        <a style={linkStyle} href="/homepage">Downloads & resources</a>

                    </div>

                    <div className="col-lg-3 col-md-6 col-12">

                        <h5 className="mb-4 fw-semibold">Account</h5>

                        <a style={linkStyle} href="/homepage">Open an account</a><br />
                        <a style={linkStyle} href="/homepage">Fund transfer</a><br />
                        <a style={linkStyle} href="/homepage">60 day challenge</a>

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
                        Adix Broking Ltd.: Member of NSE & BSE – SEBI Registration no.:
                        INZ000031633 CDSL: Depository services through Adix Securities
                        Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
                        through Adix Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
                        no.: INZ000038238 Registered Address: Adix Broking Ltd.,
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
                        <a style={linkStyle} href="/homepage">NSE</a>
                        <a style={linkStyle} href="/homepage">BSE</a>
                        <a style={linkStyle} href="/homepage">MCX</a>
                        <a style={linkStyle} href="/homepage">Terms & conditions</a>
                        <a style={linkStyle} href="/homepage">Policies & procedures</a>
                        <a style={linkStyle} href="/homepage">Privacy policy</a>
                        <a style={linkStyle} href="/homepage">Disclosure</a>
                        <a style={linkStyle} href="/homepage">Investor attention</a>
                        <a style={linkStyle} href="/homepage">Investor charter</a>
                    </div>

                </div>

            </div>
        </footer>
    );
}

export default Footer;