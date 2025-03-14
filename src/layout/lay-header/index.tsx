import { Link } from "react-router-dom";
import "./index.scss";
// import ThemeSwitch from "../components/theme-switch";
import HeaderMini from "./components/header-mini";
import { ModeToggle } from "@/components/mode-toggle";
import HeaderItem from "./components/header-item";

export default function LayHeader() {
  return (
    <div style={{ padding: "0 calc((100% - 1400px + 3rem) / 2)" }} className="bg-white dark:bg-[#1f1f1f] delay-[300] fixed w-full top-0 z-10">
      <div className="lay-header  h-[50px] flex items-center justify-between mx-4">
        <div>
          <Link to="/" className="font-bold text-[20px] dark:text-white ">
            Richar.dev
          </Link>
        </div>
        <div className="  items-center justify-between gap-10 md:flex hidden">
          <HeaderItem to="/">主页</HeaderItem>
          <HeaderItem to="/pigeonhole">归档</HeaderItem>
          <HeaderItem to="/about">关于</HeaderItem>
          <HeaderItem to="https://github.com/abcRichar">GitHub</HeaderItem>
          <ModeToggle />
        </div>
        <div className="md:hidden">
          <HeaderMini />
        </div>
      </div>
    </div>
  );
}
