import React from 'react'
import cloudy from '../assets/weather/cloudy.svg'
import { CloudyIcon } from '../icons/cloudy'
import { RainIcon } from '../icons/rain'

interface AnimatedWeatherLogoProps { }

// icons by Flatart from the Noun Project

const AnimatedWeatherLogo = ({ }: AnimatedWeatherLogoProps) => {
  return (
    <div className='absolute top-0 right-0 p-4'>
      <CloudyIcon w={50} h={50} />
      <RainIcon w={50} h={50} />
    </div>
  )
}

export default AnimatedWeatherLogo