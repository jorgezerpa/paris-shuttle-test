import axios from "axios"

export const getLanguage = async (language:string) => {
    try {
        const result = await axios.get(`http://localhost:5173/translations/${language}.json`);
        return result.data
    } catch (error) {
        throw new Error('error on language service')
    }
}

