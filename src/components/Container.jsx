import React from 'react'

function Container({ children }) {
  return (
    <div className="max-w-7xl mx-auto px-2 md:px-6 lg:px-8">
      {children}
    </div>
  )
}

export default Container
