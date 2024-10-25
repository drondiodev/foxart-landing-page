import { Button } from "./button";
import { Container } from "./container";
import Image from "next/image";
import { uiInterface } from "../public/assets/index";
import { Grid } from "./theme/hero";

export const Hero = () => {
  return (
    <div className="relative">
      <Container className="relative z-10 pt-10 lg:py-16 space-y-16">
        <div className="text-center max-w-2xl mx-auto px-16 lg:px-0 space-y-7">
          <h1 className="hero">
            Build{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-p-3 to-p-2">
              {" "}
              Modern
            </span>{" "}
            <span>Saas for Startups</span>
          </h1>
          <p className="body-1 text-n-5">
            A pseudo-Latin text used in web design, layout, and printing in
            place of things to emphasise layouts for previewing layouts and
            visual mockups.
          </p>
          <Button theme="primary" href="/#pricing">
            Pricing and Plans
          </Button>
        </div>
        <Image src={uiInterface} alt="hero" />
      </Container>
      <Grid />
    </div>
  );
};
