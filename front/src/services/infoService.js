const API_URL = '/api/infos';

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

export const createInfo = async (data) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  console.log('[createInfo] POST with data:', data);

  if (!res.ok) {
    throw new Error('Failed to create info');
  }

  return res.json();
};

export const updateInfo = async (id, data) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  console.log('[updateInfo] PUT with data: ', data);

  if (!res.ok) {
    throw new Error('Failed to update info');
  }

  return res.json();
};

export const deleteInfo = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  
  console.log('[deleteInfo] DELETE info id: ', id);

  if (!res.ok) {
    throw new Error('Failed to delete info');
  }
};