import { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import ForecastCard from './components/ForecastCard';
import ThemeToggle from './components/ThemeToggle';
import useWeatherAPI from './hooks/useWeatherAPI';

export default function App() {
  const [city, setCity] = useState('');
  const { data, forecastData, error, loading, fetchWeather } = useWeatherAPI();

  const handleFetch = () => {
    fetchWeather(city);
  };

  return (
    <div className="min-h-screen bg-sky-200 dark:bg-blue-950 flex flex-col items-center justify-center p-4 text-gray-800 dark:text-black">

      <h1 className="text-4xl font-bold text-center mb-6 flex items-center gap-2">
        🌤️ Weather Dashboard
      </h1>

      <div className="w-full max-w-4xl flex flex-col items-center gap-8">

        <SearchBar city={city} setCity={setCity} fetchWeather={handleFetch} />

        {loading && <p className="text-center mt-4">Loading...</p>}
        {error && <p className="text-center text-red-500 mt-4">{error}</p>}
        {data && <WeatherCard data={data} />}

        <ThemeToggle />

        {data && forecastData && <ForecastCard forecast={forecastData} />}
      </div>
    </div>
  );
}