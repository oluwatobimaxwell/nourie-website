import api from "./axios";

export const submitPartnership = async (data) => {
  const response = await api.post("/partnerships/", data);
  return response.data;
};