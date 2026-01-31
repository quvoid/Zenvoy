/**
 * Currency and Number Formatting Utilities
 */

/**
 * Format amount as Indian Rupees
 * @param {number} amount - Amount to format
 * @param {boolean} showSymbol - Whether to show ₹ symbol
 * @returns {string} Formatted currency string
 */
export const formatCurrency = (amount, showSymbol = true) => {
    if (amount === null || amount === undefined) return showSymbol ? '₹0' : '0';

    const formatted = new Intl.NumberFormat('en-IN', {
        maximumFractionDigits: 0
    }).format(amount);

    return showSymbol ? `₹${formatted}` : formatted;
};

/**
 * Format date to readable string
 * @param {string|Date} date - Date to format
 * @param {string} format - 'short', 'long', or 'iso'
 * @returns {string} Formatted date string
 */
export const formatDate = (date, format = 'short') => {
    if (!date) return '';

    const dateObj = new Date(date);

    switch (format) {
        case 'short':
            return dateObj.toLocaleDateString('en-IN', {
                day: 'numeric',
                month: 'short'
            });
        case 'long':
            return dateObj.toLocaleDateString('en-IN', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            });
        case 'iso':
            return dateObj.toISOString().split('T')[0];
        default:
            return dateObj.toLocaleDateString('en-IN');
    }
};

/**
 * Format time string (e.g., "14:30" to "2:30 PM")
 * @param {string} time - Time in 24h format
 * @returns {string} Time in 12h format
 */
export const formatTime = (time) => {
    if (!time) return '';

    const [hours, minutes] = time.split(':').map(Number);
    const period = hours >= 12 ? 'PM' : 'AM';
    const hour12 = hours % 12 || 12;

    return `${hour12}:${minutes.toString().padStart(2, '0')} ${period}`;
};

/**
 * Calculate number of days between two dates
 * @param {string|Date} startDate 
 * @param {string|Date} endDate 
 * @returns {number} Number of days
 */
export const calculateDays = (startDate, endDate) => {
    if (!startDate || !endDate) return 0;

    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays;
};

/**
 * Format duration (e.g., "2h 30m")
 * @param {number} minutes - Duration in minutes
 * @returns {string} Formatted duration
 */
export const formatDuration = (minutes) => {
    if (!minutes) return '';

    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;

    if (hours === 0) return `${mins}m`;
    if (mins === 0) return `${hours}h`;
    return `${hours}h ${mins}m`;
};
