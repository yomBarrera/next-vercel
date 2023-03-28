import React from 'react'

const LightLayout = ({ children }) => {
  return (
    <div style={{
      backgroundColor: '#FFFFFF',
      borderRadius:'10px',
      padding: '10px',
      color: '#000540'
    }}>
      <h3>Light Layout</h3>
      {children}      
    </div>
  )
}

export default LightLayout
