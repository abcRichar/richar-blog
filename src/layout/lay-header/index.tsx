import { Link, NavLink } from "react-router-dom";
import "./index.scss";
export default function LayHeader() {
  return (
    <div className="lay-header px-4 h-[50px] flex items-center justify-between  border-b-[1px] border-b-[#f4f4f5]">
      <div>
        <Link to="/" className="font-bold text-[20px]">
          Richar.dev
        </Link>
      </div>
      <div className="sm:w-[200px] flex items-center justify-between">
        <NavLink
          to="/"
          className={({ isActive, isPending }) => {
            let classes = "text-sm  text-[#09090b99] hover:text-[#3a3a3c]"; // 默认类名
            if (isPending) {
              classes += " pending"; // 加载中时添加 pending 类名
            }
            if (isActive) {
              classes += " active text-[#09090b] font-bold"; // 激活时添加 active 类名
            }
            return classes;
          }}
        >
          主页
        </NavLink>
        <NavLink
          to="/blogs"
          className={({ isActive, isPending }) => {
            let classes = "text-sm text-[#09090b99] hover:text-[#3a3a3c]"; // 默认类名
            if (isPending) {
              classes += " pending"; // 加载中时添加 pending 类名
            }
            if (isActive) {
              classes += " active text-[#09090b] font-bold"; // 激活时添加 active 类名
            }
            return classes;
          }}
        >
          笔记
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) => {
            let classes = "text-sm text-[#09090b99] hover:text-[#3a3a3c]"; // 默认类名
            if (isPending) {
              classes += "pending"; // 加载中时添加 pending 类名
            }
            if (isActive) {
              classes += "active text-[#09090b] font-bold"; // 激活时添加 active 类名
            }
            return classes;
          }}
        >
          关于
        </NavLink>
      </div>
    </div>
  );
}
