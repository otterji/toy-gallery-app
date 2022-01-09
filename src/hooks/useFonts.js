import * as Font from 'expo-font';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';
import { Belleza_400Regular } from '@expo-google-fonts/belleza';

const useFonts = async () => {
  await Font.loadAsync({
    Roboto_regular: Roboto_400Regular,
    Roboto_regular: Belleza_400Regular,
  });
};

export default useFonts;