import styles from "./App.module.css"
import Form from "./components/Form/Form"
import WeatherDetail from "./components/WeatherDetail/WeatherDetail"
import useWeather from "./hooks/useWeather"

export default function App() {
  const { weather, fetchWeather } = useWeather()
  return (
    <div>
      <h1 className={styles.title}>Buscador de Clima</h1>

      <div className={styles.container}>
        <Form
          fetchWeather={fetchWeather}
        />

        <WeatherDetail
          weather={weather}
        />
      </div>
    </div>
  )
}