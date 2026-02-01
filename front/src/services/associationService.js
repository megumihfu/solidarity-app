export const searchAssociations = async (params) => {
  try {
    const query = new URLSearchParams(params).toString();
    const url = `http://localhost:8080/api/associations/search?${query}`;
    
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