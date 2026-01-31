import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Github, Linkedin, Facebook, Chrome } from 'lucide-react';
import { motion } from 'framer-motion';
import './AuthPage.css';

const AuthPage = () => {
    const [isActive, setIsActive] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.pathname === '/signup') {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }, [location.pathname]);

    const handleRegisterClick = () => {
        setIsActive(true);
        navigate('/signup');
    };

    const handleLoginClick = () => {
        setIsActive(false);
        navigate('/login');
    };

    return (
        <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
            {/* Background Video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                src="/vidforlog.mp4"
                autoPlay
                muted
                playsInline
            />
            {/* Overlay to ensure text readability if needed, though not requested yet. Leaving raw video for now. */}

            <motion.div
                className="auth-container z-10 relative"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                    delay: 2.5,
                    duration: 1.5,
                    type: "spring",
                    stiffness: 60,
                    damping: 15
                }}
            >
                <div className={`auth-container ${isActive ? 'active' : ''}`} id="container">
                    <div className="form-container sign-up">
                        <form onSubmit={(e) => e.preventDefault()}>
                            <h1 className="font-bold text-2xl mb-2">Create Account</h1>
                            <div className="social-icons my-4">
                                <a href="#" className="icon"><Chrome size={20} /></a>
                                <a href="#" className="icon"><Facebook size={20} /></a>
                                <a href="#" className="icon"><Github size={20} /></a>
                                <a href="#" className="icon"><Linkedin size={20} /></a>
                            </div>
                            <span className="mb-2">or use your email for registration</span>
                            <input type="text" placeholder="Name" className="font-sans" />
                            <input type="email" placeholder="Email" className="font-sans" />
                            <input type="password" placeholder="Password" className="font-sans" />
                            <button className="mt-4">Sign Up</button>
                        </form>
                    </div>
                    <div className="form-container sign-in">
                        <form onSubmit={(e) => e.preventDefault()}>
                            <h1 className="font-bold text-2xl mb-2">Sign In</h1>
                            <div className="social-icons my-4">
                                <a href="#" className="icon"><Chrome size={20} /></a>
                                <a href="#" className="icon"><Facebook size={20} /></a>
                                <a href="#" className="icon"><Github size={20} /></a>
                                <a href="#" className="icon"><Linkedin size={20} /></a>
                            </div>
                            <span className="mb-2">or use your email password</span>
                            <input type="email" placeholder="Email" className="font-sans" />
                            <input type="password" placeholder="Password" className="font-sans" />
                            <a href="#">Forget Your Password?</a>
                            <button className="mt-4">Sign In</button>
                        </form>
                    </div>
                    <div className="toggle-container">
                        <div className="toggle">
                            <div className="toggle-panel toggle-left">
                                <h1 className="font-bold text-2xl mb-2">Welcome Back!</h1>
                                <p>Enter your personal details to use all of site features</p>
                                <button className="ghost" onClick={handleLoginClick}>Sign In</button>
                            </div>
                            <div className="toggle-panel toggle-right">
                                <h1 className="font-bold text-2xl mb-2">Welcome to ZENVOY!</h1>
                                <p>Register with your personal details to use all of site features</p>
                                <button className="ghost" onClick={handleRegisterClick}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default AuthPage;
