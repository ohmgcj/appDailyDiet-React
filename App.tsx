import { ThemeProvider } from 'styled-components';
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans'

import { Loading } from '@Components/Loading';

import { Home } from '@screens/Home';
import { Stats } from '@screens/Stats';
import { RegisterMeal } from '@screens/RegisterMeal';

import theme from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold })

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <RegisterMeal /> : <Loading />}
    </ThemeProvider>
  );
}