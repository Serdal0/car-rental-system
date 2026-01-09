const API_BASE_URL = 'http://localhost:8080/api';

// API çağrısı helper fonksiyonu
async function apiCall(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  // Token varsa header'a ekle
  const token = localStorage.getItem('authToken') || sessionStorage.getItem('authToken');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }

  try {
    const response = await fetch(url, config);
    
    // Response body'yi parse et
    let data;
    try {
      const text = await response.text();
      data = text ? JSON.parse(text) : {};
    } catch (parseError) {
      // JSON parse hatası
      throw new Error('Sunucudan geçersiz yanıt alındı');
    }
    
    if (!response.ok) {
      // Backend'den gelen hata mesajını koru
      const error = new Error(data.message || 'Bir hata oluştu');
      error.response = data; // Response body'yi de ekle
      error.status = response.status;
      throw error;
    }
    
    return data;
  } catch (error) {
    // Network hatası veya diğer hatalar
    if (error.response) {
      // Backend'den gelen hata (zaten response var)
      throw error;
    }
    // Network hatası veya parse hatası
    throw new Error(error.message || 'Sunucuya bağlanılamadı');
  }
}



// Auth API
export const authAPI = {
  login: async (email, password) => {
    return apiCall('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  },

  register: async (userData) => {
    return apiCall('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  },

  resetPassword: async (email) => {
    return apiCall('/auth/reset-password', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  },

  logout: () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('currentUser');
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('currentUser');
  },

  getCurrentUser: () => {
    const user = localStorage.getItem('currentUser') || sessionStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  },

  isAuthenticated: () => {
    return !!(localStorage.getItem('authToken') || sessionStorage.getItem('authToken'));
  },
};


export const carAPI = {
  getAll: async () => {
    return apiCall('/cars/list', {
      method: 'GET',
    });
  },
};


