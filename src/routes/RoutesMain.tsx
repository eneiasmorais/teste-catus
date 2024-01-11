import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import React from "react";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};
