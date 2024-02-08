import React from 'react'

export default function DownloadButton({children}) {
  return (
    <button className="text-xs h-[25px] font-medium bg-[#D9D9D980] text-white py-1 px-3 rounded-[3px]">
        {children}
    </button>
  )
}
