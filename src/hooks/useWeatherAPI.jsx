import { useState } from 'react';

const API_KEY = 'fe72ab3ee32c2c4530a51329ffd8acd9';

export default function useWeatherAPI() {
  const [data, setData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    setLoading(true);
    setError(null);
    setData(null);
    setForecastData(null);

    try {
      
      const weatherRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!weatherRes.ok) {
        throw new Error('City not found');
      }

      const weatherJson = await weatherRes.json();
      setData(weatherJson);

      
      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!forecastRes.ok) {
        throw new Error('Forecast not found');
      }

      const forecastJson = await forecastRes.json();
      setForecastData(forecastJson);

    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    forecastData,
    loading,
    error,
    fetchWeather,
  };
}

