import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import ThemeSwitch from "../components/theme-switch";
import HeaderMini from "./components/header-mini";
import { ModeToggle } from "@/components/mode-toggle";
import HeaderItem from "./components/header-item";

export default function LayHeader() {
  return (
    <div className="lay-header px-4 h-[50px] flex items-center justify-between">
      <div>
        <Link to="/" className="font-bold text-[20px] dark:text-white ">
          Richar.dev
        </Link>
      </div>
      <div className="sm:w-[300px] flex items-center justify-between ">
        <HeaderItem to="/">主页</HeaderItem>
        <HeaderItem to="/blogs">笔记</HeaderItem>
        <HeaderItem to="/about">关于</HeaderItem>
        <HeaderItem to="https://github.com/abcRichar">GitHub</HeaderItem>
        <div>
          {/* <ThemeSwitch /> */}
          <ModeToggle />
        </div>
      </div>
      <HeaderMini />
    </div>
  );
}
