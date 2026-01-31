// Authentication Service - All auth-related API calls
import api from './api';

/**
 * Authentication Service
 * Handles login, register, and token management
 */
const authService = {
    /**
     * Login user
     * @param {object} credentials
     * @param {string} credentials.email
     * @param {string} credentials.password
     */
    login: async ({ email, password }) => {
        const response = await api.post('/api/auth/login', { email, password });

        if (response.token) {
            localStorage.setItem('token', response.token);
            localStorage.setItem('user', JSON.stringify(response.user));
        }

        return response;
    },

    /**
     * Register new user
     * @param {object} userData
     * @param {string} userData.email
     * @param {string} userData.password
     * @param {string} userData.name
     */
    register: async ({ email, password, name }) => {
        const response = await api.post('/api/auth/register', { email, password, name });

        if (response.token) {
            localStorage.setItem('token', response.token);
            localStorage.setItem('user', JSON.stringify(response.user));
        }

        return response;
    },

    /**
     * Logout user - clears local storage
     */
    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    },

    /**
     * Get current user from localStorage
     */
    getCurrentUser: () => {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    },

    /**
     * Check if user is authenticated
     */
    isAuthenticated: () => {
        return !!localStorage.getItem('token');
    },

    /**
     * Get token
     */
    getToken: () => {
        return localStorage.getItem('token');
    }
};

export default authService;
