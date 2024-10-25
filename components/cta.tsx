import Image from "next/image";
import { Button } from "./button";
import { Container } from "./container";
import { icoArrowRight } from "@/public/assets";

export const Cta = () => {
  return (
    <Container>
      <div className="max-w-4xl mx-auto py-5 lg:py-10">
        <div className="flex flex-col items-center rounded-xl lg:rounded-3xl bg-gradient-to-tl from-p-3 to-p-4 p-6 lg:p-16 gap-8">
          <div className="space-y-4 text-center ">
            <div className="caption-1 text-n-1/50">Ready to Start ?</div>
            <h3 className="h3">Start your free trial today !</h3>
          </div>
          <Button
            theme="primary"
            className="flex items-center justify-center gap-1"
          >
            <span>Get Started</span>
            <Image
              src={icoArrowRight}
              alt="Arrow Right"
              width={24}
              height={24}
            />
          </Button>
        </div>
      </div>
    </Container>
  );
};
