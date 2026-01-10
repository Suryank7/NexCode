import axios from 'axios';

const API_URL = 'http://localhost:3000/api/ai';

export const generateCode = async (prompt) => {
    try {
        const response = await axios.post(`${API_URL}/generate`, { prompt });
        return response.data;
    } catch (error) {
        console.error("Error generating code:", error);
        throw error;
    }
};

export const explainCode = async (code) => {
    try {
        const response = await axios.post(`${API_URL}/explain`, { code });
        return response.data;
    } catch (error) {
        console.error("Error explaining code:", error);
        throw error;
    }
};
