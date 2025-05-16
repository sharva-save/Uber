import { Stack } from 'expo-router';
import 'react-native-reanimated';

import '../styles/global.css';


export default function RootLayout() {
 

 

  return (
    
      <Stack>
        <Stack.Screen name="(index)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
  
  );
}
