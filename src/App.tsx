import React from 'react';
import logo from './logo.svg';
import AppScreen from './screens/AppScreen';
import { Navigate, Outlet, Route, Routes, useNavigate, useParams } from "react-router-dom";
import Gstyles from './stylesheets/gstyles';
import { routes } from './constants/routes';
import HomeScreen from './screens/HomeScreen';
// import WebFont from "webfontloader";
import WebApp from '@twa-dev/sdk'


WebApp.ready();

// WebFont.load({
//   google: {
//     families: ["SF-Pro", "Roboto"],
//   }
// });


function App() {




  return (
    <AppScreen>
      <Routes>
      <Route index element={<Navigate to={`${routes.home + routes.lists}/`} replace />} />
      <Route path="/" element={<Outlet />} />
      <Route path={`${routes.home}/*`} element={<HomeScreen />} />
      </Routes>
      <Gstyles />
     </AppScreen>
  );
}

export default App;
