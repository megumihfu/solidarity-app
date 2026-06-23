const API_URL = '/api/users';

const authRequest = async (endpoint, payload, errorMessage) => {
  try {
    const res = await fetch(`${API_URL}/${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      throw new Error(errorMessage);
    }

    const user = await res.json();

    return user;
  } catch (err) {
    console.error(`[${endpoint}] error:`, err);
    throw err;
  }
};

export const login = (credentials) => authRequest('login', credentials, 'Invalid credentials');
export const register = (data) => authRequest('register', data, 'Registration failed');