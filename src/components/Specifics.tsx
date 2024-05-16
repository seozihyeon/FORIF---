import Link from "next/link";
import { FC, ReactNode } from "react";

interface SpecificsProps {
  children: ReactNode;
}

const Specifics: FC<SpecificsProps> = ({
  children,
}: SpecificsProps): ReactNode => {
  return (
    <div className="flex flex-col justify-between w-full h-full ml-50">
      <div className="flex w-full h-52 bg-[#e2e8f0]">
        <Link href={"/profile"}>
        <p className="text-[20px] font-bold">PROFILE</p>
          </Link>
      </div>
      {children}
      <div className="flex w-full h-52 bg-[#e2e8f0]"></div>
    </div>
  );
};

export default Specifics;
