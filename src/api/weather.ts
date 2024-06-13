import { useCallback, useEffect, useState } from "react";
import { fetchCityWeather } from "../utils/weather";

type UseWeatherApiProps = {
  city?: string
  enabled?: boolean
}

type UseWeatherApiResp = {
  isPending: boolean
  data?: any
  error?: any
}

export const useCityWeather = (options: UseWeatherApiProps): UseWeatherApiResp => {
  const { city, enabled } = options;
  const [isPending, setIsPending] = useState<boolean>(true);
  const [data, setData] = useState()
  const [error, setError] = useState()

  const getWeather = useCallback(async () => {
    if (enabled === false) return;
    setIsPending(true);
    const { data: apiData, error: apiError } = await fetchCityWeather({ city });
    setData(apiData);
    setError(apiError);
    setIsPending(false);
  }, [enabled]);

  useEffect(() => {
    if (enabled === false) return;
    getWeather();
  }, [enabled]);

  return {
    isPending,
    data,
    error,
  }
}