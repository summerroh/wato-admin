import React, { useState } from "react";

import Menu from "../components/Menu";
import Topbar from "../components/Topbar";

import mouth from "../assets/cate01.png";
import cate02 from "../assets/cate02.png";
import cate03 from "../assets/cate03.png";
import cate04 from "../assets/cate04.png";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const dropdownValue = [
    { title: "잡담", icon: mouth },
    { title: "잡담2", icon: cate02 },
    { title: "잡담3", icon: cate03 },
    { title: "잡담4", icon: cate04 },
  ];

  return (
    <>
      {/* Dropdown */}
      <div className="w-full relative inline-block text-left">
        <div className="relative inline-block w-full">
          <button
            type="button"
            className="bg-white border border-gray-300 text-gray-900 text-lg rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white h-14"
            id="menu-button"
            aria-expanded={isOpen ? "true" : "false"}
            aria-haspopup="true"
            onClick={toggleDropdown}
          >
            <div className="flex flex-row justify-between">
              <div className="flex flex-row justify-center items-center">
                <img src={mouth} alt="Home Icon" className="w-6 mr-2" />
                <p className="text-sm">잡담</p>
              </div>

              <svg
                className={`-mr-1 h-5 w-5 text-gray-400 transform ${
                  isOpen ? "rotate-180" : ""
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </button>
        </div>

        {isOpen && (
          <div
            className="absolute bg-white border border-gray-300 text-gray-900 text-lg rounded-lg block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            role="menu"
            aria-labelledby="menu-button"
            tabIndex="-1"
            style={{ top: "calc(100% + 8px)", right: 0, width: "100%" }}
          >
            <div className="py-1" role="none">
              {dropdownValue.map(({ title, icon }) => {
                return (
                  <div
                    key={title}
                    className="flex flex-row justify-start items-center"
                  >
                    <img src={icon} alt="Home Icon" className="w-6" />

                    <a
                      href="#"
                      className="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabIndex="-1"
                    >
                      {title}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
      {/* Dropdown */}
    </>
  );
};

export default function Write() {
  return (
    <div className="flex flex-col lg:flex-row bg-gray-100 min-h-screen">
      <div className="flex-1">
        <Topbar title={"글쓰기"} />
        <div className="max-w-3xl mx-auto py-10 flex">
          <div className="flex-1 ml-4 ">
            <form>
              <div>
                <label
                  for="first_name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  카테고리 선택
                </label>

                <div className="flex flex-row justify-center items-center mb-3 space-x-2">
                  <Dropdown />
                </div>

                <input
                  type="text"
                  id="first_name"
                  class="mb-3 bg-white border border-gray-300 text-gray-900 text-lg rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  h-14"
                  placeholder="제목을 입력하세요"
                  required
                />

                <input
                  type="text"
                  id="first_name"
                  class="bg-white border border-gray-300 text-gray-900 text-lg rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white h-56"
                  placeholder="내용을 입력해주세요"
                  required
                />
              </div>
              <button
                type="button"
                class="w-full text-white bg-primary hover:bg-blue-800 font-bold rounded-lg text-xl px-5 py-4 me-2 mt-3 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none"
              >
                글쓰기
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
