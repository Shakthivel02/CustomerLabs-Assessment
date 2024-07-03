// src/App.tsx
import React, { useEffect, useState } from "react"
import { SegmentPage } from "../src/pages/segmentPage/SegmentPage"
import Loader from "./components/Loader"
import { ToastContainer } from "react-toastify"

const App: React.FC = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      <ToastContainer />
      {loading ? <Loader /> : <SegmentPage />}
    </div>
  )
}

export default App
