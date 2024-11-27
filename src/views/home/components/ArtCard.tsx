import { useNavigate } from "react-router-dom";

type itemType = {
  name: string;
  tags: Array<string>;
  time: string;
  id: number;
};

interface ArtType {
  item: itemType;
}

export default function ArtCard({ item }: ArtType) {
  let navigate = useNavigate();
  return (
    <section className="flex cursor-pointer w-[80%] mb-[50px]" onClick={() => navigate("/art-details/123")}>
      <div className="w-[240px] h-auto overflow-hidden">
        <img
          className="hover:scale-125 transition-all"
          src="https://images.microcms-assets.io/assets/52150c67242449149a479d53abca5582/e39e0792e286499d91757e7c810923e4/nubelson-fernandes-iE71-TMrrkE-unsplash.jpg?fm=webp&w=414"
          alt=""
        />
      </div>
      <div className="ml-5 flex-1">
        <p className="text-2xl font-bold py-2 mb-2">{item.name}</p>
        <div className="flex items-center mb-4 text-[#333333]">
          {item.tags.map((tag: string) => (
            <div key={tag} className="px-2 py-1 bg-[#f3f3f3] text-base rounded-[5px] flex items-center justify-center mr-2">
              {tag}
            </div>
          ))}
        </div>
        <p className="text-base text-[#333333]">{item.time}</p>
      </div>
    </section>
  );
}
