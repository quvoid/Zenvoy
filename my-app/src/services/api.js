// API Configuration and Base Service
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

/**
 * Base API helper with common configurations
 */
const api = {
    /**
     * GET request
     * @param {string} endpoint - API endpoint (e.g., '/api/trips')
     * @returns {Promise} - Response data
     */
    get: async (endpoint) => {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token') || ''}`
            }
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        return response.json();
    },

    /**
     * POST request
     * @param {string} endpoint - API endpoint
     * @param {object} data - Request body
     * @returns {Promise} - Response data
     */
    post: async (endpoint, data) => {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token') || ''}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            const error = await response.json().catch(() => ({ message: 'Request failed' }));
            throw new Error(error.message || `API Error: ${response.status}`);
        }

        return response.json();
    },

    /**
     * PUT request
     * @param {string} endpoint - API endpoint
     * @param {object} data - Request body
     * @returns {Promise} - Response data
     */
    put: async (endpoint, data) => {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token') || ''}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        return response.json();
    },

    /**
     * DELETE request
     * @param {string} endpoint - API endpoint
     * @returns {Promise} - Response data
     */
    delete: async (endpoint) => {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token') || ''}`
            }
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        return response.json();
    }
};

export default api;
export { API_BASE_URL };
