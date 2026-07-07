import { useEffect, useState } from 'react';
import { Thermometer, DollarSign, Clock } from 'lucide-react';

// Atimonan, Quezon coordinates
const LAT = 14.0;
const LON = 122.0333;

interface Weather {
  temp: number;
  code: number;
}

interface Rates {
  USD: number;
  EUR: number;
  JPY: number;
  GBP: number;
}

function weatherLabel(code: number): string {
  if (code === 0) return 'Clear';
  if (code <= 3) return 'Cloudy';
  if (code <= 67) return 'Rain';
  if (code <= 77) return 'Snow';
  if (code <= 99) return 'Storm';
  return '';
}

export function TopBar() {
  const [now, setNow] = useState(new Date());
  const [weather, setWeather] = useState<Weather | null>(null);
  const [rates, setRates] = useState<Rates | null>(null);

  // Live clock — tick every second
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  // Weather — Open-Meteo, free, no API key
  useEffect(() => {
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&current_weather=true`
    )
      .then((r) => r.json())
      .then((d) =>
        setWeather({
          temp: Math.round(d.current_weather.temperature),
          code: d.current_weather.weathercode,
        })
      )
      .catch(() => {});
  }, []);

  // Exchange rates to PHP — frankfurter.app, free, no API key
  useEffect(() => {
    fetch('https://api.frankfurter.app/latest?to=PHP&from=USD,EUR,JPY,GBP')
      .then((r) => r.json())
      .then((d) => {
        // d.rates gives PHP per 1 unit of base currency
        // but we want PHP per foreign unit, so we need inverse of USD→PHP
        // Actually frankfurter: base=USD,EUR,JPY,GBP → target=PHP
        // Response shape: { base:"USD", rates:{ PHP: X } } — one base at a time
        // Use multi-base endpoint instead
      })
      .catch(() => {});

    // Correct approach: fetch PHP as base, get USD/EUR/JPY/GBP rates, then invert
    fetch('https://api.frankfurter.app/latest?from=PHP&to=USD,EUR,JPY,GBP')
      .then((r) => r.json())
      .then((d) => {
        const r = d.rates as { USD: number; EUR: number; JPY: number; GBP: number };
        setRates({
          USD: parseFloat((1 / r.USD).toFixed(2)),
          EUR: parseFloat((1 / r.EUR).toFixed(2)),
          JPY: parseFloat((1 / r.JPY).toFixed(4)),
          GBP: parseFloat((1 / r.GBP).toFixed(2)),
        });
      })
      .catch(() => {});
  }, []);

  const dateStr = now.toLocaleDateString('en-PH', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const timeStr = now.toLocaleTimeString('en-PH', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  return (
    <div className="bg-primary-800 text-white text-xs">
      <div className="section-container">
        <div className="flex items-center justify-between py-1.5 gap-3 flex-wrap">

          {/* Left — Date & Time */}
          <div className="flex items-center gap-2 text-primary-200">
            <Clock className="w-3 h-3 shrink-0" />
            <span>{dateStr}</span>
            <span className="text-primary-400">|</span>
            <span className="font-mono tabular-nums">{timeStr}</span>
          </div>

          {/* Right — Weather + Currency */}
          <div className="flex items-center gap-3 ml-auto flex-wrap">

            {/* Temperature */}
            <div className="flex items-center gap-1 text-primary-200">
              <Thermometer className="w-3 h-3 shrink-0" />
              {weather ? (
                <span>
                  {weather.temp}°C&nbsp;
                  <span className="text-primary-400">{weatherLabel(weather.code)}</span>
                  &nbsp;· Atimonan
                </span>
              ) : (
                <span className="text-primary-400">Loading…</span>
              )}
            </div>

            <span className="text-primary-400">|</span>

            {/* Currency to PHP */}
            <div className="flex items-center gap-1.5 text-primary-200">
              <DollarSign className="w-3 h-3 shrink-0" />
              {rates ? (
                <span className="flex items-center gap-2">
                  <span>$1&nbsp;=&nbsp;<span className="text-accent-400 font-semibold">₱{rates.USD}</span></span>
                  <span className="text-primary-400">·</span>
                  <span>€1&nbsp;=&nbsp;<span className="text-accent-400 font-semibold">₱{rates.EUR}</span></span>
                  <span className="text-primary-400">·</span>
                  <span>£1&nbsp;=&nbsp;<span className="text-accent-400 font-semibold">₱{rates.GBP}</span></span>
                  <span className="text-primary-400">·</span>
                  <span>¥1&nbsp;=&nbsp;<span className="text-accent-400 font-semibold">₱{rates.JPY}</span></span>
                </span>
              ) : (
                <span className="text-primary-400">Loading…</span>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
