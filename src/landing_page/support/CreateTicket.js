import React from 'react';

function CreateTicket() {

    const sections = [
        {
            icon: "fa-solid fa-circle-plus",
            title: "Account Opening",
            links: [
                "Resident individual",
                "Minor",
                "Non Resident Indian (NRI)",
                "Company, Partnership, HUF and LLP",
                "Glossary"
            ]
        },

        {
            icon: "fa-regular fa-circle-user",
            title: "Your Zerodha Account",
            links: [
                "Your Profile",
                "Account modification",
                "Client Master Report (CMR) and Depository Participant (DP)",
                "Nomination",
                "Transfer and conversion of securities"
            ]
        },

        {
            icon: "fa-brands fa-uikit",
            title: "Kite",
            links: [
                "IPO",
                "Trading FAQs",
                "Margin Trading Facility (MTF) and Margins",
                "Charts and orders",
                "Alert and Nudges",
                "General"
            ]
        },

        {
            icon: "fa-solid fa-indian-rupee-sign",
            title: "Fund",
            links: [
                "Add Money",
                "Withdraw money",
                "Add bank accounts",
                "eMandates"
            ]
        },

        {
            icon: "fa-solid fa-circle-notch",
            title: "Console",
            links: [
                "Portfolio",
                "Corporate actions",
                "Funds statement",
                "Reports",
                "Profile",
                "Segments"
            ]
        },

        {
            icon: "fa-solid fa-c",
            title: "Coin",
            links: [
                "Mutual funds",
                "National Pension Scheme (NPS)",
                "Fixed Deposit (FD)",
                "Features on Coin",
                "Payments and Orders",
                "General"
            ]
        }
    ];

    return (
        <div className='container py-5'>

            <div className='row g-4'>

                {sections.map((section, index) => (

                    <div
                        className='col-lg-4 col-md-6 col-12'
                        key={index}
                    >

                        <div
                            className='h-100 p-4'
                            style={{
                                borderRadius: "12px",
                                border: "1px solid #eee",
                                transition: "0.3s ease",
                            }}
                        >

                            <h1
                                className='fs-4 mb-4'
                                style={{
                                    color: "#222",
                                    lineHeight: "1.5",
                                }}
                            >
                                <i className={section.icon}></i>
                                &nbsp;&nbsp;
                                {section.title}
                            </h1>

                            {section.links.map((link, idx) => (

                                <a
                                    key={idx}
                                    style={{
                                        textDecoration: "none",
                                        lineHeight: "2.2",
                                        display: "block",
                                        fontSize: "1rem",
                                    }}
                                    href=""
                                >
                                    {link}
                                </a>

                            ))}

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default CreateTicket;