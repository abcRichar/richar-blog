import { useNavigate, useParams } from "react-router-dom";
import MarkdownRenderer from "./components/preview-md";
export default function ArtDetails() {
  let navigate = useNavigate();
  let { id } = useParams();
  console.log(id);
  // 打包后md文件路径就不对了

  return (
    <>
      <div className="w-[60%] mx-auto">
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          返回
        </button>
        <div>
          <MarkdownRenderer mdFilePath="/src/md/index.md" />
        </div>
      </div>
    </>
  );
}
