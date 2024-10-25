import { grid } from "@/public/assets";
import Image from "next/image";

export const Grid = () => {
  return (
    <Image
      src={grid}
      alt="grid"
      className="hidden lg:block absolute -top-[1.125rem] -left-0 z-0 w-full h-full object-contain object-toppointer-events-none opacity-50"
      priority
    />
  );
};
