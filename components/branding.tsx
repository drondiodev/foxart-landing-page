import Image from "next/image";
import { Container } from "./container";
import { branding } from "../app/constants/index";

export const Branding = () => {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-center lg:gap-1 max-w-5xl w-full mx-auto py-5 lg:py-10">
        {branding.map(
          (branding: { id: string; image: string; alt: string }) => (
            <div
              key={branding.id}
              className="w-1/2 sm:w-1/4 md:w-1/4 lg:w-1/6 flex justify-center lg:p-1"
            >
              <Image
                src={branding.image}
                alt={branding.alt}
                width={180}
                height={96}
              />
            </div>
          )
        )}
      </div>
    </Container>
  );
};
