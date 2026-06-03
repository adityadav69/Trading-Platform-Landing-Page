import React from 'react';

export default function LeftSection({
    imgUrl,
    productName,
    productDesc,
    tryDemoUrl,
    learnMoreUrl,
    playUrl,
    appStoreUrl
}) {

    return (
        <div className='container py-5'>

            <div className='row align-items-center gy-5'>

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

                <div className='col-lg-6 col-12'>

                    <div className='px-lg-5'>

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

                        <div
                            className='d-flex flex-wrap gap-4 mb-4'
                        >

                            <a
                                href={tryDemoUrl}
                                style={{
                                    textDecoration: "none",
                                    fontWeight: "500",
                                }}
                            >
                                Try demo&nbsp;&nbsp;
                                <i
                                    className="fa fa-long-arrow-right"
                                    aria-hidden="true"
                                ></i>
                            </a>

                            <a
                                href={learnMoreUrl}
                                style={{
                                    textDecoration: "none",
                                    fontWeight: "500",
                                }}
                            >
                                Learn more&nbsp;&nbsp;
                                <i
                                    className="fa fa-long-arrow-right"
                                    aria-hidden="true"
                                ></i>
                            </a>

                        </div>

                        <div
                            className='d-flex flex-wrap align-items-center gap-3'
                        >

                            <a href={playUrl}>
                                <img
                                    src='media/images/googlePlayBadge.svg'
                                    alt='Google Play'
                                    className='img-fluid'
                                    style={{ maxWidth: "160px" }}
                                />
                            </a>

                            <a href={appStoreUrl}>
                                <img
                                    src='media/images/appstoreBadge.svg'
                                    alt='App Store'
                                    className='img-fluid'
                                    style={{ maxWidth: "160px" }}
                                />
                            </a>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}