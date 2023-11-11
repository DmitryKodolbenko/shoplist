import React, { useEffect, useState } from "react";
import {
  HomeScreenContainer,
  HomeScreenContent,
} from "./styles";
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { routes } from "../../constants/routes";

function HomeScreen() {

  function renderRoutes() {
    return (
      <Routes>
        <Route path={`${routes.list}/`} element={<></>} />
        <Route path={`${routes.lists}/`} element={<></>} />
      </Routes>
    );
  }



  return (
    <>
      <HomeScreenContainer>
        <HomeScreenContent>{renderRoutes()}</HomeScreenContent>
      </HomeScreenContainer>
    </>
  );
}

export default HomeScreen;
