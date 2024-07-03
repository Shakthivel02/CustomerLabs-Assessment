import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { sendFormData } from "./api"
import { initialState } from "./types"
import { RootState } from "../store"
import { toast } from "react-toastify"

const segmentSlice = createSlice({
  name: "segments",
  initialState,
  reducers: {
    setSegmentName: (state, action: PayloadAction<string>) => {
      state.segmentName = action.payload
    },
    setSchemas: (state, action: PayloadAction<string[]>) => {
      state.schemas = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendFormData.pending, (state) => {
        state.status = "loading"
      })
      .addCase(sendFormData.fulfilled, (state) => {
        state.status = "succeeded"
        toast.info("Data sent successfully!", {
          position: "top-center",
          autoClose: 3000,
        })
      })
      .addCase(sendFormData.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message ?? "Unknown error"
      })
  },
})

export const { setSegmentName, setSchemas } = segmentSlice.actions

export const segmentsResponse = (state: RootState) => state.segments

export default segmentSlice.reducer
