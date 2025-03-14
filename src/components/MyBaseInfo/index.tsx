import { motion } from "motion/react";
import { Github } from "lucide-react";

export default function MyBaseInfo() {
  return (
    <>
      <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.175 }} className="col-span-1 max-md:hidden">
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
      </motion.div>
    </>
  );
}
