import React from "react";
import { HomeScreenContainer, HomeScreenContent } from "./styles";
import { Routes, Route } from "react-router-dom";
import { routes } from "../../constants/routes";
import Header from "../../components/Header";
import ListsScreen from "../ListsScreen";
import ListScreen from "../List";

function renderRoutes() {
  return (
    <Routes>
      <Route index element={<ListsScreen />} />
      <Route path={`/`} element={<ListsScreen />} />
      <Route path={`${routes.list}/`} element={<ListScreen />} />
    </Routes>
  );
}

function HomeScreen() {
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
