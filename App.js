import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingScreen from './screens/SettingScreen';
import CaptureScreen from './screens/CaptureScreen';
import EditScreen from './screens/EditScreen';
import GalleryScreen from './screens/GalleryScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Capture" component={CaptureScreen} />
        <Stack.Screen name="Edit" component={EditScreen} />
        <Stack.Screen name="Gallery" component={GalleryScreen} />
        <Stack.Screen name="Setting" component={SettingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
