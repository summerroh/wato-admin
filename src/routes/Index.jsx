import React, { useState } from "react";

import Menu from "../components/Menu";
import Topbar from "../components/Topbar";
import Carousel from "../components/Carousel";

import korea from "../assets/korea.png";
import comment from "../assets/ico_comment_line.png";
import bubble from "../assets/ico-comment-gray.svg";
import banner from "../assets/banner.png";

const data = [
  {
    title: "직무교육",
    p: "친구가 하고 있는 건데 나름 쏠쏠하다고 그래서 공유 아직은 부산, 대구, 광주, 대전, 충남, 전북, 경북, 제주만 가능 자세한 내용은 청년 신체 건강증진서비스 검색해 봐...",
    country: "대한민국",
    date: "2023.11.07 14:33",
  },
  {
    title: "저체중 or 과체중인 사람?",
    p: "친구가 하고 있는 건데 나름 쏠쏠하다고 그래서 공유 아직은 부산, 대구, 광주, 대전, 충남, 전북, 경북, 제주만 가능 자세한 내용은 청년 신체 건강증진서비스 검색해 봐...",
    country: "대한민국",
    date: "2023.11.07 14:33",
  },
  {
    title: "저체중 or 과체중인 사람?",
    p: "친구가 하고 있는 건데 나름 쏠쏠하다고 그래서 공유 아직은 부산, 대구, 광주, 대전, 충남, 전북, 경북, 제주만 가능 자세한 내용은 청년 신체 건강증진서비스 검색해 봐...",
    country: "대한민국",
    date: "2023.11.07 14:33",
  },
  {
    title: "저체중 or 과체중인 사람?",
    p: "친구가 하고 있는 건데 나름 쏠쏠하다고 그래서 공유 아직은 부산, 대구, 광주, 대전, 충남, 전북, 경북, 제주만 가능 자세한 내용은 청년 신체 건강증진서비스 검색해 봐...",
    country: "대한민국",
    date: "2023.11.07 14:33",
  },
];

const Card = ({ title, p, tag, country, date, icon, padding }) => {
  return (
    <div className={`w-full pb-4 pl-4`}>
      <div className="p-4 flex flex-col rounded-lg shadow-sm bg-white justify-start space-y-4">
        <div className="flex flex-row items-center justify-between pb-4 border-b border-gray-200">
          <div className="flex flex-row items-center">
            {country && (
              <img
                src={korea}
                alt="Recommend Icon"
                className="w-6 h-6 object-cover"
              />
            )}
            <p className="text-md font-medium ml-2 text-gray-500 ">{country}</p>
          </div>
          <span class="bg-blue-50 text-primary text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
            잡담
          </span>
        </div>
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-lg font-regular">{title}</h1>
          <p className="text-sm font-medium ml-2 text-gray-400">{date}</p>
        </div>
        <p className="text-md font-regular text-gray-400 pb-4 border-b border-gray-200">
          {p}
        </p>

        <div className="flex flex-row items-center justify-between pb-4">
          <div className="flex flex-row items-center">
            {country && (
              <img
                src={bubble}
                alt="Recommend Icon"
                className="w-6 h-6 object-cover"
              />
            )}
            <h1 className="text-lg font-medium text-gray-400 pl-1">15</h1>
          </div>
          <div className="flex flex-row items-center">
            {country && (
              <img
                src={comment}
                alt="Recommend Icon"
                className="w-6 h-6 object-cover"
              />
            )}
            <h1 className="text-lg font-regular text-primary">댓글</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Index() {
  return (
    <div className="flex flex-col lg:flex-row bg-gray-100 min-h-screen">
      <div className="flex-1">
        <Topbar title={"홈"} />
        <div className="max-w-3xl mx-auto py-10 flex">
          <Menu />
          <div className="flex flex-1 ml-4 flex-wrap space-y-6">
            <div className="pl-4">
              <span class="bg-primary text-white text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                전체
              </span>
              <span class="bg-blue-100 text-primary text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                잡담
              </span>
              <span class="bg-blue-100 text-primary text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                블라블라
              </span>
              <span class="bg-blue-100 text-primary text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                주식투자
              </span>
              <span class="bg-blue-100 text-primary text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                썸연애
              </span>
              <span class="bg-blue-100 text-primary text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                잡담
              </span>
              <span class="bg-blue-100 text-primary text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                블라블라
              </span>
              <span class="bg-blue-100 text-primary text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                주식투자
              </span>
              <span class="bg-blue-100 text-primary text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                썸연애
              </span>
            </div>

            <img src={banner} alt="Home Icon" className="w-full pl-3" />
            <div className="flex flex-col w-full">
              {data.map((doc, index) => (
                <Card key={index} {...doc} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
