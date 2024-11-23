import { Outlet } from "react-router-dom";
import LayHeader from "./lay-header";
import LayFooter from "./lay-footer";
export default function Layout() {
  return (
    <div className="max-w-[1200px] min-h-lvh m-auto">
      <div>
        <LayHeader></LayHeader>
      </div>
      <div className="p-4">
        <Outlet />
      </div>
      <div>
        <LayFooter />
      </div>
    </div>
  );
}
