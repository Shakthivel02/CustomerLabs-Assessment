import { createAsyncThunk } from "@reduxjs/toolkit"
import api from "../../services"

// Async thunk to send form data
export const sendFormData = createAsyncThunk(
  "segments/sendFormData",
  async (requestPayload: any): Promise<any> => {
    const webhookEndpoint = "9ac4da33-012d-478d-a061-a85a638d7b86"
    const response = await api.post(webhookEndpoint, requestPayload)
    return response?.data
  }
)
