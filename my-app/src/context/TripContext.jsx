import { createContext, useContext, useState, useCallback } from 'react';
import tripService from '../services/tripService';
import { WIZARD_STEPS } from '../utils/constants';

const TripContext = createContext();

export const TripProvider = ({ children }) => {
    // Wizard Step State
    const [currentStep, setCurrentStep] = useState(WIZARD_STEPS.SEARCH);

    // User Selections
    const [tripDetails, setTripDetails] = useState({
        origin: '',
        destination: '',
        startDate: '',
        endDate: '',
        travelers: 1,
        budget: 20000,
        preference: 'balanced'
    });

    // Available Options (from API)
    const [transportOptions, setTransportOptions] = useState({ trains: [], flights: [] });
    const [hotelOptions, setHotelOptions] = useState([]);

    // Selected Options
    const [selectedTransport, setSelectedTransport] = useState(null);
    const [selectedHotel, setSelectedHotel] = useState(null);

    // Generated Itinerary
    const [itinerary, setItinerary] = useState(null);

    // Loading States
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Calculate number of nights
    const calculateNights = useCallback(() => {
        if (!tripDetails.startDate || !tripDetails.endDate) return 3;
        const start = new Date(tripDetails.startDate);
        const end = new Date(tripDetails.endDate);
        const diffTime = Math.abs(end - start);
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }, [tripDetails.startDate, tripDetails.endDate]);

    // Fetch Transport Options - Using tripService
    const fetchTransportOptions = async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await tripService.getTransportOptions({
                origin: tripDetails.origin,
                destination: tripDetails.destination,
                date: tripDetails.startDate
            });

            if (data.success) {
                setTransportOptions({ trains: data.trains, flights: data.flights });
                setCurrentStep(WIZARD_STEPS.TRANSPORT);
            } else {
                throw new Error('Failed to fetch transport options');
            }
        } catch (err) {
            setError(err.message);
            console.error('Transport fetch error:', err);
        } finally {
            setLoading(false);
        }
    };

    // Fetch Hotel Options - Using tripService
    const fetchHotelOptions = async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await tripService.getHotelOptions({
                destination: tripDetails.destination,
                budget: tripDetails.budget,
                nights: calculateNights()
            });

            if (data.success) {
                setHotelOptions(data.hotels);
                setCurrentStep(WIZARD_STEPS.STAY);
            } else {
                throw new Error('Failed to fetch hotel options');
            }
        } catch (err) {
            setError(err.message);
            console.error('Hotel fetch error:', err);
        } finally {
            setLoading(false);
        }
    };

    // Generate Final Itinerary - Using tripService
    const generateItinerary = async () => {
        setLoading(true);
        setError(null);
        try {
            const nights = calculateNights();
            const data = await tripService.generateItinerary({
                destination: tripDetails.destination,
                days: nights + 1,
                budget: tripDetails.budget - (selectedTransport?.price || 0) - (selectedHotel?.totalPrice || 0),
                preference: tripDetails.preference,
                transport: selectedTransport,
                hotel: selectedHotel
            });

            setItinerary(data);
            setCurrentStep(WIZARD_STEPS.ITINERARY);
        } catch (err) {
            setError(err.message);
            console.error('Itinerary generation error:', err);
        } finally {
            setLoading(false);
        }
    };

    // Select Transport and proceed to Hotels
    const selectTransport = (transport) => {
        setSelectedTransport(transport);
        fetchHotelOptions();
    };

    // Select Hotel and generate itinerary
    const selectHotel = (hotel) => {
        setSelectedHotel(hotel);
        generateItinerary();
    };

    // Reset the wizard
    const resetTrip = () => {
        setCurrentStep(WIZARD_STEPS.SEARCH);
        setTripDetails({
            origin: '',
            destination: '',
            startDate: '',
            endDate: '',
            travelers: 1,
            budget: 20000,
            preference: 'balanced'
        });
        setTransportOptions({ trains: [], flights: [] });
        setHotelOptions([]);
        setSelectedTransport(null);
        setSelectedHotel(null);
        setItinerary(null);
        setError(null);
    };

    const value = {
        // State
        currentStep,
        tripDetails,
        transportOptions,
        hotelOptions,
        selectedTransport,
        selectedHotel,
        itinerary,
        loading,
        error,

        // Actions
        setTripDetails,
        setCurrentStep,
        fetchTransportOptions,
        fetchHotelOptions,
        selectTransport,
        selectHotel,
        generateItinerary,
        resetTrip,
        calculateNights
    };

    return (
        <TripContext.Provider value={value}>
            {children}
        </TripContext.Provider>
    );
};

export const useTrip = () => {
    const context = useContext(TripContext);
    if (!context) {
        throw new Error('useTrip must be used within a TripProvider');
    }
    return context;
};

export default TripContext;
