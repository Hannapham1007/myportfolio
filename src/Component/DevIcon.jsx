import React from 'react'

function DevIcon({pic, iconText}) {
  return (
    <div>
      <div className="center text-center">
      <img className="dev-icon" src={pic.src} alt={""} width={45} height={45} />
      <p className="text-center mt-1">{iconText}</p>
    </div>
    </div>
  )
}

export default DevIcon
