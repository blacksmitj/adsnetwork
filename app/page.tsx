import Products from "./components/home/Products";
import Hero from "./components/home/Hero";
import SubHero from "./components/home/SubHero";
import PartnerClient from "./components/home/PartnerClient";
import Maps from "./components/home/Maps";

export const metadata = {
  title: "ADS Network",
  description: "INTERNET FOR BETTER LIFE",
};

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <div className="flex flex-col gap-24 mt-16 mb-24 w-screen">
        <SubHero />
        <PartnerClient />
        <Products />
        <Maps />
      </div>
    </div>
  );
}
