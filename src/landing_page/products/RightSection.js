import React from 'react';

function RightSection({
    imgUrl,
    productName,
    productDesc,
    learnMoreUrl
}) {

    return (
        <div className='container py-5'>

            <div className='row align-items-center gy-5 flex-lg-row flex-column-reverse'>

                <div className='col-lg-6 col-12'>

                    <div className='pe-lg-5'>

                        <h1
                            className='fw-semibold mb-3'
                            style={{
                                fontSize: "clamp(2rem, 4vw, 2.5rem)",
                                color: "#222",
                            }}
                        >
                            {productName}
                        </h1>

                        <p
                            className='text-muted mb-4'
                            style={{
                                lineHeight: "1.8",
                                fontSize: "1rem",
                            }}
                        >
                            {productDesc}
                        </p>

                        <div>

                            <a
                                href={learnMoreUrl}
                                style={{
                                    textDecoration: "none",
                                    fontWeight: "500",
                                }}
                            >
                                Learn More&nbsp;&nbsp;
                                <i
                                    className="fa fa-long-arrow-right"
                                    aria-hidden="true"
                                ></i>
                            </a>

                        </div>

                    </div>

                </div>

                <div className='col-lg-6 col-12 text-center'>

                    <img
                        src={imgUrl}
                        alt='product'
                        className='img-fluid'
                        style={{
                            maxWidth: "100%",
                            height: "auto",
                        }}
                    />

                </div>

            </div>

        </div>
    );
}

export default RightSection;