const API_URL = '/api/associations';

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

export const createAssociation = async (data) => {
  try {
    console.log('[createAssociation] POST:', API_URL, data);
    const token = localStorage.getItem('token');

    const res = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const errText = await res.text();
      throw new Error(errText || 'Failed to create association');
    }

    return await res.json();
  } catch (err) {
    console.error('Error creating association:', err);
    throw err;
  }
};

export const updateAssociation = async (id, data) => {
  const token = localStorage.getItem('token');
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error('Failed to update association');
  }

  console.log('Updated asso with data: ', data);
  return res.json();
};

export const deleteAssociation = async (id) => {

  try {
    const token = localStorage.getItem('token');
    console.log('[deleteAssociation] DELETE:', `${API_URL}/${id}`);

    const res = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`, 
      }
    });

      if (!res.ok) {
        const errText = await res.text();
        throw new Error(errText || 'Failed to delete association');
      }
    
      console.log('Deleted assos with id: ', id);
  } catch (err) {
    console.error('Error deleting association:', err);
    throw err;
  }

};