import axios from "axios";

export interface PredictionResponse {
  prediction: "Spam" | "Not Spam";
  probability: number;
  accuracy: number;
}

export const predictSpam = async (
  message: string
): Promise<PredictionResponse> => {
  const response = await axios.post<PredictionResponse>(
    "/predict",
    {
      message,
    }
  );

  return response.data;
};