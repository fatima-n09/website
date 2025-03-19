import Axios from "axios";  // Ensure correct path to your axios instance

const USER_URL = "/user";  // Update this if your backend route is different

export const signinUser = async ({ password, email }) => {
    try {
        const { data } = await Axios.post(`${USER_URL}/signin`, { password, email });
        return data;
    } catch (error) {
        throw new Error(error.response?.data?.message || "An error occurred while signing in");
    }
};

export const signupUser = async ({ password, email, firstName, lastName }) => {
    try {
        const { data } = await Axios.post(`${USER_URL}/signup`, { password, email, firstName, lastName });
        return data;
    } catch (error) {
        throw new Error(error.response?.data?.message || "An error occurred while signing up");
    }
};
