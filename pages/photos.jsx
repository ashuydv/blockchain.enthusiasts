import Image from 'next/image'
import React from 'react'

const Photos = () => {
  return (
    <div>
      <Image
        src="/images/photo2.jpg"
        alt="Photo"
        width={1125}
        height={750}
        priority
        className="next-image"
      />
    </div>
  )
}

export default Photos