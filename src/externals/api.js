// api.js

import axios from 'axios';
import AuthService from './auth';
import { jwtDecode } from 'jwt-decode'; 

const instance = axios.create({
  baseURL: "http://localhost:8000/api/public",
  headers: {
      "Content-Type": "application/json",
  },
});

let isRefreshing = false;
let failedRequests = [];

const navigateToLogin = () => {
  window.location.href = "/login?error=JWT_EXPIRED";
};

instance.interceptors.request.use(
  (config) => {
    const loader = document.getElementById("loader");
    if (loader) {
      loader.style.display = "flex";
    }

    const token = AuthService.getLocalAccessToken(); // Użyj funkcji z AuthService
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }

    return config;
  },
  (error) => {
    const loader = document.getElementById("loader");
    if (loader) {
      loader.style.display = "flex";
    }

    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;

    if (
      originalConfig.url !== "/login/check" &&
      err.response.status === 401
    ) {
      if (!isRefreshing) {
        isRefreshing = true;

        try {
          const rs = await instance.post("/token/refresh", {
            refresh_token: AuthService.getLocalRefreshToken(), // Użyj funkcji z AuthService
          });

          const accessToken = rs.data.token;
          AuthService.updateLocalAccessToken(accessToken); // Użyj funkcji z AuthService

          originalConfig.headers["Authorization"] = "Bearer " + accessToken;
          return instance(originalConfig);
        } catch (_error) {
          AuthService.logout();
          navigateToLogin();
        } finally {
          isRefreshing = false;
        }
      } else {
        AuthService.logout();
        navigateToLogin();
      }
    }

    return Promise.reject(err);
  }
);

// Reszta kodu API z użyciem instancji 'instance'

export const registerUser = async (userData) => {
  try {
    const response = await instance.post('/api/register', userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await axios.post('http://localhost:8000/api/login/check', credentials);

    if (response && response.data) {
      const decoded = jwtDecode(response.data.token);
      AuthService.login(response.data.token, response.data.refresh_token, response.data.user, decoded.exp);

      return response.data;
    }
  } catch (error) {
    throw error.response ? error.response.data : 'Błąd logowania. Wystąpił nieznany błąd.';
  }
};


export const verifyEmail = async ({ email, query }) => {
  try {
    if (!query || !email) {
      throw new Error('Brak tokena weryfikacyjnego lub adresu e-mail.');
    }

    const confirmLink = `http://localhost:8000/api/register/confirm${query}`;
    const response = await axios.post(confirmLink, {email:email}); // Użyj instancji 'instance'

    if (response.status === 200) {
      window.location.href = '/loginform';
      alert('pomyślnie zweryfikowano');
      return response.data;
    } else {
      throw new Error('Błąd weryfikacji. Nieprawidłowa odpowiedź z serwera.');
    }
  } catch (error) {
    console.error('Błąd weryfikacji emaila:', error);
    throw error.response ? error.response.data : 'Wystąpił nieznany błąd.';
  }
};

// Reszta kodu API z użyciem instancji 'instance'
