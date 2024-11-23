import { useNavigate, useParams } from "react-router-dom";

export default function ArtDetails() {
  let navigate = useNavigate();
  let { id } = useParams();
  console.log(id);

  return (
    <>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        返回
      </button>
      <h1>详情</h1>
    </>
  );
}
