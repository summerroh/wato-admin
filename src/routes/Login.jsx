import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo_w.png";
import kakao from "../assets/kakao.png";
import email from "../assets/email.png";
import facebook from "../assets/facebook.png";
import naver from "../assets/naver.png";

import bg from "../assets/basic_bg_pc.png";
import bgMobile from "../assets/basic_bg.png";

export default function Login() {
  return (
    <div className="flex flex-col lg:flex-row bg-primary min-h-screen">
      <div className="flex-1 px-10 flex flex-col text-center justify-between items-center">
        <div className="flex flex-col items-center">
          <img src={logo} alt="Home Icon" className="mt-40 mb-4" />
          <div>
            <Link to="/index">
              <button className="flex items-center text-white bg-[#3474F1] font-bold rounded-lg text-lg w-96 px-3 py-3 me-2 mt-3 mb-2 dark:bg-blue-600 focus:outline-none">
                <div className="w-32">
                  <img src={facebook} alt="Home Icon" className="w-8 ml-2" />
                </div>
                페이스북 로그인
              </button>
            </Link>

            <Link to="/index">
              <button className="flex items-center text-dark bg-white font-bold rounded-lg text-lg w-96 px-3 py-3 me-2 mt-3 mb-2 dark:bg-blue-600 focus:outline-none">
                <div className="w-32">
                  <img src={kakao} alt="Home Icon" className="w-8 ml-2" />
                </div>
                카카오 로그인
              </button>
            </Link>

            <Link to="/index">
              <button className="flex items-center text-white bg-[#3CAC39] font-bold rounded-lg text-lg w-96 px-3 py-3 me-2 mt-3 mb-2 dark:bg-blue-600 focus:outline-none">
                <div className="w-32">
                  <img src={naver} alt="Home Icon" className="w-8 ml-2" />
                </div>
                네이버 로그인
              </button>
            </Link>

            <Link to="/index">
              <button className="flex items-center text-white bg-primary border font-bold rounded-lg text-lg w-96 px-3 py-3 me-2 mt-3 mb-2 dark:bg-blue-600 focus:outline-none">
                <div className="w-32">
                  <img src={email} alt="Home Icon" className="w-8 ml-2" />
                </div>
                이메일 로그인
              </button>
            </Link>
          </div>
        </div>

        <img
          src={bgMobile}
          alt="Mobile Background"
          className="w-full block lg:hidden"
        />
        <img
          src={bg}
          alt="Desktop Background"
          className="w-auto hidden lg:block"
        />
      </div>
    </div>
  );
}
