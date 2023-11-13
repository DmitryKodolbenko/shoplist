import React from "react";
import AppScreen from "./screens/AppScreen";
import { Navigate, Outlet, Route, Routes,  } from "react-router-dom";
import Gstyles from "./stylesheets/gstyles";
import { routes } from "./constants/routes";
import HomeScreen from "./screens/HomeScreen";
import WebFont from "webfontloader";
import WebApp from "@twa-dev/sdk";
import { RootStore, StoreProvider } from "./stores";

WebApp.ready();

WebFont.load({
  google: {
    families: ["SF-Pro", "Roboto"],
  },
});

function App() {
  const rootStore = new RootStore();
  return (
    <StoreProvider store={rootStore}>
      <AppScreen>
        {/* <Routes>
          <Route
            index
            element={<Navigate to={`${routes.home + routes.lists}/`} replace />}
          />
          <Route path="/" element={<Outlet />} />
          <Route path={`${routes.lists}/*`} element={<HomeScreen />} />
          
        </Routes> */}
        <HomeScreen />
        <Gstyles />
      </AppScreen>
    </StoreProvider>
  );
}

export default App;
