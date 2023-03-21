import axios from "axios"

const baseUrl = "http://wp-api.first-travel.solvr.fr/wp-json";

const config = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PATCH,POST,PUT',
    'Access-Control-Allow-Headers':
      'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  },
};



//TRAJETS
export const getTrajets = async () => {
    try {
        const result = await axios.get(`${baseUrl}/wp/v2/trajets/all`);
        return result.data.data[0]
    } catch (error) {
        throw new Error('error on mainAPI.ts')
    }
}

export const getTrajetsPrices = async (formData:FormData) => {
    try {
        // const result = await axios.post(`${baseUrl}/wp/v2/trajets/all`, formData);
        // return result.data.data[0]
        return { price: 75 }
    } catch (error) {
        throw new Error('error on mainAPI.ts')
    }
}



//USERS
export const createUser = async (user:any) => {
    try {
        const result = await axios.post(`${baseUrl}/wp/v2/users`, user, { auth: { username:'', password:'' } });
        //console.log(result.data.data[0])
        return result.data
    } catch (error) {
        throw new Error('error on mainAPI.ts')
    }
}


//PACKS FAMILY
export const getPacks = async () => {
    try {
        const result = await axios.get(`${baseUrl}/wp/v2/products/family/pack`, config);
        // console.log(result.data.data[0])
        return result.data.data as any[]
    } catch (error) {
        throw new Error('error on mainAPI.ts')
    }
}



//Orders and reservation
export const createOrder = async (order:any) => {
    try {
        const result = await axios.post(`${baseUrl}/wp/v2/orders/order/new`, order);
        return result.data
    } catch (error) {
        console.log('errroooorr--->')
        throw new Error('error on mainAPI.ts')
    }
}


//FORMS SUBMIT HANDLERS
export const submitContactForm = async(data:FormData) => {
    try {
        const result = await axios.post('http://wp-api.first-travel.solvr.fr/wp-json/contact-form-7/v1/contact-forms/130/feedback', data)
        return result.data
    } catch (error) {
        console.log('contact form error--->',error)
        throw new Error('error on mainAPI.ts')
    }
}

export const submitDevisForm = async(data:FormData) => {
    try {
        const result = await axios.post('http://wp-api.first-travel.solvr.fr/wp-json/contact-form-7/v1/contact-forms/104/feedback', data)
        return result.data
    } catch (error) {
        console.log('contact form error--->',error)
        throw new Error('error on mainAPI.ts')
    }
}