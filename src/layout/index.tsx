import { Outlet } from "react-router-dom";
import LayHeader from "./lay-header";
export default function Layout() {
  return (
    <div className="max-w-[1200px] min-h-lvh m-auto border-x-[1px] border-x-[#f4f4f5]">
      <div>
        <LayHeader></LayHeader>
      </div>
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
}
