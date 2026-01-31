import './Card.css';

/**
 * Reusable Card Component
 * @param {object} props
 * @param {React.ReactNode} props.children - Card content
 * @param {string} props.variant - 'default' | 'highlight' | 'elevated'
 * @param {boolean} props.hoverable - Add hover effect
 * @param {boolean} props.clickable - Make card clickable
 * @param {string} props.className - Additional classes
 * @param {Function} props.onClick - Click handler
 */
const Card = ({
    children,
    variant = 'default',
    hoverable = false,
    clickable = false,
    className = '',
    onClick,
    ...props
}) => {
    return (
        <div
            className={`card card--${variant} ${hoverable ? 'card--hoverable' : ''} ${clickable ? 'card--clickable' : ''} ${className}`}
            onClick={clickable ? onClick : undefined}
            role={clickable ? 'button' : undefined}
            tabIndex={clickable ? 0 : undefined}
            {...props}
        >
            {children}
        </div>
    );
};

// Card Header subcomponent
Card.Header = ({ children, className = '' }) => (
    <div className={`card__header ${className}`}>{children}</div>
);

// Card Body subcomponent
Card.Body = ({ children, className = '' }) => (
    <div className={`card__body ${className}`}>{children}</div>
);

// Card Footer subcomponent
Card.Footer = ({ children, className = '' }) => (
    <div className={`card__footer ${className}`}>{children}</div>
);

export default Card;
