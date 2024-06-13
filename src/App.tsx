import { useCityWeather } from "./api/weather"
import AnimatedText from "./components/AnimatedText"
import { bio } from "./static/copy"

const App = () => {
  const { isPending, data, error } = useCityWeather({ city: 'Turin' });
  console.log({ isPending, data, error })
  return (
    <div className="p-4 h-screen flex flex-col items-start justify-center max-w-md">
      <AnimatedText
        as="h1"
        className="mb-4"
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
        text={bio}
        once={true}
      />
      <AnimatedText
        text={bio}
        once={true}
      />
    </div>
  )
}

export default App
