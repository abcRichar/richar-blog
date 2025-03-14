import { Outlet } from "react-router-dom";
import LayHeader from "./lay-header";
import LayFooter from "./lay-footer";
export default function Layout() {
  return (
    <div className="min-h-lvh m-auto pt-[50px]">
      <div>
        <LayHeader></LayHeader>
      </div>
      <div className="my-4 mx-4 " style={{ padding: "0 calc((100% - 1400px + 3rem) / 2)" }}>
        <Outlet />
      </div>
      <div>
        <LayFooter />
      </div>
    </div>
  );
}
