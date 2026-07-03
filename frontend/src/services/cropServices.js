import api from "./api";

export const getAllCrops = async () => {
  const response = await api.get("/crops", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  return response.data;
};



export const createCrop = async (cropData) => {
  const response = await api.post("/crops", cropData, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  return response.data;
};