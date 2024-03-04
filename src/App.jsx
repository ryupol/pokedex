import React from "react";
import { Routes, Route } from "react-router-dom";
import Pokedex from "./components/Pokedex";
import Layout from "./components/Layout";
export default function App() {
  return (
    <Routes>
      <Route path="/" Component={Layout}>
        <Route index Component={Pokedex} />
      </Route>
    </Routes>
  );
}
