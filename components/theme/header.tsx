import { elipseBlueBlur } from "@/public/assets";
import Image from "next/image";

export const ElipseBlueBlur = () => {
  return (
    <Image
      src={elipseBlueBlur}
      alt="elipse-blue-blur"
      className="absolute -top-[14rem] -left-[9rem] z-0 pointer-event-none mix-blend-color-dodge"
    />
  );
};
