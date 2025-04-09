export default function WeatherCard({ data }) {
  return (
    <div className="mt-6 p-4 bg-white rounded shadow-md text-center max-w-md mx-auto">
      
      <h2 className="text-2xl font-semibold">{data.name}</h2>

      
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt="weather icon"
        className="mx-auto"
      />

      
      <p className="text-xl">
        {data.main.temp}°C - {data.weather[0].main}
      </p>

    
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind: {data.wind.speed} km/h</p>
    </div>
  );
}
