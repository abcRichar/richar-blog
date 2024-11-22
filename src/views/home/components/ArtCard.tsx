import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function ArtCard() {
  return (
    <section className="flex cursor-pointer">
      <div className="w-[20%]">
        <img
          src="https://blog-demo.wisp.blog/_next/image?url=https%3A%2F%2Fimagedelivery.net%2FlLmNeOP7HXG0OqaG97wimw%2Fclvlugru90000o4g8ahxp069s%2F7f6f52d6-cdd5-4b8d-9f7e-1be06e031028.png%2Fpublic&w=1920&q=75"
          alt=""
        />
      </div>
      <div className="ml-4">
        <p className="text-2xl font-bold py-2">前端如何实现文件的在线预览</p>
        <div className="flex items-center mb-2 text-[#333333]">
          <div className=" px-2 py-1 bg-[#f3f3f3] text-xs rounded-[5px] flex items-center justify-center mr-2">#Vue</div>
          <div className=" px-2 py-1 bg-[#f3f3f3] text-xs rounded-[5px] flex items-center justify-center mr-2">#JavaScript</div>
        </div>
        <p className="text-base text-[#333333]">2024·01·12</p>
      </div>
    </section>
  );
}
