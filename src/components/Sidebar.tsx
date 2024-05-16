import Image from "next/image";
import Avatar from "../../public/image/avatar.jpg";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="flex flex-col h-full w-1/4 bg-[#fef3c7] items-center pt-5">
      <Link href="/">
      <Image
        src={Avatar}
        alt="Avatar"
        className="w-[230px] h-[230px] rounded-full shadow-xl"
      /> </Link>
      <p className="mt-10 text-[30px] font-bold">Jihyeon Seo</p>
      <p className="text-center">
        Hello everyone!
        <br />
        Welcome to  my dev-blog:)
      </p>
    </div>
  );
}
