import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";

function SavedPredictions() {

  const [predictions, setPredictions] = useState([]);

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(
      auth,
      async (currentUser) => {

        if (currentUser) {

          const q = query(
            collection(db, "predictions"),
            where("userEmail", "==", currentUser.email),
            orderBy("createdAt", "desc")
          );

          const querySnapshot = await getDocs(q);

          const data = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          setPredictions(data);

        }

      }
    );

    return () => unsubscribe();

  }, []);

  return (

    <div className="min-h-screen bg-green-50 p-10">

      <div
        className="
          max-w-6xl mx-auto
          bg-white rounded-3xl
          shadow-2xl border border-green-100
          p-10
        "
      >

        <h1 className="text-4xl font-bold text-green-800 mb-10">
          Saved Predictions
        </h1>

        {predictions.length === 0 ? (

          <div
            className="
              bg-green-50 rounded-2xl
              p-10 text-center
            "
          >

            <p className="text-gray-500 text-lg">
              No saved predictions found.
            </p>

          </div>

        ) : (

          <div className="grid md:grid-cols-2 gap-6">

            {predictions.map((item) => (

              <div
                key={item.id}
                className="
                  bg-green-50 rounded-2xl
                  p-6 border border-green-100
                  hover:shadow-xl
                  transition-all duration-300
                "
              >

                <span
                  className="
                    bg-green-100 text-green-700
                    px-3 py-1 rounded-full
                    text-sm font-semibold
                  "
                >
                  Prediction
                </span>

                <p className="text-xl font-semibold text-gray-700 mt-5">
                  {item.prediction}
                </p>

                <p className="text-sm text-gray-500 mt-4">

                  {item.createdAt?.seconds
                    ? new Date(
                        item.createdAt.seconds * 1000
                      ).toLocaleString()
                    : "No date"}

                </p>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>

  );

}

export default SavedPredictions;