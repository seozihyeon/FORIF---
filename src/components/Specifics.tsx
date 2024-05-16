import Link from "next/link";
import { FC, ReactNode } from "react";

interface SpecificsProps {
  children: ReactNode;
}

const Specifics: FC<SpecificsProps> = ({
  children,
}: SpecificsProps): ReactNode => {
  return (
    <div className="flex flex-col justify-between w-full h-full">
      <div className="flex w-full h-52 bg-[#e2e8f0]">
        <Link href={"/profile"}>Profile</Link>
      </div>
      {children}
      <div className="flex w-full h-52 bg-[#e2e8f0]"></div>
    </div>
  );
};

export default Specifics;
