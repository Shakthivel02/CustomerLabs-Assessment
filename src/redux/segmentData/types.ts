interface SegmentState {
  segmentName: string
  schemas: string[]
  status: "idle" | "loading" | "succeeded" | "failed"
  error: string | null
}

export const initialState: SegmentState = {
  segmentName: "",
  schemas: [],
  status: "idle",
  error: null,
}

export interface DataProps {
  segment_name: string
  schema: Array<{ [key: string]: string }>
}

export default SegmentState
