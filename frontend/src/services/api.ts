import axios from "axios";

const API_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:7860"
    : "";

export interface PredictionResponse {
  prediction: "Spam" | "Not Spam";
  probability: number;
  accuracy: number;
}

export const predictSpam = async (
  message: string
): Promise<PredictionResponse> => {
  const response = await axios.post<PredictionResponse>(
    `${API_URL}/predict`,
    {
      message,
    }
  );

  return response.data;
};