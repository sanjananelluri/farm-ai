import React, { useState } from "react";

import {
  Bars3BottomRightIcon,
  XMarkIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";

import logo from "../assets/logo.png";

import { NavLink, Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

import { changeLanguage } from "i18next";

import { auth } from "../../firebase";

import { signOut } from "firebase/auth";

const Header = () => {

  const { t } = useTranslation();

  const user = auth.currentUser;

  const [open, setOpen] = useState(false);

  const [profileOpen, setProfileOpen] = useState(false);

  const handleLanguageChange = (e) => {
    changeLanguage(e.target.value);
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  let Links = [
    { id: 1, name: `${t("home")}`, link: "/" },
    { id: 2, name: `${t("cropRecom")}`, link: "/croprecommendation" },
    { id: 3, name: `${t("cropInfo")}`, link: "/cropinfo" },
    { id: 4, name: `${t("cropYield")}`, link: "/cropyield" },
    { id: 5, name: `${t("Fertilizer")}`, link: "/crop-fertilizer" },
  ];

  return (

    <div className="shadow-md w-full fixed top-0 left-0 z-[100] animate-fade-down animate-once animate-duration-[2000ms] animate-ease-out">

      <div className="md:flex items-center justify-between py-2 bg-white md:px-10 px-7">

        <Link to="/">

          <div className="font-bold text-2xl cursor-pointer flex items-center gap-4">

            <img className="w-16" src={logo} alt="logo" />

            <span className="text-xl md:text-1.7xl">
              FARM AI
            </span>

          </div>

        </Link>

        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >

          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}

        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >

          {Links.map((link) => (

            <li
              key={link.id}
              className="md:ml-8 md:my-0 my-7 font-semibold"
            >

              <NavLink
                to={link.link}
                className="text-gray-800 hover:text-green-700 duration-500"
              >

                {link.name}

              </NavLink>

            </li>

          ))}

          <Link to="/help">

            <button className="btn bg-green-700 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 mx-3 md:static">

              {t("help")}

            </button>

          </Link>

          <li>

            <form className="w-1/10 md:max-w-sm my-3">

              <select
                id="countries"
                className="bg-green-700 text-white text-sm rounded-lg block p-1.5"
                onChange={handleLanguageChange}
              >

                <option selected className="bg-white text-black">
                  Languages
                </option>

                <option value="en" className="bg-white text-black">
                  English
                </option>

                <option value="hi" className="bg-white text-black">
                  Hindi
                </option>

              </select>

            </form>

          </li>

        </ul>

        <div className="relative ml-5">

          <button
            onClick={() => setProfileOpen(!profileOpen)}
            className="focus:outline-none"
          >

            <div
              className="
                w-11 h-11
                rounded-full
                bg-green-700
                flex items-center justify-center
                shadow-lg
                hover:scale-110
                transition-all duration-300
                cursor-pointer
              "
            >

              <UserCircleIcon className="w-8 text-white" />

            </div>

          </button>

          {profileOpen && (

            <div
              className="
                absolute right-0 mt-4 w-72
                bg-white/95 backdrop-blur-lg
                shadow-2xl rounded-2xl
                border border-green-100
                p-5 z-50
              "
            >

              {!user ? (

                <div className="flex flex-col gap-3">

                  <h2 className="text-lg font-bold text-green-700">
                    Welcome to FARM AI
                  </h2>

                  <Link
                    to="/login"
                    className="
                      w-full bg-green-700 text-white
                      py-2 rounded-xl text-center
                      hover:bg-green-800
                      transition-all duration-300
                    "
                  >

                    Login

                  </Link>

                  <Link
                    to="/register"
                    className="
                      w-full border border-green-700
                      py-2 rounded-xl text-center
                      hover:bg-green-50
                      transition-all duration-300
                    "
                  >

                    Register

                  </Link>

                </div>

              ) : (

                <div className="flex flex-col gap-2">

                  <div className="border-b pb-3 mb-3">

                    <p className="font-semibold text-gray-700 break-all">

                      {user?.email}

                    </p>

                  </div>

                  <Link to="/profile">

                    <button
                      className="
                        w-full text-left
                        hover:bg-green-50
                        transition-all duration-300
                        p-3 rounded-xl
                        font-medium text-gray-700
                      "
                    >

                      My Profile

                    </button>

                  </Link>

                  <Link to="/activity">

                    <button
                      className="
                        w-full text-left
                        hover:bg-green-50
                        transition-all duration-300
                        p-3 rounded-xl
                        font-medium text-gray-700
                      "
                    >

                      Activity History

                    </button>

                  </Link>

                  <Link to="/saved-predictions">

                    <button
                      className="
                        w-full text-left
                        hover:bg-green-50
                        transition-all duration-300
                        p-3 rounded-xl
                        font-medium text-gray-700
                      "
                    >

                      Saved Predictions

                    </button>

                  </Link>

                  <button
                    onClick={handleLogout}
                    className="
                      w-full text-left
                      hover:bg-red-50
                      text-red-500
                      transition-all duration-300
                      p-3 rounded-xl
                      font-medium
                    "
                  >

                    Logout

                  </button>

                </div>

              )}

            </div>

          )}

        </div>

      </div>

    </div>

  );

};

export default Header;