/**
 * Form Validation Utilities
 */

/**
 * Validate email format
 * @param {string} email
 * @returns {boolean}
 */
export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

/**
 * Validate password strength
 * @param {string} password
 * @returns {object} { isValid, message }
 */
export const validatePassword = (password) => {
    if (!password) {
        return { isValid: false, message: 'Password is required' };
    }
    if (password.length < 6) {
        return { isValid: false, message: 'Password must be at least 6 characters' };
    }
    return { isValid: true, message: '' };
};

/**
 * Validate trip form data
 * @param {object} formData
 * @returns {object} { isValid, errors }
 */
export const validateTripForm = (formData) => {
    const errors = {};

    if (!formData.origin?.trim()) {
        errors.origin = 'Origin city is required';
    }

    if (!formData.destination?.trim()) {
        errors.destination = 'Destination is required';
    }

    if (!formData.startDate) {
        errors.startDate = 'Start date is required';
    }

    if (!formData.endDate) {
        errors.endDate = 'End date is required';
    }

    if (formData.startDate && formData.endDate) {
        const start = new Date(formData.startDate);
        const end = new Date(formData.endDate);

        if (start > end) {
            errors.endDate = 'End date must be after start date';
        }

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (start < today) {
            errors.startDate = 'Start date cannot be in the past';
        }
    }

    if (formData.budget && formData.budget < 1000) {
        errors.budget = 'Budget must be at least ₹1,000';
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors
    };
};

/**
 * Validate that a required field is not empty
 * @param {*} value
 * @param {string} fieldName
 * @returns {string|null} Error message or null
 */
export const validateRequired = (value, fieldName) => {
    if (value === null || value === undefined || value === '') {
        return `${fieldName} is required`;
    }
    return null;
};
