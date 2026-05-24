import React, { useState } from "react";
import axios from "axios";

const CropFertilizer = () => {
  const [crop, setCrop] = useState("");
  const [soil, setSoil] = useState("");
  const [season, setSeason] = useState("");
  const [nitrogen, setNitrogen] = useState("");
  const [phosphorus, setPhosphorus] = useState("");
  const [potassium, setPotassium] = useState("");

  const [fertilizer, setFertilizer] = useState(null);
  const [error, setError] = useState("");

  // Submit form to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:5000/fertilizer", {
        crop,
        soil,
        season,
        nitrogen: Number(nitrogen),
        phosphorus: Number(phosphorus),
        potassium: Number(potassium),
      });
      setFertilizer(response.data);
      setError("");
    } catch (err) {
      console.error("Error fetching fertilizer recommendation:", err);
      setError("Failed to fetch recommendation. Please try again.");
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-2xl shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-green-700">
        Fertilizer Recommendation
      </h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label>Crop</label>
          <input
            type="text"
            value={crop}
            onChange={(e) => setCrop(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label>Soil Type</label>
          <input
            type="text"
            value={soil}
            onChange={(e) => setSoil(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label>Season</label>
          <input
            type="text"
            value={season}
            onChange={(e) => setSeason(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label>Nitrogen(Kg/ha)</label>
          <input
            type="number"
            value={nitrogen}
            onChange={(e) => setNitrogen(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label>Phosphorus(Kg/ha)</label>
          <input
            type="number"
            value={phosphorus}
            onChange={(e) => setPhosphorus(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label>Potassium(Kg/ha)</label>
          <input
            type="number"
            value={potassium}
            onChange={(e) => setPotassium(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white p-2 rounded mt-4"
        >
          Get Recommendation
        </button>
      </form>

      {/* Output */}
      {fertilizer && (
        <div className="mt-6 p-4 border rounded-lg bg-green-50">
          <h3 className="font-semibold text-green-800 mb-2">
            Recommended Fertilizer
          </h3>
          <p>
            <strong>Nitrogen:</strong> {fertilizer.Nitrogen}
          </p>
          <p>
            <strong>Phosphorus:</strong> {fertilizer.Phosphorus}
          </p>
          <p>
            <strong>Potassium:</strong> {fertilizer.Potassium}
          </p>
          <p>
            <strong>Fertilizer:</strong> {fertilizer.Fertilizer}
          </p>
          <p className="text-blue-700 font-medium">
               💰 Market Price: {fertilizer.market_price?fertilizer.market_price : "Not Available"}
          </p>
        </div>
      )}

      {error && <p className="mt-4 text-red-600 font-medium">⚠️ {error}</p>}
    </div>
  );
};

export default CropFertilizer;