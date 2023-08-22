import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from "./screens/RootStack";
import {LogContextProvider} from "./contexts/LogContext";
import 'react-native-get-random-values';

function App() {
  return (
    <NavigationContainer>
        <LogContextProvider>
            <RootStack />
        </LogContextProvider>
    </NavigationContainer>
  );
}

export default App;
