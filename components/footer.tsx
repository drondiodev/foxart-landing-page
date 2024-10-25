import { Container } from "./container";
import Image from "next/image";
import { socials } from "@/app/constants";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="bg-n-7 py-5 lg:py-12 mt-5 lg:mt-16 text-n-5">
      <Container className="flex flex-col gap-3 lg:flex-row lg:gap-1 items-center justify-between body-3 text-n-3">
        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <Link
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={social.ico} alt={social.alt} width={20} height={20} />
            </Link>
          ))}
        </div>
        <div className="space-x-4">
          <a href="#/" target="_blank" rel="noopener noreferrer">
            Terms & Conditions
          </a>
          <a href="#/" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
        </div>
        <div>© ${new Date().getFullYear()} Foxart. All rights reserved.</div>
      </Container>
    </div>
  );
};
