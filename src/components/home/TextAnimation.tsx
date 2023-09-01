'use client'


import { TypeAnimation } from 'react-type-animation'

function TextAnimation() {
  return (
    <TypeAnimation
      sequence={[
        " Content creator",
        1000,
        " Software engineer",
        1000,
        " Fullstack developer",
        1000,
      ]}
      wrapper="span"
      speed={50}
      className="font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
      repeat={Infinity}
    />
  )
}

export default TextAnimation