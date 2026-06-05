import React, { useState } from "react";
import { Link } from "react-router-dom";

const API_URL = process.env.REACT_APP_BACKEND_URL;
const DASHBOARD_URL = process.env.REACT_APP_DASHBOARD_URL;


function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [errorEffect, setErrorEffect] = useState(false);
    const [successEffect, setSuccessEffect] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");
        setErrorEffect(false);

        try {
            const response = await fetch(`${API_URL}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccessEffect(true);
                setMessage("Login successful!");

                const encodedUser = encodeURIComponent(JSON.stringify(data.user));

                setTimeout(() => {
                    window.location.href = `${DASHBOARD_URL}?token=${data.token}&user=${encodedUser}`;
                }, 1200);
            } else {
                setMessage(data.message || "Invalid email or password");
                setErrorEffect(true);

                setTimeout(() => {
                    setErrorEffect(false);
                }, 700);
            }
        } catch (error) {
            setMessage("Server error. Please try again.");
            setErrorEffect(true);

            setTimeout(() => {
                setErrorEffect(false);
            }, 700);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-shell login-shell">
            <div className="auth-orb orb-one"></div>
            <div className="auth-orb orb-two"></div>
            <div className="auth-orb orb-three"></div>

            <div className="auth-container">
                <div
                    className={`auth-panel ${errorEffect ? "auth-error" : ""} ${
                        successEffect ? "login-success" : ""
                    }`}
                >
                    <div className="auth-badge">↗</div>

                    <h2>Welcome back</h2>

                    <p className="auth-subtitle">
                        Login and continue to your trading dashboard
                    </p>

                    {message && (
                        <div
                            className={`auth-alert ${
                                successEffect ? "success" : "error"
                            }`}
                        >
                            {message}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="input-box">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder=" "
                            />
                            <label>Email</label>
                        </div>

                        <div className="input-box">
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                placeholder=" "
                            />
                            <label>Password</label>
                        </div>

                        <button type="submit" disabled={loading}>
                            {loading ? "Checking..." : "Login"}
                        </button>
                    </form>

                    <p className="auth-switch">
                        Not signed up yet?{" "}
                        <Link to="/signup">Create account</Link>
                    </p>
                    <p className="auth-switch">
                        continue without login?{" "}
                        <Link to="/homepage">Landing Page</Link>
                    </p>
                </div>
            </div>

            <style>{`
                .auth-shell {
                    min-height: 100vh;
                    width: 100%;
                    position: relative;
                    overflow: hidden;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 40px 15px;
                    background:
                        radial-gradient(circle at top left, #d7eaff 0%, transparent 32%),
                        radial-gradient(circle at bottom right, #cfe3ff 0%, transparent 30%),
                        linear-gradient(135deg, #f8fbff, #eef6ff);
                }

                .login-shell {
                    background:
                        radial-gradient(circle at top right, #dbeafe 0%, transparent 34%),
                        radial-gradient(circle at bottom left, #e0f2fe 0%, transparent 30%),
                        linear-gradient(135deg, #f8fbff, #ffffff);
                }

                .auth-container {
                    width: 100%;
                    max-width: 450px;
                    perspective: 1200px;
                    z-index: 2;
                }

                .auth-panel {
                    position: relative;
                    background: rgba(255,255,255,0.72);
                    backdrop-filter: blur(22px);
                    border: 1px solid rgba(255,255,255,0.9);
                    border-radius: 28px;
                    padding: 38px;
                    box-shadow:
                        0 30px 80px rgba(56,126,209,0.22),
                        inset 0 1px 0 rgba(255,255,255,0.9);
                    animation: slideTilt 0.9s ease;
                    transform-style: preserve-3d;
                    transition: 0.4s ease;
                }

                .auth-panel::before {
                    content: "";
                    position: absolute;
                    inset: -2px;
                    border-radius: 30px;
                    background: linear-gradient(135deg, rgba(56,126,209,0.5), transparent, rgba(56,126,209,0.2));
                    z-index: -1;
                }

                .auth-panel:hover {
                    transform: translateY(-6px) rotateX(2deg) rotateY(2deg);
                }

                .auth-badge {
                    width: 56px;
                    height: 56px;
                    margin: 0 auto 18px;
                    border-radius: 18px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: linear-gradient(135deg, #387ed1, #2563eb);
                    color: white;
                    font-size: 28px;
                    font-weight: 700;
                    box-shadow: 0 14px 30px rgba(56,126,209,0.4);
                    animation: bounceIcon 2.8s ease-in-out infinite;
                }

                .auth-panel h2 {
                    text-align: center;
                    font-weight: 700;
                    color: #1f2937;
                    margin-bottom: 8px;
                }

                .auth-subtitle {
                    text-align: center;
                    color: #6b7280;
                    margin-bottom: 28px;
                    line-height: 1.6;
                }

                .input-box {
                    position: relative;
                    margin-bottom: 20px;
                }

                .input-box input {
                    width: 100%;
                    height: 54px;
                    border: 1px solid #dbe5f1;
                    border-radius: 16px;
                    outline: none;
                    padding: 18px 16px 6px;
                    background: rgba(255,255,255,0.85);
                    font-size: 15px;
                    transition: 0.3s ease;
                    box-shadow: inset 0 2px 5px rgba(0,0,0,0.04);
                }

                .input-box label {
                    position: absolute;
                    top: 15px;
                    left: 16px;
                    color: #7b8794;
                    pointer-events: none;
                    transition: 0.25s ease;
                    font-size: 15px;
                }

                .input-box input:focus,
                .input-box input:not(:placeholder-shown) {
                    border-color: #387ed1;
                    box-shadow: 0 0 0 4px rgba(56,126,209,0.12);
                }

                .input-box input:focus + label,
                .input-box input:not(:placeholder-shown) + label {
                    top: 6px;
                    font-size: 12px;
                    color: #387ed1;
                }

                .auth-panel button {
                    width: 100%;
                    height: 52px;
                    border: none;
                    border-radius: 16px;
                    background: linear-gradient(135deg, #387ed1, #2563eb);
                    color: white;
                    font-size: 17px;
                    font-weight: 600;
                    box-shadow: 0 14px 28px rgba(56,126,209,0.35);
                    transition: 0.3s ease;
                }

                .auth-panel button:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 20px 35px rgba(56,126,209,0.45);
                }

                .auth-panel button:disabled {
                    opacity: 0.7;
                    cursor: not-allowed;
                }

                .auth-switch {
                    text-align: center;
                    margin: 25px 0 0;
                    color: #6b7280;
                }

                .auth-switch a {
                    text-decoration: none;
                    font-weight: 600;
                    color: #387ed1;
                }

                .auth-alert {
                    text-align: center;
                    padding: 10px 14px;
                    border-radius: 12px;
                    margin-bottom: 20px;
                    font-size: 14px;
                }

                .auth-alert.success {
                    background: #e8fff3;
                    color: #15803d;
                }

                .auth-alert.error {
                    background: #fff1f2;
                    color: #be123c;
                }

                .auth-error {
                    animation: elasticError 0.7s ease;
                }

                .login-success {
                    animation: dashboardJump 1.1s ease forwards;
                }

                .auth-orb {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(2px);
                    opacity: 0.65;
                    animation: orbit 8s ease-in-out infinite;
                }

                .orb-one {
                    width: 220px;
                    height: 220px;
                    background: rgba(56,126,209,0.22);
                    top: 8%;
                    left: 8%;
                }

                .orb-two {
                    width: 160px;
                    height: 160px;
                    background: rgba(37,99,235,0.18);
                    bottom: 12%;
                    right: 12%;
                    animation-delay: 1s;
                }

                .orb-three {
                    width: 95px;
                    height: 95px;
                    background: rgba(99,179,237,0.25);
                    top: 18%;
                    right: 20%;
                    animation-delay: 2s;
                }

                @keyframes slideTilt {
                    0% {
                        opacity: 0;
                        transform: translateX(-80px) rotateY(-35deg) scale(0.9);
                    }
                    100% {
                        opacity: 1;
                        transform: translateX(0) rotateY(0) scale(1);
                    }
                }

                @keyframes bounceIcon {
                    0%, 100% {
                        transform: translateY(0) rotateZ(0);
                    }
                    50% {
                        transform: translateY(-8px) rotateZ(8deg);
                    }
                }

                @keyframes elasticError {
                    0% { transform: scale(1) rotateZ(0); }
                    20% { transform: scale(1.03) rotateZ(-2deg); }
                    40% { transform: scale(0.98) rotateZ(2deg); }
                    60% { transform: scale(1.02) rotateZ(-1deg); }
                    80% { transform: scale(0.99) rotateZ(1deg); }
                    100% { transform: scale(1) rotateZ(0); }
                }

                @keyframes dashboardJump {
                    0% {
                        transform: translateY(0) scale(1);
                        opacity: 1;
                    }
                    35% {
                        transform: translateY(-22px) scale(1.05);
                        opacity: 1;
                    }
                    100% {
                        transform: translateX(180px) translateY(-120px) scale(0.4) rotateZ(18deg);
                        opacity: 0;
                    }
                }

                @keyframes orbit {
                    0%, 100% {
                        transform: translate(0,0) scale(1);
                    }
                    50% {
                        transform: translate(20px,-20px) scale(1.08);
                    }
                }

                @media (max-width: 576px) {
                    .auth-panel {
                        padding: 28px 20px;
                        border-radius: 22px;
                    }

                    .auth-panel h2 {
                        font-size: 1.6rem;
                    }

                    .auth-badge {
                        width: 50px;
                        height: 50px;
                    }
                }
            `}</style>
        </div>
    );
}

export default Login;