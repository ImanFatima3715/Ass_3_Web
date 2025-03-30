const API_URL = "http://localhost:5000/api/tutors";

export const getProfile = async () => {
  const response = await fetch(`${API_URL}/profile`, { credentials: "include" });
  return response.json();
};

export const updateProfile = async (profileData) => {
  const response = await fetch(`${API_URL}/profile`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(profileData),
    credentials: "include",
  });
  return response.json();
};

export const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("image", file);
  
  const response = await fetch(`${API_URL}/upload`, {
    method: "POST",
    body: formData,
    credentials: "include",
  });

  return response.json().imageUrl;
};
