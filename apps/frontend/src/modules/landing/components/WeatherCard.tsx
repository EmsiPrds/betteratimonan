import { CloudSun, Sun, Cloud, CloudRain } from 'lucide-react';
import { weatherData } from '../data/mock-data';

const conditionIcons: Record<string, React.ReactNode> = {
  Sunny: <Sun className="w-5 h-5 text-accent-500" />,
  'Partly Cloudy': <CloudSun className="w-5 h-5 text-gray-500" />,
  Cloudy: <Cloud className="w-5 h-5 text-gray-400" />,
  Rain: <CloudRain className="w-5 h-5 text-blue-400" />,
};

export function WeatherCard() {
  return (
    <div className="card p-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">
        Weather in Atimonan
      </h3>

      {/* Current Weather */}
      <div className="flex items-center gap-4 mb-6">
        <CloudSun className="w-14 h-14 text-accent-500" />
        <div>
          <div className="text-4xl font-bold text-foreground">
            {weatherData.temperature}°C
          </div>
          <div className="text-gray-500">{weatherData.condition}</div>
        </div>
      </div>

      {/* Forecast */}
      <div className="grid grid-cols-5 gap-2">
        {weatherData.forecast.map((day) => (
          <div key={day.day} className="text-center">
            <div className="text-xs text-gray-500 mb-1">{day.day}</div>
            <div className="flex justify-center mb-1">
              {conditionIcons[day.condition] || <CloudSun className="w-5 h-5 text-gray-400" />}
            </div>
            <div className="text-xs font-medium text-foreground">{day.high}°</div>
            <div className="text-xs text-gray-400">{day.low}°</div>
          </div>
        ))}
      </div>
    </div>
  );
}
