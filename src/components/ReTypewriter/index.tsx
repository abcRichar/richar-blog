import { useRef, useEffect } from "react";
import Typed from "typed.js";

export default function ReTypewriter({ text }: any) {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: text,
      typeSpeed: 50,
      smartBackspace: true,
      loopCount: 2,
    });
    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <>
      <div className="w-[100%] h-[100%] rounded-[10px] flex items-center justify-center card-box ">
        <span ref={el} className="text-[4vw] text-[#101010] dark:text-[#fff]"></span>
      </div>
    </>
  );
}
