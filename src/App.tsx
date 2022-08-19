import React from "react";
import MainLayout from "./layout/MainLayout";
import { Navigate, Route, Routes } from "react-router-dom";
import Ozon from "components/Ozon/Ozon";
import Yandex from "components/Yandex/Yandex";
import Counter from "components/Counter/Counter";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/ozon" element={<Ozon />} />
        <Route path="/yandex" element={<Yandex />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="*" element={<Navigate to="/yandex" replace />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
