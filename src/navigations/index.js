import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import DrawerNavigator from "./DrawerNavigator";
import { GlobalContext } from "../context/Provider";

const AppNavContainer = () => {
  const {
    authState: { isLoggedIn },
  } = useContext(GlobalContext);

  return (
    <NavigationContainer>
      {isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

// 스크린 >> 홈 >> 드로어
// 스크린 >> 인증

export default AppNavContainer;
