export interface CityWeather {
  name: string;
  enName: string;
  temp: number;
  humidity: number;
  windSpeed: number;
  weatherCode: number;
}

const CITIES = [
  { name: "काठमाडौँ", enName: "Kathmandu", lat: 27.7172, lon: 85.324 },
  { name: "पोखरा", enName: "Pokhara", lat: 28.2096, lon: 83.9856 },
  { name: "विराटनगर", enName: "Biratnagar", lat: 26.4525, lon: 87.2718 },
  { name: "चितवन (भरतपुर)", enName: "Bharatpur", lat: 27.6833, lon: 84.4333 },
  { name: "बुटवल", enName: "Butwal", lat: 27.7, lon: 83.45 },
  { name: "नेपालगञ्ज", enName: "Nepalgunj", lat: 28.05, lon: 81.6167 },
  { name: "धनगढी", enName: "Dhangadhi", lat: 28.6833, lon: 80.6 },
  { name: "सुर्खेत", enName: "Surkhet", lat: 28.6, lon: 81.6 },
];

export async function getNepalCitiesWeather(): Promise<CityWeather[]> {
  try {
    const promises = CITIES.map(async (city) => {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m`;
      const res = await fetch(url, { next: { revalidate: 1800 } }); // Revalidate every 30 mins

      if (!res.ok) throw new Error("Failed to fetch weather data");
      const data = await res.json();

      return {
        name: city.name,
        enName: city.enName,
        temp: Math.round(data.current.temperature_2m),
        humidity: data.current.relative_humidity_2m,
        windSpeed: Math.round(data.current.wind_speed_10m),
        weatherCode: data.current.weather_code,
      };
    });

    return await Promise.all(promises);
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return [];
  }
}

export function getWeatherCondition(code: number): {
  text: string;
  icon: string;
} {
  if (code === 0) return { text: "सफा (Clear)", icon: "☀️" };
  if (code >= 1 && code <= 3)
    return { text: "आंशिक बदली (Partly Cloudy)", icon: "⛅" };
  if (code >= 45 && code <= 48) return { text: "कुहिरो (Foggy)", icon: "🌫️" };
  if (code >= 51 && code <= 67) return { text: "वर्षा (Rain)", icon: "🌧️" };
  if (code >= 80 && code <= 82)
    return { text: "भारी वर्षा (Heavy Rain)", icon: "⛈️" };
  if (code >= 71 && code <= 77) return { text: "हिमपात (Snow)", icon: "❄️" };
  return { text: "साधारण (Fair)", icon: "🌤️" };
}
