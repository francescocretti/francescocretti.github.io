export const WEATHER_API_KEY = "1ea1de8073724b749b593959241306"

type FetchWeatherResponse = {
  data?: any
  error?: any
}

type FetchWeatherParams = {
  city?: string
}

export const fetchCityWeather = async (options?: FetchWeatherParams): Promise<FetchWeatherResponse> => {
  try {
    const city = options?.city ?? "Turin"
    console.log('fetch')
    const res = await fetch(` http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${city}`);
    const data = await res.json();
    return { data };
  } catch (error) {
    console.error(error);
    return { error };
  }
}