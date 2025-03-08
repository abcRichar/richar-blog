import { useNavigate, useParams } from "react-router-dom";
import { Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import MarkdownRenderer from "./components/preview-md";
import { useEffect, useState } from "react";
// import indexMd from "@/md/index.md";
/** 获取全部md文件 */
const modulesRoutes = import.meta.glob("@/assets/md/**/*.md", {
  eager: true,
  import: "default",
});

console.log(modulesRoutes, "modulesRoutes");
// import MdOne from "@/assets/md/vue-md/0001.md?raw";

export default function ArtDetails() {
  let navigate = useNavigate();
  let { id } = useParams();
  // console.log(id);
  /** 当前内容 */
  const [mdContent, setMdContent] = useState("");

  /** 匹配当前的md */
  const curItem = Object.keys(modulesRoutes).find((item) => {
    if (item.includes(id as any)) return item;
  });

  // console.log(curItem, "curItem");
  // console.log(modulesRoutes[`${curItem}`], "curItem");

  useEffect(() => {
    let ss = modulesRoutes[`${curItem}`];
    /** 获取md内容 */
    async function getM() {
      const response = await fetch(ss as any);
      const text = await response.text();
      console.log(text, "ces");

      setMdContent(text);
    }
    getM();
  }, [modulesRoutes[`${curItem}`]]);

  function NotArt() {
    return (
      <>
        <div className="text-center text-2xl py-[100px]">文章不存在</div>
      </>
    );
  }

  return (
    <>
      <div className=" mx-auto bg-white p-2 card-br-box">
        <Button
          color="default"
          variant="solid"
          icon={<ArrowLeftOutlined />}
          iconPosition="start"
          onClick={() => {
            navigate("/");
          }}
        >
          返回
        </Button>
        {curItem ? <MarkdownRenderer mdContent={mdContent} /> : <NotArt />}
        {/* <div className="mt-2">
          <MarkdownRenderer mdFilePath={curItem} />
        </div> */}
      </div>
    </>
  );
}
