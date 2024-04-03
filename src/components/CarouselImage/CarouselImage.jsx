import React from 'react'



export default function CarouselImage({imageSrc}) {
  return (
    <div style={{ position: 'relative', textAlign: 'center', color: 'white' }}>
      <img
        src={imageSrc}
        style={{ width: '100%', height: '618px' }}
      />
    </div>
    
  )
}
