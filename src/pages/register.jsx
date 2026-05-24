// ===========================
// src/pages/Register.jsx
// ===========================

import React, { useState } from "react";

import {
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { auth } from "../firebase";

import { useNavigate, Link } from "react-router-dom";

import {
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline";

function Register() {

  const navigate = useNavigate();

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async (e) => {

    e.preventDefault();

    try {

      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

      await updateProfile(
        userCredential.user,
        {
          displayName: name,
        }
      );

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
          Register
        </h1>

        <form
          onSubmit={handleRegister}
          className="space-y-5"
        >

          <div>

            <label className="block mb-2 font-medium">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter full name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
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

            Create Account

          </button>

        </form>

        <p className="text-center mt-6 text-gray-600">

          Already have an account?{" "}

          <Link
            to="/login"
            className="text-green-700 font-semibold"
          >

            Login

          </Link>

        </p>
      </div>
    </div>
  );
}
export default Register;