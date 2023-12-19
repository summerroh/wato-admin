/**
 * v0 by Vercel.
 * @see https://v0.dev/t/3TJP1kftoOs
 */
import { Button } from "@/components/ui/button";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";

import Menu from "../components/Menu";
import AdminMessage from "../components/AdminMessage";

export default function Component() {
  return (
    <div key="1" className="flex h-screen bg-[#E9ECF5] p-7">
      <div className="flex flex-col w-1/5 mr-8">
        <Menu />
      </div>

      <div className="flex flex-col w-4/5 space-y-5">
        <AdminMessage />

        <div className="bg-white mb-5 p-5 rounded-lg shadow h-full">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-xl font-bold">회원관리</h2>
            <p className="text-xs text-gray-400">{`회원관리 > 회원정보`}</p>
          </div>
          <hr className="mb-5 border-gray-300" />
          <div className="flex justify-between items-center mb-5">
            <h3 className="text-md font-semibold">총 10개</h3>
            <div className="flex space-x-2">
              <Select>
                <SelectTrigger id="rows" className="w-60">
                  <SelectValue placeholder="10page" />
                </SelectTrigger>
                <SelectContent className="bg-white" position="popper">
                  <SelectItem value="10">10page</SelectItem>
                  <SelectItem value="20">20page</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger id="type" className="w-60">
                  <SelectValue placeholder="전체" />
                </SelectTrigger>
                <SelectContent className="bg-white" position="popper">
                  <SelectItem value="all">전체</SelectItem>
                  <SelectItem value="specific">특정</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex justify-between items-center mb-5">
            <Button className="mr-2 bg-white border-gray-300 text-black hover:bg-gray-300 border">
              선택 삭제
            </Button>
            <Button className="bg-[#239EC1] text-white px-6">추가</Button>
          </div>
          <Table className="border-b mb-5">
            <TableHeader className="bg-[#FBFDFE] border-t border-black">
              <TableRow>
                <TableHead>
                  <input type="checkbox" />
                </TableHead>
                <TableHead>No</TableHead>
                <TableHead>아이디</TableHead>
                <TableHead>닉네임</TableHead>
                <TableHead>이름</TableHead>
                <TableHead>회원레벨</TableHead>
                <TableHead>휴대폰 번호</TableHead>
                <TableHead>회원상태</TableHead>
                <TableHead>가입일</TableHead>
                <TableHead>포인트</TableHead>
                <TableHead>편집</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="border-0">
              <TableRow>
                <TableCell>
                  <input className="checked:bg-[#239EC1]" type="checkbox" />
                </TableCell>
                <TableCell className="font-medium">1</TableCell>
                <TableCell>pinkfighter</TableCell>
                <TableCell>파이터</TableCell>
                <TableCell>홍길동</TableCell>
                <TableCell>2</TableCell>
                <TableCell>010-123-4567</TableCell>
                <TableCell>정상</TableCell>
                <TableCell>2023-02-01</TableCell>
                <TableCell>2,000</TableCell>
                <TableCell>
                  <FileEditIcon className="cursor-pointer" />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className="flex justify-between items-center mb-5">
            <Button className="mr-2 bg-white border-gray-300 text-black hover:bg-gray-300 border">
              선택 삭제
            </Button>
            <Button className="bg-[#239EC1] text-white px-6">추가</Button>
          </div>
          <div className="flex justify-center items-center mt-5">
            <div className="flex space-x-1">
              <Button variant="ghost">«</Button>
              <Button variant="ghost">1</Button>
              <Button variant="ghost">2</Button>
              <Button variant="ghost">3</Button>
              <Button variant="ghost">4</Button>
              <Button variant="ghost">5</Button>
              <Button variant="ghost">6</Button>
              <Button variant="ghost">»</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FileEditIcon(props) {
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
      <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z" />
    </svg>
  );
}
