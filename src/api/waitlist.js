import api from "./axios";

export const submitWaitlist = async (data) => {
  const response = await api.post("/engagements/waitlist/", data);
  return response.data;
};