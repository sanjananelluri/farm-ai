import { useEffect, useState } from "react";

import { auth } from "../firebase";

import { onAuthStateChanged } from "firebase/auth";

import { UserCircleIcon } from "@heroicons/react/24/solid";

function Profile() {

  const [user, setUser] = useState(null);

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {

        if (currentUser) {
          setUser(currentUser);
        }

      }
    );

    return () => unsubscribe();

  }, []);

  return (

    <div className="min-h-screen bg-green-50 p-10">

      <div
        className="
          max-w-5xl mx-auto
          bg-white
          rounded-3xl
          shadow-2xl
          border border-green-100
          p-10
        "
      >

        <div className="flex items-center gap-6 mb-10">

          <div
            className="
              w-28 h-28
              rounded-full
              bg-green-100
              flex items-center justify-center
            "
          >

            <UserCircleIcon className="w-20 text-green-700" />

          </div>

          <div>

            <h1 className="text-5xl font-bold text-green-800 capitalize">

              {user?.displayName ||
                user?.email?.split("@")[0]}

            </h1>

            <p className="text-gray-500 mt-2 text-lg">
              FARM AI User
            </p>

          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-6">

          <div
            className="
              bg-green-50
              rounded-2xl
              p-6
              border border-green-100
            "
          >

            <p className="text-gray-500 text-sm mb-2">
              Email Address
            </p>

            <p className="text-2xl font-semibold text-green-800 break-all">
              {user?.email}
            </p>

          </div>

          <div
            className="
              bg-green-50
              rounded-2xl
              p-6
              border border-green-100
            "
          >

            <p className="text-gray-500 text-sm mb-2">
              Account Status
            </p>

            <p className="text-2xl font-semibold text-green-700">
              Active
            </p>

          </div>

          <div
            className="
              bg-green-50
              rounded-2xl
              p-6
              border border-green-100
            "
          >

            <p className="text-gray-500 text-sm mb-2">
              Platform
            </p>

            <p className="text-2xl font-semibold text-green-800">
              FARM AI Smart Agriculture System
            </p>

          </div>

          <div
            className="
              bg-green-50
              rounded-2xl
              p-6
              border border-green-100
            "
          >

            <p className="text-gray-500 text-sm mb-2">
              Membership
            </p>

            <p className="text-2xl font-semibold text-green-800">
              Standard User
            </p>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Profile;