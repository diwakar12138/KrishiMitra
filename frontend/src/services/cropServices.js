import api from "./api";

/* ===========================================
   Get All Crops
=========================================== */

export const getAllCrops = async () => {
  const response = await api.get("/crops", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  return response.data;
};

/* ===========================================
   Create Crop
=========================================== */

export const createCrop = async (cropData) => {
  const response = await api.post("/crops", cropData, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  return response.data;
};

/* ===========================================
   Update Crop
=========================================== */

export const updateCrop = async (id, cropData) => {
  const response = await api.put(`/crops/${id}`, cropData, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  return response.data;
};

/* ===========================================
   Delete Crop
=========================================== */

export const deleteCrop = async (id) => {
  const response = await api.delete(`/crops/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  return response.data;
};