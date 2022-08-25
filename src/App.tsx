import React from "react";
import MainLayout from "./layout/MainLayout";
import { Navigate, Route, Routes } from "react-router-dom";
import MainContent from "components/MainContent/MainContent";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
