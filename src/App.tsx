import React, { useEffect, Suspense } from "react";
import { getCurrentScreen } from "@auth0/auth0-acul-js";

const LoginIdScreen = React.lazy(() => import("./screens/LoginId"));
const LoginScreen = React.lazy(() => import("./screens/Login"));
const PasskeyScreen = React.lazy(() => import("./screens/Passkey"));
const ResetPasswordEmailScreen = React.lazy(() => import("./screens/ResetPasswordEmail"));


const App: React.FC = () => {
  const [screen, setScreen] = React.useState("login-id");
  useEffect(() => {
    // const current = "login-id";//getCurrentScreen();
    const current = getCurrentScreen();
    setScreen(current!);
  }, []);

  const renderScreen = () => {
    console.log(`current screen: ${screen}`)
    switch (screen) {
      case "login-id":
        return <LoginIdScreen />;
      case "login":
        return <LoginScreen />;
      case "passkey-enrollment":
        return <PasskeyScreen />;
      case "passkey-enrollment-local":
        return <PasskeyScreen />;
      case "reset-password-email":
        return <ResetPasswordEmailScreen />;
      default:
        return <>No screen rendered</>;
    }
  };

  return <Suspense fallback={<div>Loading...</div>}>{renderScreen()}</Suspense>;
};

export default App;