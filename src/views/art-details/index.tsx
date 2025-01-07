import { useNavigate, useParams } from "react-router-dom";
import { Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import MarkdownRenderer from "./components/preview-md";
// import indexMd from "@/md/index.md";
const modulesRoutes = import.meta.glob("/src/md/**/*.md");
console.log(modulesRoutes,'modulesRoutes');

export default function ArtDetails() {
  let navigate = useNavigate();
  let { id } = useParams();
  console.log(id);

  const curItem = Object.keys(modulesRoutes).find((item) => {
    if (item.includes(id as any)) return item;
  });

  // TODO: 打包后无法获取到打包后的地址

  function NotArt() {
    return (
      <>
        <div className="text-center text-2xl py-[100px]">文章不存在</div>
      </>
    );
  }

  return (
    <>
      <div className="w-[80%] mx-auto">
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
        {curItem ? <MarkdownRenderer mdFilePath={curItem} /> : <NotArt />}
        {/* <div className="mt-2">
          <MarkdownRenderer mdFilePath={curItem} />
        </div> */}
      </div>
    </>
  );
}
