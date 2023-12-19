import React, { useState } from "react";
import LogoTopbar from "../components/LogoTopbar";

import Menu from "../components/Menu";
import Topbar from "../components/Topbar";
import Dropdown from "../components/Dropdown";

import detail from "../assets/detail.png";
import bubble from "../assets/ico-comment-gray.svg";

const data = [
  {
    title: "저체중 or 과체중인 사람?",
    content: `친구가 하고 있는 건데 나름 쏠쏠하다고 그래서 공유 아직은 부산, 대구, 광주, 대전, 충남, 전북, 경북, 제주만 가능 자세한 내용은 청년 신체 건강증진서비스 검색해 봐...`,
  },
];

export default function Terms() {
  return (
    <div className="flex flex-col bg-gray-100 min-h-screen">
      <div className="flex-1">
        <LogoTopbar />
        <Topbar title={"저체중 or 과체중인 사람?"} alignLeft />
        <div className="max-w-3xl mx-auto py-10 flex">
          <div className="flex-1 pl-4">
            <div className="space-y-10 px-4">
              {data?.map((item, index) => (
                <div key={index}>
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <img src={detail} alt="Home Icon" className="mt-4 mb-4" />
                  <div
                    className="text-lg font-regular whitespace-pre-line"
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-white">
        <div className="max-w-3xl mx-auto py-10 flex">
          <div className="flex-1 pl-4">
            <div className="flex flex-row items-center mb-8">
              <img
                src={bubble}
                alt="Recommend Icon"
                className="w-6 h-6 object-cover"
              />

              <h1 className="text-lg font-medium text-gray-400 pl-1">
                댓글 15
              </h1>
            </div>

            <div className="p-4 bg-gray-100">
              <p className="text-lg font-regular whitespace-pre-line">
                우와 이게 뭐야 완전 처음 알았네! 고마워
              </p>
              <p className="text-sm text-gray-600">2023.11.07 14:33</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
