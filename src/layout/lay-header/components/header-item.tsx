import { NavLink } from "react-router-dom";
import "../index.scss";

export default function HeaderItem({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) {
  const isExternal = to.startsWith("http"); // 判断是否为外部链接
  // 提取公共的 className 逻辑
  const getNavLinkClass = ({
    isActive,
    isPending,
  }: {
    isActive: boolean;
    isPending: boolean;
  }) => {
    let classes = "menu-txt";
    if (isPending) {
      classes += " pending dark:text-[#b3b3b3]";
    }
    if (isActive) {
      classes += " active text-[#09090b] font-bold dark:text-[#b3b3b3]";
    }
    return classes;
  };
  return isExternal ? (
    <a href={to} className="menu-txt" target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ) : (
    <NavLink to={to} className={getNavLinkClass}>
      {children}
    </NavLink>
  );
}
