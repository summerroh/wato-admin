import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import logo from "../assets/logo_w.png";
import bg from "../assets/basic_bg_pc.png";
import bgMobile from "../assets/basic_bg.png";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [gender, setGender] = useState("");
  const [yearOfBirth, setYearOfBirth] = useState("");
  const [job, setJob] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("form submitted");

    // Construct the payload with input values
    const formData = {
      email,
      password,
      nickname,
      gender,
      yearOfBirth,
      job,
    };

    // Send formData to your signup API using Axios or Fetch
    // Example using Axios:
    // axios.post('your_signup_api_endpoint', formData)
    //   .then(response => {
    //     // Handle success
    //   })
    //   .catch(error => {
    //     // Handle error
    //   });
  };

  return (
    <div className="flex flex-col lg:flex-row bg-primary min-h-screen">
      <div className="flex-1 px-10 flex flex-col text-center justify-between items-center">
        <div className="flex flex-col items-center">
          <img src={logo} alt="Home Icon" className="mt-40 mb-8" />
          <div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                class="mb-3 bg-white border border-gray-300 text-gray-900 text-lg rounded-lg block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  h-14"
                placeholder="이메일을 입력하세요"
                required
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                class="mb-3 bg-white border border-gray-300 text-gray-900 text-lg rounded-lg block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  h-14"
                placeholder="비밀번호를 입력하세요"
                required
              />
              <input
                type="text"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                class="mb-3 bg-white border border-gray-300 text-gray-900 text-lg rounded-lg block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  h-14"
                placeholder="닉네임을 입력하세요"
                required
              />
              <input
                type="text"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                class="mb-3 bg-white border border-gray-300 text-gray-900 text-lg rounded-lg block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  h-14"
                placeholder="성별을 입력하세요"
                required
              />
              <input
                type="text"
                value={yearOfBirth}
                onChange={(e) => setYearOfBirth(e.target.value)}
                class="mb-3 bg-white border border-gray-300 text-gray-900 text-lg rounded-lg block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  h-14"
                placeholder="생년월일을 입력하세요 (YYYY-MM-DD)"
                required
              />
              <input
                type="text"
                value={job}
                onChange={(e) => setJob(e.target.value)}
                class="mb-3 bg-white border border-gray-300 text-gray-900 text-lg rounded-lg block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  h-14"
                placeholder="직업을 입력하세요"
                required
              />
              {/* <Link to="/signin"> */}
              <button
                type="submit"
                className="text-primary bg-white font-bold rounded-lg text-xl w-96 px-3 py-3 me-2 mt-3 mb-2 dark:bg-blue-600 focus:outline-none"
              >
                회원가입
              </button>
              {/* </Link> */}
            </form>
          </div>
        </div>

        <img
          src={bg}
          alt="Desktop Background"
          className="w-auto hidden lg:block"
        />
      </div>
      <img
        src={bgMobile}
        alt="Mobile Background"
        className="w-full block lg:hidden"
      />
    </div>
  );
}
