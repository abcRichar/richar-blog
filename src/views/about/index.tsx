import { useState } from "react";
const { pkg } = __APP_INFO__;
import IconifyIconOffline from "@/components/ReIcon/IconifyIconOffline";
import SunOne from "@iconify/icons-icon-park-outline/sun-one";
import Moon from "@iconify/icons-icon-park-outline/moon";
export default function About() {
  // console.log(pkg, "1");
  const [theme, setTheme] = useState("dark");
  const darkCss = "bg-[#000]";
  const lightCss = "bg-[#fff]";
  return (
    <>
      <button>
        <div
          className={`border-[1px] w-fit p-1 rounded-[5px] cursor-pointer transition ${
            theme === "light" ? darkCss : lightCss
          }`}
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
        >
          {theme === "dark" ? (
            <IconifyIconOffline
              icon={SunOne}
              style={{ width: "30px", height: "30px", color: "#000" }}
            />
          ) : (
            <IconifyIconOffline
              icon={Moon}
              style={{ width: "30px", height: "30px", color: "#fff" }}
            />
          )}
        </div>
      </button>
      <h1>About</h1>
    </>
  );
}
