const API_URL = 'http://localhost:8080/api/associations';

export const getAllAssociations = async () => {
  try {
    console.log('[getAllAssociations] GET:', API_URL);

    const res = await fetch(API_URL);
    if (!res.ok) throw new Error('Fetch failed');

    return await res.json();
  } catch (err) {
    console.error('Error fetching all associations:', err);
    return [];
  }
};

export const searchAssociations = async (params) => {
  try {
    const query = new URLSearchParams(params).toString();
    const url = `${API_URL}/search?${query}`;

    console.log('[searchAssociations] GET:', url);

    const res = await fetch(url);

    if (!res.ok) throw new Error('Fetch failed');
    const data = await res.json();

    return data;
  } catch (err) {
    console.error('Error fetching associations:', err);
    return [];
  }
};