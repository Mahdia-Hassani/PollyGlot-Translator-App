import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Result from "../pages/Result";
import AppLayout from "../layout/AppLayout";

export default function AppRouter() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </AppLayout>
  );
}
