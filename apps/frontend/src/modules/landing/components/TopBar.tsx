import { useEffect, useState } from 'react';
import { Thermometer, TrendingUp, Clock } from 'lucide-react';

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
  CNY: number;
  KRW: number;
  AUD: number;
  SGD: number;
}

const CURRENCY_LIST: { key: keyof Rates; symbol: string; name: string }[] = [
  { key: 'USD', symbol: '$', name: 'USD' },
  { key: 'EUR', symbol: '€', name: 'EUR' },
  { key: 'GBP', symbol: '£', name: 'GBP' },
  { key: 'JPY', symbol: '¥', name: 'JPY' },
  { key: 'CNY', symbol: '¥', name: 'CNY' },
  { key: 'KRW', symbol: '₩', name: 'KRW' },
  { key: 'AUD', symbol: 'A$', name: 'AUD' },
  { key: 'SGD', symbol: 'S$', name: 'SGD' },
];

function weatherLabel(code: number): string {
  if (code === 0) return 'Clear';
  if (code <= 3) return 'Cloudy';
  if (code <= 67) return 'Rain';
  if (code <= 77) return 'Snow';
  if (code <= 99) return 'Storm';
  return '';
}

function formatRate(key: keyof Rates, value: number): string {
  // JPY and KRW are small per-PHP, so show more decimals
  if (key === 'JPY' || key === 'KRW') return value.toFixed(3);
  return value.toFixed(2);
}

export function TopBar() {
  const [now, setNow] = useState(new Date());
  const [weather, setWeather] = useState<Weather | null>(null);
  const [rates, setRates] = useState<Rates | null>(null);
  const [currencyIndex, setCurrencyIndex] = useState(0);
  const [fade, setFade] = useState(true);

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

  // Exchange rates to PHP — fawazahmed0/currency-api via jsDelivr, free, no API key
  useEffect(() => {
    fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/php.json')
      .then((r) => r.json())
      .then((d: { php: Record<string, number> }) => {
        const p = d.php;
        setRates({
          USD: 1 / p.usd,
          EUR: 1 / p.eur,
          GBP: 1 / p.gbp,
          JPY: 1 / p.jpy,
          CNY: 1 / p.cny,
          KRW: 1 / p.krw,
          AUD: 1 / p.aud,
          SGD: 1 / p.sgd,
        });
      })
      .catch(() => {});
  }, []);

  // Rotate currency every 3 seconds with fade transition
  useEffect(() => {
    const id = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrencyIndex((i) => (i + 1) % CURRENCY_LIST.length);
        setFade(true);
      }, 250);
    }, 3000);
    return () => clearInterval(id);
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

  const current = CURRENCY_LIST[currencyIndex];

  return (
    <div className="bg-primary-800 text-white text-xs">
      <div className="section-container">
        <div className="flex items-center justify-between py-1.5 gap-3">

          {/* Left — Date & Time */}
          <div className="flex items-center gap-2 text-primary-200">
            <Clock className="w-3 h-3 shrink-0" />
            <span className="hidden sm:inline">{dateStr}</span>
            <span className="text-primary-400 hidden sm:inline">|</span>
            <span className="font-mono tabular-nums">{timeStr}</span>
          </div>

          {/* Right — Weather + Currency */}
          <div className="flex items-center gap-3 ml-auto">

            {/* Temperature */}
            <div className="flex items-center gap-1 text-primary-200">
              <Thermometer className="w-3 h-3 shrink-0" />
              {weather ? (
                <span>
                  {weather.temp}°C
                  <span className="text-primary-400 ml-1">{weatherLabel(weather.code)}</span>
                </span>
              ) : (
                <span className="text-primary-400">--°C</span>
              )}
            </div>

            <span className="text-primary-400">|</span>

            {/* Single rotating currency */}
            <div className="flex items-center gap-1.5 text-primary-200 min-w-[110px]">
              <TrendingUp className="w-3 h-3 shrink-0" />
              <span
                style={{
                  transition: 'opacity 0.25s ease',
                  opacity: fade ? 1 : 0,
                }}
              >
                {rates ? (
                  <>
                    <span className="text-primary-300">{current.name}</span>
                    {' '}1{current.symbol}{' = '}
                    <span className="text-accent-400 font-semibold">
                      ₱{formatRate(current.key, rates[current.key])}
                    </span>
                  </>
                ) : (
                  <span className="text-primary-400">--</span>
                )}
              </span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
