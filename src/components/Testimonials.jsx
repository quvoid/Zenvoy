import { Quote, Star } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
    const testimonials = [
        {
            text: "TripPlanner saved me hours of planning. Everything was perfectly organized!",
            author: "Sarah",
            role: "Digital Nomad",
            avatar: "S"
        },
        {
            text: "The route suggestions were spot on and super affordable.",
            author: "Rahul",
            role: "Backpacker",
            avatar: "R"
        },
        {
            text: "Best travel planning tool I've used in years.",
            author: "Emma",
            role: "Travel Blogger",
            avatar: "E"
        }
    ];

    // Duplicate testimonials for infinite loop
    const duplicatedTestimonials = [...testimonials, ...testimonials];

    return (
        <section className="testimonials-section">
            <div className="testimonials-container">
                <div className="testimonials-header">
                    <h2>Loved by travelers worldwide</h2>
                </div>

                <div className="testimonials-carousel">
                    <div className="testimonials-track">
                        {duplicatedTestimonials.map((testimonial, index) => (
                            <div key={index} className="testimonial-card">
                                <Quote className="quote-icon" />

                                <div className="testimonial-content">
                                    <p className="testimonial-text">"{testimonial.text}"</p>
                                </div>

                                <div className="testimonial-footer">
                                    <div className="avatar">{testimonial.avatar}</div>
                                    <div className="testimonial-author">
                                        <div className="author-name">{testimonial.author}</div>
                                        <div className="author-role">{testimonial.role}</div>
                                        <div className="stars">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="star" />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
