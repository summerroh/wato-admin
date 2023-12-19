import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import powerOn from "../assets/power_on.png";
import powerOff from "../assets/power_off.png";
import { useState } from "react";

export default function Menu() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className="bg-[#239EC1] text-white p-5 rounded-t-lg">
        <div className="flex justify-between items-center py-1">
          <h2 className="text-lg font-bold">관리자</h2>
          <button
            onMouseOver={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)}
            className="w-7 h-7 bg-no-repeat bg-center bg-cover"
            style={{
              backgroundImage: `url(${isHovered ? powerOn : powerOff})`,
              border: "none",
              outline: "none",
              cursor: "pointer",
            }}
            onClick={() => {
              // Handle button click event here
            }}
          />
        </div>
      </div>
      <div className="bg-white p-5 rounded-b-lg shadow h-full">
        <div className="flex flex-col space-y-3">
          <AccordionDemo />
        </div>
      </div>
    </>
  );
}

function AccordionDemo() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionClick = (value) => {
    setOpenAccordion(openAccordion === value ? null : value);
  };

  const isAccordionOpen = (value) => {
    return openAccordion === value;
  };

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger
          className={`text-sm bg-gray-50 px-4 rounded-lg mb-3 ${
            isAccordionOpen("item-1")
              ? "bg-[#239EC1] text-white"
              : "bg-gray-50 text-black"
          }`}
          onClick={() => handleAccordionClick("item-1")}
        >
          회원관리
        </AccordionTrigger>
        <AccordionContent className="px-4 pt-2">
          <Link className="text-[13px] text-gray-500">회원관리</Link>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger
          className={`text-sm bg-gray-50 px-4 rounded-lg mb-3 ${
            isAccordionOpen("item-2")
              ? "bg-[#239EC1] text-white"
              : "bg-gray-50 text-black"
          }`}
          onClick={() => handleAccordionClick("item-2")}
        >
          고객센터
        </AccordionTrigger>
        <AccordionContent className="px-4 pt-2">
          <Link className="text-sm text-gray-500">공지사항</Link>
        </AccordionContent>
        <AccordionContent className="px-4 pt-2">
          <Link className="text-sm text-gray-500">FAQ</Link>
        </AccordionContent>
        <AccordionContent className="px-4 pt-2">
          <Link className="text-sm text-gray-500">신고관리</Link>
        </AccordionContent>
        <AccordionContent className="px-4 pt-2">
          <Link className="text-sm text-gray-500">차단관리</Link>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger
          className={`text-sm bg-gray-50 px-4 rounded-lg mb-3 ${
            isAccordionOpen("item-3")
              ? "bg-[#239EC1] text-white"
              : "bg-gray-50 text-black"
          }`}
          onClick={() => handleAccordionClick("item-3")}
        >
          게시글 관리
        </AccordionTrigger>
        <AccordionContent className="px-4 pt-2">
          <Link className="text-sm text-gray-500">분류관리</Link>
        </AccordionContent>
        <AccordionContent className="px-4 pt-2">
          <Link className="text-sm text-gray-500">게시글관리</Link>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger
          className={`text-sm bg-gray-50 px-4 rounded-lg mb-3 ${
            isAccordionOpen("item-4")
              ? "bg-[#239EC1] text-white"
              : "bg-gray-50 text-black"
          }`}
          onClick={() => handleAccordionClick("item-4")}
        >
          컨텐츠 관리
        </AccordionTrigger>
        <AccordionContent className="px-4 pt-2">
          <Link className="text-sm text-gray-500">배너 관리</Link>
        </AccordionContent>
        <AccordionContent className="px-4 pt-2">
          <Link className="text-sm text-gray-500">이벤트 관리</Link>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger
          className={`text-sm bg-gray-50 px-4 rounded-lg mb-3 ${
            isAccordionOpen("item-5")
              ? "bg-[#239EC1] text-white"
              : "bg-gray-50 text-black"
          }`}
          onClick={() => handleAccordionClick("item-5")}
        >
          알림 관리
        </AccordionTrigger>
        <AccordionContent className="px-4 pt-2">
          <Link className="text-sm text-gray-500">알림 관리</Link>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger
          className={`text-sm bg-gray-50 px-4 rounded-lg mb-3 ${
            isAccordionOpen("item-6")
              ? "bg-[#239EC1] text-white"
              : "bg-gray-50 text-black"
          }`}
          onClick={() => handleAccordionClick("item-6")}
        >
          고객 문의
        </AccordionTrigger>
        <AccordionContent className="px-4 pt-2">
          <Link className="text-sm text-gray-500">고객 문의</Link>
        </AccordionContent>
        <AccordionItem value="item-7">
          <AccordionTrigger
            className={`text-sm bg-gray-50 px-4 rounded-lg mb-3 ${
              isAccordionOpen("item-7")
                ? "bg-[#239EC1] text-white"
                : "bg-gray-50 text-black"
            }`}
            onClick={() => handleAccordionClick("item-7")}
          >
            설정 관리
          </AccordionTrigger>
          <AccordionContent className="px-4 pt-2">
            <Link className="text-sm text-gray-500">개인정보 처리방침</Link>
          </AccordionContent>
          <AccordionContent className="px-4 pt-2">
            <Link className="text-sm text-gray-500">정보보호정책</Link>
          </AccordionContent>
        </AccordionItem>
      </AccordionItem>
    </Accordion>
  );
}

function ChevronDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
