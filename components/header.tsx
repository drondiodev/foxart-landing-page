import React from "react";
import Image from "next/image";
import { logoApp } from "../public/assets/index";
import { Container } from "./container";
import { Button } from "./button";
import { ElipseBlueBlur } from "./theme/header";

export const Header = () => {
  return (
    <div className="border-b border-stroke-1">
      <Container className="relative bg-n-9">
        <div className="flex relative z-10 justify-between items-center py-4 lg:py-6">
          <Image src={logoApp} width={104} alt="logo" />
          <Button theme="primary" href="#">
            Login
          </Button>
        </div>
        <ElipseBlueBlur />
      </Container>
    </div>
  );
};
