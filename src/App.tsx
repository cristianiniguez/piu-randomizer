import { ThemeProvider } from './components/theme-provider';
import AppScreen from './AppScreen';
import AppForm from './AppForm';

function App() {
  return (
    <ThemeProvider>
      <AppScreen>
        <AppForm />
      </AppScreen>
    </ThemeProvider>
  );
}

export default App;
