import { Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-container">

                <div className="footer-grid">
                    {/* Brand Column */}
                    <div className="footer-brand">
                        <h3>TripPlanner</h3>
                        <p>
                            Your all-in-one platform for creating, organizing, and sharing unforgettable travel experiences.
                        </p>
                    </div>

                    {/* Product Links */}
                    <div className="footer-col">
                        <h4>Product</h4>
                        <nav className="footer-links">
                            <a href="#">Features</a>
                            <a href="#">Pricing</a>
                            <a href="#">App</a>
                            <a href="#">Integrations</a>
                        </nav>
                    </div>

                    {/* Company Links */}
                    <div className="footer-col">
                        <h4>Company</h4>
                        <nav className="footer-links">
                            <a href="#">About Us</a>
                            <a href="#">Careers</a>
                            <a href="#">Blog</a>
                            <a href="#">Press</a>
                        </nav>
                    </div>

                    {/* Support Links */}
                    <div className="footer-col">
                        <h4>Support</h4>
                        <nav className="footer-links">
                            <a href="#">Help Center</a>
                            <a href="#">Contact</a>
                            <a href="#">Status</a>
                            <a href="#">Community</a>
                        </nav>
                    </div>

                    {/* Legal Links */}
                    <div className="footer-col">
                        <h4>Legal</h4>
                        <nav className="footer-links">
                            <a href="#">Privacy</a>
                            <a href="#">Terms</a>
                            <a href="#">Security</a>
                        </nav>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="copyright">© 2024 TripPlanner Inc. All rights reserved.</p>

                    <div className="social-icons">
                        <a href="#" className="social-link"><Instagram size={20} /></a>
                        <a href="#" className="social-link"><Twitter size={20} /></a>
                        <a href="#" className="social-link"><Linkedin size={20} /></a>
                        <a href="#" className="social-link"><Facebook size={20} /></a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
