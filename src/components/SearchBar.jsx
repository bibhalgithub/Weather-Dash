export default function SearchBar({ city, setCity, fetchWeather }) {
  return (
    <div className="flex gap-2">
      
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && fetchWeather()}
        placeholder="Enter city name"
        className="p-2 rounded border w-full"
      />

      
      <button
        onClick={fetchWeather}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Search
      </button>
    </div>
  );
}
