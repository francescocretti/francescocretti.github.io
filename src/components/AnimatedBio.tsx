import React from 'react'
import AnimatedText from "./AnimatedText"
import { bio } from "../static/copy"

interface AnimatedBioProps { }

const AnimatedBio: React.FC<AnimatedBioProps> = ({ }) => {
  return (
    <div className="p-4 h-screen flex flex-col items-start justify-center max-w-md">
      <AnimatedText
        as="h1"
        className="mb-6"
        text="<-))/>"
        once={true}
        staggerChildren={0.5}
        animation={{
          hidden: {
            opacity: 0,
            y: 20,
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.3,
            },
          },
        }}
      />
      <AnimatedText
        as="p"
        className="mb-2"
        text={bio}
        once={true}
        staggerChildren={0.01}
        animation={{
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
            transition: {
              duration: 0,
            },
          },
        }}
      />
      <AnimatedText
        text={bio}
        once={true}
      />
    </div>
  )
}

export default AnimatedBio