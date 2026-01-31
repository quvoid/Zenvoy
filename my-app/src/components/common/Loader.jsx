import { Loader2 } from 'lucide-react';
import './Loader.css';

/**
 * Reusable Loader Component
 * @param {object} props
 * @param {string} props.size - 'sm' | 'md' | 'lg'
 * @param {string} props.text - Loading text
 * @param {boolean} props.fullScreen - Cover full screen
 */
const Loader = ({
    size = 'md',
    text = 'Loading...',
    fullScreen = false
}) => {
    const sizeMap = {
        sm: 20,
        md: 32,
        lg: 48
    };

    if (fullScreen) {
        return (
            <div className="loader loader--fullscreen">
                <div className="loader__content">
                    <Loader2 className="loader__icon" size={sizeMap[size]} />
                    {text && <p className="loader__text">{text}</p>}
                </div>
            </div>
        );
    }

    return (
        <div className={`loader loader--${size}`}>
            <Loader2 className="loader__icon" size={sizeMap[size]} />
            {text && <span className="loader__text">{text}</span>}
        </div>
    );
};

export default Loader;
