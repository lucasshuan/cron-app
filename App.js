import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens/Home';
import { ThemeProvider } from 'styled-components';
import colors from './src/styles/colors';

export default function App() {
  return (
    <ThemeProvider theme={colors}>
      <Home />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}