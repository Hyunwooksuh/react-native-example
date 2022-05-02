/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import "react-native-gesture-handler";
import React from "react";
import GlobelProvider from "./src/context/Provider";
import AppContainer from "./src/navigations/index";

const App = () => {
  return (
    <GlobelProvider>
      <AppContainer />
    </GlobelProvider>
  );
};

export default App;
