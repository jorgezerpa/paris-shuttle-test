import axios from "axios"

const baseUrl = "http://wp-api.first-travel.solvr.fr/wp-json";


//TRAJETS
export const getTrajets = async () => {
    try {
        const result = await axios.get(`${baseUrl}/wp/v2/trajets/all`);
        // console.log(result.data.data[0])
        return result.data.data[0]
    } catch (error) {
        return []
    }
}

//USERS
export const createUser = async (user:any) => {
    try {
        const result = await axios.post(`${baseUrl}/wp/v2/users`, user, { auth: { username:'', password:'' } });
        // console.log(result.data.data[0])
        return result.data
    } catch (error) {
        return []
    }
}


//PACKS FAMILY
export const getPacks = async () => {
    try {
        const result = await axios.get(`${baseUrl}/wp/v2/products/family/pack`);
        // console.log(result.data.data[0])
        return result.data.data as any[]
    } catch (error) {
        return []
    }
}



//Orders and reservation
export const createOrder = async (order:any) => {
    try {
        const result = await axios.post(`${baseUrl}/wp/v2/orders/order/new`, order);
        console.log(result.data.data[0])
        return result.data
        return []
    } catch (error) {
        console.log('errroooorr--->')
        console.log(error)
        return []
    }
}


//FORMS SUBMIT HANDLERS
export const submitContactForm = async(data:FormData) => {
    try {
        const result = await axios.post('http://wp-api.first-travel.solvr.fr/wp-json/contact-form-7/v1/contact-forms/130/feedback', data)
        return result.data
    } catch (error) {
        console.log('contact form error--->',error)
        return 'error'
    }
}

export const submitDevisForm = async(data:FormData) => {
    try {
        const result = await axios.post('http://wp-api.first-travel.solvr.fr/wp-json/contact-form-7/v1/contact-forms/104/feedback', data)
        return result.data
    } catch (error) {
        console.log('contact form error--->',error)
        return 'error'
    }
}