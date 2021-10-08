import './App.css';
import WeatherContainer from './components/WeatherContainer';
import { LocationProvider } from './context/LocationContext';
import { WeatherProvider } from './context/WeatherContext';

function App() {
  return (
    <div className="App">
      <LocationProvider>
        <WeatherProvider>
          <WeatherContainer />
        </WeatherProvider>
      </LocationProvider>
    </div>
  );
}

export default App;
