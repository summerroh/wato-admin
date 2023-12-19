import React, { useState } from "react";
import { Link } from "react-router-dom";

import Menu from "../components/Menu";
import Topbar from "../components/Topbar";

import info from "../assets/ico-myinfo.png";
import setting from "../assets/ico-setting.svg";
import notice from "../assets/ico-notice.svg";
import customer from "../assets/ico-customer.png";
import help from "../assets/ico-help.svg";

const Card = ({ title, icon, padding, link }) => {
  return (
    <Link
      to={`/${link}`}
      className={`w-full sm:w-1/2 lg:w-1/2 xl:w-1/2 pb-3 ${
        padding ? `lg:pl-3 xl:pl-3` : ""
      }`}
    >
      <div className="flex rounded-lg shadow-sm bg-white h-28 items-center justify-center">
        <div className="flex flex-row items-center">
          <img
            src={icon}
            alt="Recommend Icon"
            className="w-6 h-6 object-cover"
          />
          <h1 className="text-xl font-bold ml-2 body-font font-pretendard">
            {title}
          </h1>
        </div>
      </div>
    </Link>
  );
};

export default function Mypage() {
  return (
    <div className="flex flex-col lg:flex-row bg-gray-100 min-h-screen">
      <div className="flex-1">
        <Topbar title={"마이페이지"} />
        <div className="max-w-3xl mx-auto py-10 flex">
          <Menu />
          <div className="flex flex-1 ml-5 mr-5 lg:ml-8 lg:mr-8 flex-wrap">
            <Card title={"내정보"} icon={info} link="myinfo" />
            <Card title={"설정"} icon={setting} padding={true} link="setting" />
            <Card title={"공지사항"} icon={notice} link="notice" />
            <Card
              title={"고객센터"}
              icon={customer}
              padding={true}
              link="customer"
            />
            <Card title={"도움말"} icon={help} link="help" />
          </div>
        </div>
      </div>
    </div>
  );
}
