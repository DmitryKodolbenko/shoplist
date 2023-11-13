import React, { useEffect, useState } from "react";
import { HomeScreenContainer, HomeScreenContent } from "./styles";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { routes } from "../../constants/routes";
import Header from "../../components/Header";
import ListsScreen from "../ListsScreen";
import ListScreen from "../List";

function HomeScreen() {
  function renderRoutes() {
    return (
      <Routes>
        <Route
          path={`/`}
          element={<ListsScreen/>}
        />
        <Route path={`${routes.list}/`} element={<ListScreen/>} />
      </Routes>
    );
  }

  return (
    <>
      <Header />
      <HomeScreenContainer>
        <HomeScreenContent>{renderRoutes()}</HomeScreenContent>
      </HomeScreenContainer>
    </>
  );
}

export default HomeScreen;
