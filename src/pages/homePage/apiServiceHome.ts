import axios from "axios";
import { Dish } from "../../shared/interfaces/Dish";
import { Chef } from "../../shared/interfaces/Chef";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getDishes = async (): Promise<any> => {
    try {
        return await axios.get(`${BASE_URL}/dishes`);
    } catch (error) {
        console.error("Failed to fetch Dishes:", error);
        throw error;
    }
};

export const getSignatureDishes = async (): Promise<any> => {
    try {
        return await axios.get(`${BASE_URL}/dishes/signature`);
    } catch (error) {
        console.error("Failed to fetch Signature Dishes:", error);
        throw error;
    }
};

export const getChefs = async (): Promise<any> => {
    try {
        return await axios.get(`${BASE_URL}/chefs`);
    } catch (error) {
        console.error("Failed to fetch chefs:", error);
        throw error;
    }
};

export const getFeaturedChef = async (): Promise<any> => {
    try {
        return await axios.get(`${BASE_URL}/featuredChef`);
    } catch (error) {
        console.error("Failed to fetch featured chef:", error);
        throw error;
    }
};
