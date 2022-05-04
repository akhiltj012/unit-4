import React from 'react'

export const Kids = () => {
  return (
    <div>
        <div><img src="data:image/jpeg;base64,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" alt="" /></div>
    </div>
  )
}
