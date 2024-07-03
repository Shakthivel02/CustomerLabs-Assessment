import { createAsyncThunk } from "@reduxjs/toolkit"
import api from "../../services"

// Async thunk to send form data
export const sendFormData = createAsyncThunk(
  "segments/sendFormData",
  async (requestPayload: any): Promise<any> => {
    const webhookEndpoint = "00ab1d4c-10d4-4a6e-a152-64feeb07612c"
    const response = await api.post(webhookEndpoint, requestPayload)
    return response?.data
  }
)
