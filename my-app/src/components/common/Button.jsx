import './Button.css';

/**
 * Reusable Button Component
 * @param {object} props
 * @param {React.ReactNode} props.children - Button content
 * @param {string} props.variant - 'primary' | 'secondary' | 'outline' | 'ghost'
 * @param {string} props.size - 'sm' | 'md' | 'lg'
 * @param {boolean} props.loading - Show loading state
 * @param {boolean} props.disabled - Disable button
 * @param {string} props.className - Additional classes
 * @param {Function} props.onClick - Click handler
 */
const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    loading = false,
    disabled = false,
    className = '',
    onClick,
    type = 'button',
    ...props
}) => {
    return (
        <button
            type={type}
            className={`btn btn--${variant} btn--${size} ${className}`}
            disabled={disabled || loading}
            onClick={onClick}
            {...props}
        >
            {loading ? (
                <span className="btn__loader">
                    <svg className="btn__spinner" viewBox="0 0 24 24">
                        <circle className="spinner-circle" cx="12" cy="12" r="10" />
                    </svg>
                    <span>Loading...</span>
                </span>
            ) : (
                children
            )}
        </button>
    );
};

export default Button;
