// api.js

import axios from 'axios';

export const registerUser = async (userData) => {
  try {
    const response = await axios.post('/api/register', userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await axios.post('/api/login/check', credentials);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const verifyEmail = async (emailToken) => {
  try {
    const response = await axios.post('/api/register/confirm', { emailToken });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const twoFactorAuthentication = async (twoFactorCode) => {
  try {
    const response = await axios.post('/api/login/2fa_check', { twoFactorCode });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
