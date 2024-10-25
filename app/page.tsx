import { Branding } from "@/components/branding";
import { Bulletpoints } from "@/components/bulletpoints";
import { Cta } from "@/components/cta";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Pricing } from "@/components/pricing";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Branding />
      <Features />
      <Cta />
      <Bulletpoints />
      <Pricing />
      <Footer />
    </div>
  );
}
