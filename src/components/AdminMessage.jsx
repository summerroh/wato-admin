import React from "react";
import { Button } from "@/components/ui/button";

export default function AdminMessage() {
  return (
    <div className="bg-white p-5 rounded-lg shadow">
      <div className="flex justify-between items-center">
        <h2 className="text-md font-semibold">관리자메세지</h2>
        <Button className="bg-[#239EC1] text-white">로그아웃</Button>
      </div>
    </div>
  );
}
