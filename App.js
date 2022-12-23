import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Auth from './src/component/Route/Auth';
import StackLogin from './src/component/Route/Stack-Login.js/StackLogin';




function App() {
  return (
    <NavigationContainer>
      {/* <Auth /> */}
      <StackLogin/>
    </NavigationContainer>
  );
}
export default App