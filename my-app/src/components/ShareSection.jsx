import { useState } from 'react';
import { Save, Share2, Download, Printer, X, Copy, Check, Twitter, Mail, MessageCircle } from 'lucide-react';
import './ShareSection.css';

const ShareSection = () => {
    const [activeModal, setActiveModal] = useState(null);
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    const openModal = (modalName) => setActiveModal(modalName);
    const closeModal = () => setActiveModal(null);

    const triggerToast = (message) => {
        setToastMessage(message);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText('https://tripplanner.io/plan/xyz123');
        triggerToast('Link copied to clipboard!');
    };

    const handleSave = () => {
        closeModal();
        triggerToast('Trip saved successfully!');
    };

    return (
        <section className="share-section">
            <div className="share-container">
                <div className="share-header">
                    <h2>Save & Share Your Trip</h2>
                    <p>Ready to go? Save your itinerary or share it with travel buddies.</p>
                </div>

                <div className="action-bar">
                    <button className="action-btn primary" onClick={() => openModal('save')}>
                        <Save className="btn-icon" />
                        Save Trip
                    </button>

                    <button className="action-btn" onClick={() => openModal('share')}>
                        <Share2 className="btn-icon" />
                        Share Link
                    </button>

                    <button className="action-btn" onClick={() => openModal('export')}>
                        <Download className="btn-icon" />
                        Export PDF
                    </button>

                    <button className="action-btn" onClick={() => triggerToast('Sent to printer!')}>
                        <Printer className="btn-icon" />
                        Print
                    </button>
                </div>
            </div>

            {/* Modals */}
            {activeModal && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3 className="modal-title">
                                {activeModal === 'save' && 'Save Itinerary'}
                                {activeModal === 'share' && 'Share with Friends'}
                                {activeModal === 'export' && 'Export as PDF'}
                            </h3>
                            <button className="close-btn" onClick={closeModal}><X size={20} /></button>
                        </div>

                        {activeModal === 'save' && (
                            <>
                                <div className="input-group">
                                    <label className="input-label">Trip Name</label>
                                    <input type="text" className="modal-input" defaultValue="My Awesome Euro Trip" autoFocus />
                                </div>
                                <button className="modal-action-btn" onClick={handleSave}>Save Trip</button>
                            </>
                        )}

                        {activeModal === 'share' && (
                            <>
                                <div className="copy-link-box">
                                    <input type="text" className="link-text" value="https://tripplanner.io/plan/xyz123" readOnly />
                                    <button className="copy-btn" onClick={handleCopy}><Copy size={16} /></button>
                                </div>
                                <div className="social-share">
                                    <button className="social-btn"><Twitter size={20} /></button>
                                    <button className="social-btn"><MessageCircle size={20} /></button>
                                    <button className="social-btn"><Mail size={20} /></button>
                                </div>
                            </>
                        )}

                        {activeModal === 'export' && (
                            <>
                                <div style={{ background: 'rgba(255,255,255,0.05)', height: '150px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', border: '1px dashed rgba(255,255,255,0.2)' }}>
                                    <span style={{ color: '#a3a3a3' }}>PDF Preview</span>
                                </div>
                                <button className="modal-action-btn" onClick={() => { closeModal(); triggerToast('Downloading PDF...'); }}>
                                    Download PDF
                                </button>
                            </>
                        )}
                    </div>
                </div>
            )}

            {/* Toast Notification */}
            {showToast && (
                <div className="toast">
                    <Check size={16} color="#a855f7" />
                    {toastMessage}
                </div>
            )}
        </section>
    );
};

export default ShareSection;
