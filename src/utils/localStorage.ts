import * as SecureStore from "expo-secure-store";

export const setItem = async (key: string, value: string) => {
    try {
        await SecureStore.setItem(key, value);
    } catch (error) {
        console.error("Error saving data to local storage", error);
    }
};

export const getItem = async (key: string) => {
    try {
        const value = await SecureStore.getItemAsync(key);
        return value;
    } catch (error) {
        console.error("Error rerieving data from local Storage", error);
    }
};

export const removeItem = async (key: string) => {
    try {
        const value = await SecureStore.deleteItemAsync(key);
        return value;
    } catch (error) {
        console.error("Error removing data from local Storage", error);
    }
};