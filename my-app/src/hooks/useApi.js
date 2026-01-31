import { useState, useCallback } from 'react';

/**
 * Custom hook for handling API calls with loading and error states
 * @param {Function} apiFunction - The API function to call
 * @returns {object} { execute, data, loading, error, reset }
 */
const useApi = (apiFunction) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const execute = useCallback(async (...args) => {
        setLoading(true);
        setError(null);

        try {
            const result = await apiFunction(...args);
            setData(result);
            return result;
        } catch (err) {
            const errorMessage = err.message || 'An error occurred';
            setError(errorMessage);
            throw err;
        } finally {
            setLoading(false);
        }
    }, [apiFunction]);

    const reset = useCallback(() => {
        setData(null);
        setError(null);
        setLoading(false);
    }, []);

    return {
        execute,
        data,
        loading,
        error,
        reset
    };
};

export default useApi;
