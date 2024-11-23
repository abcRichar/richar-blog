import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import ThemeSwitch from "../components/theme-switch";
// 提取公共的 className 逻辑
const getNavLinkClass = ({
  isActive,
  isPending,
}: {
  isActive: boolean;
  isPending: boolean;
}) => {
  let classes = "text-base text-[#09090b99] hover:text-[#3a3a3c]";
  if (isPending) {
    classes += " pending";
  }
  if (isActive) {
    classes += " active text-[#09090b] font-bold";
  }
  return classes;
};

// 导航链接组件
const NavItem = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => {
  const isExternal = to.startsWith("http"); // 判断是否为外部链接
  return isExternal ? (
    <a
      href={to}
      className="text-base text-[#09090b99] hover:text-[#3a3a3c]"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ) : (
    <NavLink to={to} className={getNavLinkClass}>
      {children}
    </NavLink>
  );
};

export default function LayHeader() {
  return (
    <div className="lay-header px-4 h-[50px] flex items-center justify-between">
      <div>
        <Link to="/" className="font-bold text-[20px]">
          Richar.dev
        </Link>
      </div>
      <div className="sm:w-[300px] flex items-center justify-between">
        <NavItem to="/">主页</NavItem>
        <NavItem to="/blogs">笔记</NavItem>
        <NavItem to="/about">关于</NavItem>
        <NavItem to="https://github.com/abcRichar">GitHub</NavItem>
        <div>
          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
}
