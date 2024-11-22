import ArtCard from "./components/ArtCard";
export default function Home() {
  return (
    <>
      <div className=" mt-10 flex justify-center items-center">
        <ArtCard />
        <ArtCard />
        <ArtCard />
        <ArtCard />
      </div>
      <div className="mt-[50px] h-[1px] border-b-[1px] border-b-[#000]"></div>
    </>
  );
}
