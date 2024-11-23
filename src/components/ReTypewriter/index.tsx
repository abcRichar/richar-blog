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
      <div>
        <span ref={el} className="text-[4vw]"></span>
      </div>
    </>
  );
}
