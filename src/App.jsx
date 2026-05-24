import React from "react";
import Home from "./components/Home/Home";
import CropRecommendation from "./components/CropRecom/CropRecomm";
import Layout from "./Layout";
import CropYield from "./components/CropYield/CropYield";
import CropInfo from "./components/cropInfo/CropInfo";
import Help from "./components/Help/Help";
import CropFertilizer from "./components/CropFertilizer/CropFertilizer";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Profile from "./pages/Profile.jsx";
import ActivityHistory from "./pages/ActivityHistory.jsx";
import SavedPredictions from "./pages/SavedPredictions.jsx";
import { Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <Routes>
      <Route
        path="/login"
        element={<Login />}
      />
      <Route
        path="/register"
        element={<Register />}
      />
      <Route
        path="/"
        element={<Layout />}>

        <Route
          index
          element={<Home />}
        />

        <Route
          path="croprecommendation"
          element={<CropRecommendation />}
        />

        <Route
          path="cropyield"
          element={<CropYield />}
        />

        <Route
          path="cropinfo"
          element={<CropInfo />}
        />

        <Route
          path="help"
          element={<Help />}
        />

        <Route
          path="crop-fertilizer"
          element={<CropFertilizer />}
        />

        <Route
          path="profile"
          element={<Profile />}
        />

        <Route
          path="activity"
          element={<ActivityHistory />}
        />

        <Route
          path="saved-predictions"
          element={<SavedPredictions />}
        />

      </Route>

    </Routes>

  );

}