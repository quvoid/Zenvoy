import { Mail, MessageSquare, Phone } from 'lucide-react';
import './ContactSupport.css';

const ContactSupport = () => {
    return (
        <section className="contact-section">
            <div className="contact-container">
                <div className="contact-header">
                    <h2>Need help planning your trip?</h2>
                    <p>Our support team is here to help you 24/7.</p>
                </div>

                <div className="contact-grid">
                    <div className="contact-card">
                        <div className="icon-wrapper">
                            <Mail size={24} />
                        </div>
                        <h3>Email Support</h3>
                        <p>help@tripplanner.io</p>
                    </div>

                    <div className="contact-card">
                        <div className="icon-wrapper">
                            <MessageSquare size={24} />
                        </div>
                        <h3>Live Chat</h3>
                        <p>Available 24/7</p>
                    </div>

                    <div className="contact-card">
                        <div className="icon-wrapper">
                            <Phone size={24} />
                        </div>
                        <h3>Phone Support</h3>
                        <p>+1 (555) 123-4567</p>
                    </div>
                </div>

                <button className="support-cta-btn">
                    Contact Support Team
                </button>
            </div>
        </section>
    );
};

export default ContactSupport;
