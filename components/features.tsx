import { Container } from "./container";
import { features } from "../app/constants/index";
import Image from "next/image";

export const Features = () => {
  return (
    <Container>
      <div className="max-w-4xl mx-auto py-5 lg:py-10">
        <div className="space-y-4 mb-8 text-center lg:text-start">
          <h2 className="h2">Features</h2>
          <p className="body-1 text-n-5">
            Our landing page template works on all devices, so you only have to
            set it up once and get beautiful results.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-5 lg:gap-10">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="border border-stroke-1 hover:bg-n-8 rounded-xl lg:rounded-2xl p-8 cursor-pointer space-y-8 animate"
            >
              <Image
                src={feature.image}
                alt={feature.alt}
                width={48}
                height={48}
              />
              <div className="space-y-4">
                <h3 className="h4">{feature.title}</h3>
                <p className="body-2 text-n-3">{feature.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};