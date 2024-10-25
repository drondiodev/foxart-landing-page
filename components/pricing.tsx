import { pricing } from "@/app/constants";
import { Container } from "./container";
import { Headings } from "./headings";
import Image from "next/image";
import { icoCheck } from "@/public/assets";
import { Button } from "./button";

export const Pricing = () => {
  return (
    <div id="pricing">
      <Headings title="Foxart" subtitle="Pricing" />
      <Container>
        <div className="grid lg:grid-cols-3 gap-5 lg:gap-10 lg:mb-16">
          {pricing.map((pricing) => (
            <div
              key={pricing.id}
              className={pricing.featured ? "" : "lg:mt-14"}
            >
              <div
                className={`
            ${pricing.featured ? "bg-n-7" : "bg-n-8"}
            rounded-xl lg:rounded-2xl p-6 lg:p-12 text-center lg:text-start
            `}
              >
                <div className="text-caption-1 text-n-5 uppercase">
                  {pricing.plan}
                </div>
                <div className="space-y-3">
                  <span className="h1 text-n-5">€</span>
                  <span className="h1">{pricing.amount}</span>
                  <hr
                    className={`border-t mt-7 mb-4 lg:mt-16 lg:mb-8 ${
                      pricing.featured ? "border-n-6" : "border-stroke-1"
                    }`}
                  />
                  <div className="space-y-4 pb-8">
                    {pricing.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-center lg:justify-start gap-3"
                      >
                        <div>
                          <Image
                            src={icoCheck}
                            alt="check"
                            width={24}
                            height={24}
                          />
                        </div>
                        <div className="body-2 text-n-3">{feature}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center lg:justify-start">
                    <Button theme={pricing.featured ? "primary" : "secondary"}>
                      {pricing.amount > 0
                        ? "Buy this plan"
                        : "Get started for Free"}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
