const API_URL = 'http://localhost:8080/api/infos';

export const getAllInfos = async () => {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error('Fetch failed');

    return await res.json();
  } catch (err) {
    console.error('Error fetching infos:', err);
    return [];
  }
};
