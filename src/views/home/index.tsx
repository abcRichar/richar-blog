import ArtCard from "./components/ArtCard";
import ReTypewriter from "@/components/ReTypewriter";
import { Github } from "lucide-react";
import { motion } from "motion/react";

export default function Home() {
  return (
    <>
      <motion.div className="flex items-center justify-center h-[30vh] ">
        <ReTypewriter text={["<i>First</i> sentence.", "Welecom to web."]} />
      </motion.div>
      <div className="grid grid-cols-4 gap-4 mt-4">
        <div className="grid grid-cols-2 gap-4 col-span-3">
          <ArtCard
            item={{
              id: 1,
              name: "Vue和React区别",
              tags: ["vue"],
              time: "2023",
              path: "0001",
            }}
          />
          <ArtCard
            item={{
              id: 2,
              name: "为什么需要了解网络安全",
              tags: ["vue"],
              time: "2023",
              path: "0002",
            }}
          />
          <ArtCard item={{ id: 3, name: "什么事敏捷开发", tags: ["vue"], time: "2023" }} />
          <ArtCard
            item={{
              id: 4,
              name: "一年年度总结",
              tags: ["感悟", "总结"],
              time: "2023",
            }}
          />
        </div>
        <div className="col-span-1 ">
          <div className="rounded-[10px] p-4 bg-[#475ff0]">
            <div className="bg-[#ffffff30] p-1 rounded-xl text-white w-fit m-auto text-base">只有敢于尝试,才能创造出辉煌</div>
            <div className="w-[100px] h-[100px] my-16 m-auto rounded-full overflow-hidden border-4 border-white">
              <img src="https://avatars.githubusercontent.com/u/96232441?v=4" className="w-full h-full" alt="" />
            </div>
            <div className="flex justify-between items-center">
              <div className="text-2xl text-white">Richar</div>
              <div className="text-xl">
                <Github className="cursor-pointer text-white" />
              </div>
            </div>
          </div>

          <div className="card-box p-4 bg-[#475ff0] mt-4">
            <div className="bg-[#ffffff30] p-1 rounded-xl text-white w-fit m-auto text-base">只有敢于尝试,才能创造出辉煌</div>
            <div className="w-[100px] h-[100px] my-16 m-auto rounded-full overflow-hidden border-4 border-white">
              <img src="https://avatars.githubusercontent.com/u/96232441?v=4" className="w-full h-full" alt="" />
            </div>
            <div className="flex justify-between items-center">
              <div className="text-2xl text-white">Richar</div>
              <div className="text-xl">
                <Github className="cursor-pointer text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
