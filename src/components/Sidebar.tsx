import Image from "next/image";
import Avatar from "../../public/image/avatar.jpg";

export default function Sidebar() {
  return (
    <div className="flex flex-col h-full w-1/4 bg-[#fef3c7] items-center pt-5">
      <Image
        src={Avatar}
        alt="Avatar"
        className="w-[250px] h-[250px] rounded-full shadow-2xl"
      />
      <p className="mt-10 text-[30px] font-bold">Jihyeon Seo</p>
      <p className="text-center">
        Hello everyone!
        <br />
        Welcome to  my dev-blog:)
      </p>
    </div>
  );
}
