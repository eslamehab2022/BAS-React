import { useState } from 'react'

export default function useTableWidth() {
    const [fullWidthTable, setFullWidth] = useState(false)
    const toggleFullWidth = () => setFullWidth(!fullWidthTable)
  return ({ fullWidthTable, toggleFullWidth })
}
