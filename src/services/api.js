import {axiosInstance as axios} from './axiosInstance'

const CREATE_NEW_USER = () => `api/public/user/create`;
const AUTHENTICATE = () => `api/public/authenticate`;

const TEST_API = () => `api/public/test1`;

export const createNewUser = (userBody) => {
    return axios.post(CREATE_NEW_USER(), userBody);
}

export const authenticate = (userBody) => {
    return axios.post(AUTHENTICATE(), userBody);
}

export const testAuthenticatedApi = (params) => {
    return axios.get(TEST_API(), {params: params});
}