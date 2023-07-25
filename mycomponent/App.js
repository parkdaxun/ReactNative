import React from 'react';
import {SafeAreaView, SafeAreaViewComponent} from "react-native";
import Greeting from './components/Greeting';

const App = () => {
  return (
      <SafeAreaView>
        <Greeting />
      </SafeAreaView>
  )
}

export default App;
