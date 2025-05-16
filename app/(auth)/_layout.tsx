import { Stack } from 'expo-router';
import 'react-native-reanimated';

import '../../styles/global.css';


const  Layout = () => {
  return (
    
      <Stack>
        <Stack.Screen name="welcome" options={{ headerShown: false }} />
        <Stack.Screen name="sign-up" options={{ headerShown: false }} />
               <Stack.Screen name="sign-in" options={{ headerShown: false }} />
      </Stack>
  
  );
}
export default Layout
