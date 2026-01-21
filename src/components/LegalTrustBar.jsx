import { Shield, Lock, FileCheck } from 'lucide-react';
import './LegalTrustBar.css';

const LegalTrustBar = () => {
    return (
        <div className="trust-bar">
            <div className="trust-container">

                <div className="trust-badges">
                    <div className="badge-item">
                        <Shield size={16} className="text-green-500" />
                        <span>GDPR Compliant</span>
                    </div>
                    <div className="badge-item">
                        <Lock size={16} className="text-blue-500" />
                        <span>256-bit Encryption</span>
                    </div>
                    <div className="badge-item hidden-mobile">
                        <FileCheck size={16} className="text-purple-500" />
                        <span>Verified Secure</span>
                    </div>
                </div>

                <div className="legal-links">
                    <a href="#" className="legal-link">Privacy Policy</a>
                    <a href="#" className="legal-link">Terms of Service</a>
                    <a href="#" className="legal-link">Cookie Policy</a>
                </div>

            </div>
        </div>
    );
};

export default LegalTrustBar;
