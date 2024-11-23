import ArtCard from "./components/ArtCard";
import ReTypewriter from "@/components/ReTypewriter";
export default function Home() {
  const list = [];

  return (
    <>
      <div className="flex items-center justify-center h-[30vh]">
        <ReTypewriter text={["<i>First</i> sentence.", "Welecom to web."]} />
      </div>
      <div className="mt-10 flex flex-col items-center">
        <ArtCard
          item={{ id: 1, name: "Vue和React区别", tags: ["vue"], time: "2023" }}
        />
        <ArtCard
          item={{
            id: 2,
            name: "为什么需要了解网络安全",
            tags: ["vue"],
            time: "2023",
          }}
        />
        <ArtCard
          item={{ id: 3, name: "什么事敏捷开发", tags: ["vue"], time: "2023" }}
        />
        <ArtCard
          item={{
            id: 4,
            name: "一年年度总结",
            tags: ["感悟", "总结"],
            time: "2023",
          }}
        />
      </div>
    </>
  );
}
