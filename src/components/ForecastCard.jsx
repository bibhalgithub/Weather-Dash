import React from 'react';

export default function ForecastCard({ forecast }) {

  const dailyData = forecast.list.filter((_, index) => index % 8 === 0).slice(0, 5);

  return (
    <div style={{ marginTop: '20px' }}>
      
      <h3 style={{ textAlign: 'center' }}>5-Day Forecast</h3>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap'
        }}
      >
        {dailyData.map((day, idx) => (
          <div
            key={idx}
            style={{
              padding: '10px',
              background: '#f0f0f0',
              borderRadius: '10px',
              width: '100px',
              margin: '10px 12px',
              textAlign: 'center'
            }}
          >
        
            <p>{new Date(day.dt * 1000).toLocaleDateString()}</p>

            
            <img
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              alt={day.weather[0].main}
              style={{ width: '50px', height: '50px' }}
            />

            
            <p>{Math.round(day.main.temp)}°C</p>
            <p>{day.weather[0].main}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
