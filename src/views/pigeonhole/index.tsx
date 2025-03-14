import MyBaseInfo from "@/components/MyBaseInfo";

export default function Pigeonhole() {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 mt-4 ">
        <div className="col-span-3 max-md:col-span-4 cursor-pointer w-[100%] card-box p-10">
          <p className="text-5xl">标签</p>
          <div className="mt-2">
            <div className="border-[1px] border-[#e3e8f7] rounded-[5px] px-2 py-[2px] text-xl w-fit hover:bg-[#425aef] hover:text-[#fff] transition delay-100"># 标签</div>
          </div>
        </div>

        <MyBaseInfo />
      </div>
    </>
  );
}
