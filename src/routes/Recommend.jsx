import React, { useState } from "react";

import Menu from "../components/Menu";
import LogoTopbar from "../components/LogoTopbar";
import Carousel from "../components/Carousel";

import korea from "../assets/korea.png";

const data1 = [
  {
    title: "저체중 or 과체중인 사람?",
    p: "친구가 하고 있는 건데 나름 쏠쏠하다고 그래서 공유 아직은 부산, 대구, 광주...",
    tag: "잡담",
    date: "2023.11.07 14:33",
  },
  {
    title: "저체중 or 과체중인 사람?",
    p: "친구가 하고 있는 건데 나름 쏠쏠하다고 그래서 공유 아직은 부산, 대구, 광주...",
    tag: "잡담",
    date: "2023.11.07 14:33",
  },
  {
    title: "저체중 or 과체중인 사람?",
    p: "친구가 하고 있는 건데 나름 쏠쏠하다고 그래서 공유 아직은 부산, 대구, 광주...",
    tag: "잡담",
    date: "2023.11.07 14:33",
  },
  {
    title: "저체중 or 과체중인 사람?",
    p: "친구가 하고 있는 건데 나름 쏠쏠하다고 그래서 공유 아직은 부산, 대구, 광주...",
    tag: "잡담",
    date: "2023.11.07 14:33",
  },
];

const data2 = [
  {
    title: "저체중 or 과체중인 사람?",
    p: "친구가 하고 있는 건데 나름 쏠쏠하다고 그래서 공유 아직은 부산, 대구, 광주...",
    country: "대한민국",
    date: "2023.11.07 14:33",
  },
  {
    title: "저체중 or 과체중인 사람?",
    p: "친구가 하고 있는 건데 나름 쏠쏠하다고 그래서 공유 아직은 부산, 대구, 광주...",
    country: "대한민국",
    date: "2023.11.07 14:33",
  },
  {
    title: "저체중 or 과체중인 사람?",
    p: "친구가 하고 있는 건데 나름 쏠쏠하다고 그래서 공유 아직은 부산, 대구, 광주...",
    country: "대한민국",
    date: "2023.11.07 14:33",
  },
  {
    title: "저체중 or 과체중인 사람?",
    p: "친구가 하고 있는 건데 나름 쏠쏠하다고 그래서 공유 아직은 부산, 대구, 광주...",
    country: "대한민국",
    date: "2023.11.07 14:33",
  },
];

const Card = ({ title, p, tag, country, date, icon, padding }) => {
  return (
    <div
      className={`w-full sm:w-1/2 lg:w-1/2 xl:w-1/2 mb-4 ${
        padding ? `lg:pl-3 xl:pl-3` : ""
      }`}
    >
      <div className="p-4 flex flex-col rounded-lg shadow-sm bg-white justify-start space-y-4">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center">
            {tag && (
              <span class="bg-blue-50 text-primary text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                잡담
              </span>
            )}
            {country && (
              <img
                src={korea}
                alt="Recommend Icon"
                className="w-6 h-6 object-cover"
              />
            )}
            <p className="text-xs font-medium ml-2 text-gray-500">{country}</p>
          </div>
          <p className="text-sm font-medium ml-2 text-gray-400">{date}</p>
        </div>
        <h1 className="text-lg font-regular">{title}</h1>
        <p className="text-md font-regular text-gray-400">{p}</p>
      </div>
    </div>
  );
};

export default function Recommend() {
  return (
    <div className="flex flex-col lg:flex-row bg-gray-100 min-h-screen">
      <div className="flex-1">
        <LogoTopbar />
        <div className="max-w-3xl mx-auto py-10 flex">
          <Menu />
          <div className="flex flex-1 ml-5 mr-5 lg:ml-8 lg:mr-8 flex-wrap">
            <Carousel />

            <h2 className="text-lg font-bold pb-4">카테고리별 게시글</h2>

            <div className="flex  flex-wrap">
              {data1.map((doc, index) => (
                <Card key={index} {...doc} padding={(index + 1) % 2 !== 0} />
              ))}
            </div>
            <h2 className="text-lg font-bold pl-3 pb-4 pt-4">국가별 게시글</h2>
            <div className="flex  flex-wrap">
              {data2.map((doc, index) => (
                <Card key={index} {...doc} padding={(index + 1) % 2 !== 0} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
