import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import {
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline";
function login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const provider = new GoogleAuthProvider();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigate("/profile");

    } catch (error) {

      alert(error.message);

    }

  };

  const handleGoogleLogin = async () => {

    try {

      await signInWithPopup(auth, provider);

      navigate("/profile");

    } catch (error) {

      alert(error.message);

    }

  };

  return (

    <div className="min-h-screen bg-green-50 flex items-center justify-center p-6">

      <div
        className="
          bg-white
          rounded-3xl
          shadow-2xl
          p-10
          w-full max-w-md
          border border-green-100
        "
      >

        <h1 className="text-4xl font-bold text-green-800 text-center mb-8">
          Login
        </h1>

        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >

          <div>

            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="
                w-full border border-green-200
                rounded-xl p-3
                focus:outline-none
                focus:ring-2
                focus:ring-green-400
              "
              required
            />

          </div>

          <div className="relative">

            <label className="block mb-2 font-medium">
              Password
            </label>

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="
                w-full border border-green-200
                rounded-xl p-3
                focus:outline-none
                focus:ring-2
                focus:ring-green-400
              "
              required
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              className="absolute right-4 top-12"
            >

              {showPassword ? (
                <EyeSlashIcon className="w-5" />
              ) : (
                <EyeIcon className="w-5" />
              )}

            </button>

          </div>

          <button
            type="submit"
            className="
              w-full bg-green-700
              text-white py-3
              rounded-xl
              hover:bg-green-800
              transition-all duration-300
            "
          >

            Login

          </button>

        </form>

        <button
          onClick={handleGoogleLogin}
          className="
            w-full mt-5 border
            border-green-700
            py-3 rounded-xl
            hover:bg-green-50
            transition-all duration-300
          "
        >

          Continue with Google

        </button>

        <p className="text-center mt-6 text-gray-600">

          Don’t have an account?{" "}

          <Link
            to="/register"
            className="text-green-700 font-semibold"
          >

            Register

          </Link>

        </p>

      </div>

    </div>

  );

}

export default login;