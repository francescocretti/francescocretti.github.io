import { useCityWeather } from "./api/weather"
import AnimatedBio from "./components/AnimatedBio";
import AnimatedWeatherLogo from "./components/AnimatedWeatherLogo";

const App = () => {
  const { isPending, data, error } = useCityWeather({ city: 'Turin' });
  console.log({ isPending, data, error })
  return (
    <>
      <AnimatedBio />
      <AnimatedWeatherLogo />
    </>
  )
}

export default App
